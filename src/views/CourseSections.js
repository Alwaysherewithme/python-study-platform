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
import { API_HOST, GLOBAL_COURSE_ID } from "../api/constants";

import PageTitle from "../components/common/PageTitle";
import Chart from '../utils/chart';

import * as auth from "../services/Session";



class CourseSections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {},
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
        let sectionData = await fetch(`${API_HOST}/api/getCourseSections/${GLOBAL_COURSE_ID}`)
            .then(function (response) {
                return response.json();
            });
        let myStudyData = await fetch(`${API_HOST}/api/getMyStudy/${auth.getItem("uuid")}`)
            .then(function (response) {
                return response.json();
            });
        this.setState({
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
        new Chart(this.canvasRef.current, chartConfig);
    }

    getCurrentSection = (idx) => {
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
                    <PageTitle title="章节学习" subtitle="理论 /" md="12" className="ml-sm-auto mr-sm-auto" />
                </Row>
                <Row>
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
                                        <ListGroupItem key={idx} className="px-4" onClick={() => { this.getCurrentSection(idx) }}>
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
                            </CardHeader>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row>
                                        <Col>
                                            {currentSectionContent()}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12" className="form-group text-center">
                                            {/* <button click={(e) => this.submitTest(e, currentSection.ID)}>Submit Test</button> */}
                                            <Button theme="accent" onClick={e => this.submitTest(e, currentSection.Section_ID)} >提交答案</Button>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CourseSections;
