import React from "react";
import {
    Card,
    CardHeader,
    Button,
    ListGroup,
    ListGroupItem,
    Container, Row, Col,
    Progress
} from "shards-react";
import sectionPage from './section-page';
import { API_HOST } from "../api/constants";

import PageTitle from "../components/common/PageTitle";
import Chart from '../utils/chart';

import * as auth from "../services/Session";
import Errors from "./Errors";

// var __html = require('../test_section_2.html');
// var template = { __html: '<h1>H!</h1>' };
// var template = { __html: __html };

class CourseSections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curriculum: [],
            sectionDetail: {},
            allSections: [],
            currentSection: {},
            currentSectionContent: sectionPage.sectionContent[0],
            myStudy: {},
            chartData: {
                datasets: [
                    {
                        hoverBorderColor: "#ffffff",
                        data: [20, 80],
                        backgroundColor: [
                            "rgba(0,123,255,0.9)",
                            "rgba(0,123,255,0.3)"
                        ]
                    }
                ],
                labels: ["Completed", "Undertested"]
            }
        };
        this.canvasRef = React.createRef();
    }

    async componentDidMount() {
        let curriculumData = await fetch(`${API_HOST}/api/getCourseCurriculum/${window.location.search.split("=")[1]}`)
            .then(function (response) {
                return response.json();
            }).catch(error => {
                console.log(error);
            });
        let sectionData = await fetch(`${API_HOST}/api/getCourseSections/${window.location.search.split("=")[1]}`)
            .then(function (response) {
                return response.json();
            }).catch(error => {
                console.log(error);
            });
        let myStudyData = await fetch(`${API_HOST}/api/getMyStudy/${auth.getItem("uuid")}`)
            .then(function (response) {
                return response.json();
            }).catch(error => {
                console.log(error);
            });
        this.setState({
            curriculum: curriculumData.courseCurriculum,
            sectionDetail: sectionData.allCourseSections,
            allSections: sectionData.allCourseSections,
            currentSection: sectionData.allCourseSections[0],
            myStudy: myStudyData.myStudy,
            chartData: {
                datasets: [
                    {
                        hoverBorderColor: "#ffffff",
                        data: [Object.keys(myStudyData.myStudy).length, (sectionData.allCourseSections.length - Object.keys(myStudyData.myStudy).length)],
                        backgroundColor: [
                            "rgba(0,123,255,0.9)",
                            "rgba(0,123,255,0.3)"
                        ]
                    }
                ],
                labels: ["已测试", "未测试"]
            }
        });
        const chartConfig = {
            type: "pie",
            data: this.state.chartData,
            options: {
                ...{
                    legend: {
                        position: "bottom",
                        labels: {
                            padding: 25,
                            boxWidth: 20
                        }
                    },
                    cutoutPercentage: 0,
                    tooltip: {
                        custom: false,
                        mode: "index",
                        position: "nearest"
                    }
                },
                ...this.props.chartOptions
            }
        };
        this.canvasRef.current && new Chart(this.canvasRef.current, chartConfig);
    }

    getCurrentSection = (e, idx) => {
        e.preventDefault();
        let curl = this.state.allSections[idx];
        this.setState({
            currentSection: curl,
            currentSectionContent: sectionPage.sectionContent[idx]
        })
    }

    submitTest = async (event, sectionId) => {
        event.preventDefault();
        let testForm = document.getElementById('testForm');
        var myRadioInput1 = testForm.elements.problem_1.value
        var myRadioInput2 = testForm.elements.problem_2.value
        var myRadioInput3 = testForm.elements.problem_3.value
        if (myRadioInput1 && myRadioInput2 && myRadioInput3) {
            let data = {
                Person_id: auth.getItem("uuid"),
                Associated_Section_id: sectionId,
                Associated_Curriculum_id: this.state.curriculum[0].Associated_Curriculum_id,
                Associated_Course_id: window.location.search.split("=")[1],
                Answer_Person: myRadioInput1 + "," + myRadioInput2 + "," + myRadioInput3
            }
            fetch(`${API_HOST}/api/postMySectionAnswers`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.mySectionAnswers) {
                        window.location.reload();
                    } else {
                        alert('请刷新页面试试')
                    }
                });
        }
    }

    render() {
        const { allSections, currentSection, currentSectionContent, myStudy } = this.state;
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle title="章节学习" subtitle="理论 / 课程大纲 / 课程列表 /" md="12" className="ml-sm-auto mr-sm-auto" />
                </Row>
                {
                allSections.length > 0 ?
                    (<Row>
                    <Col lg="3">
                        <Card small className="mb-4 pt-3">
                            <CardHeader className="border-bottom text-center">
                                <canvas
                                    height="220"
                                    ref={this.canvasRef}
                                    className="blog-users-by-device m-auto"
                                />
                            </CardHeader>
                            <ListGroup flush>
                                {
                                    allSections.map((section, idx) => (
                                        <ListGroupItem key={idx} className="px-4" onClick={(e) => { this.getCurrentSection(e, idx) }}>
                                            <div className="progress-wrapper">
                                                <strong className="text-muted d-block mb-2">
                                                    {`${section.Section_ID} - ${section.Title}`}
                                                </strong>
                                            </div>
                                            <div className="progress-wrapper">
                                                <strong className="text-muted d-block mb-2">
                                                    得分：
                                                </strong>
                                                <Progress
                                                    className="progress-sm"
                                                    value={myStudy[section.Section_ID] && myStudy[section.Section_ID].Section_Score}
                                                >
                                                    <span className="progress-value">
                                                        {myStudy[section.Section_ID] && myStudy[section.Section_ID].Section_Score} %
                                                    </span>
                                                </Progress>
                                            </div>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col lg="9">
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                            <a className="m-0" href={`/course-posts?coid=${window.location.search.split("=")[1]}`}>&larr; 返回课程列表</a>
                            </CardHeader>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row>
                                        <Col>
                                            {currentSectionContent()}
                                            {/* <iframe sandbox="allow-same-origin" srcDoc={__html} /> */}
                                            {/* <div dangerouslySetInnerHTML={template}></div> */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12" className="form-group text-center">
                                            <Button theme="accent" onClick={e => this.submitTest(e, currentSection.Section_ID)} >提交答案</Button>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>)
                 : <Errors />
                }
            </Container>
        )
    }
}

export default CourseSections;
