import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    Button,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    ListGroup,
    ListGroupItem,
    Container, Row, Col, FormRadio,
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
        // let data1 = await fetch(`${API_HOST}/api/courses/${window.location.search.split('=')[1]}`)
        let data2 = await fetch(`${API_HOST}/api/getCourseSections/${GLOBAL_COURSE_ID}`)
            .then(function (response) {
                return response.json();
            });
        // let data2 = await fetch(`http://localhost:5000/api/getAllCourseSections/${window.location.search.split('=')[1]}`)
        //     .then(function (response) {
        //         return response.json();
        //     });
        let data3 = await fetch(`${API_HOST}/api/getMyStudy/${auth.getItem("uuid")}`)
            .then(function (response) {
                return response.json();
            });
        // .then(function (data) {
        //   this.setState({ PostsList: data.courses })
        // });
        this.setState({
            // course: data1.courseName,
            sectionDetail: data2.allCourseSections,
            allSections: data2.allCourseSections,
            currentSection: data2.allCourseSections[0],
            myStudy: data3.myStudy,
            chartData: {
                datasets: [
                    {
                        hoverBorderColor: "#ffffff",
                        data: [Object.keys(data3.myStudy).length, data2.allCourseSections.length],
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
                    tooltips: {
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
        console.log("---------", this.state, idx)
        let curl = this.state.allSections[idx];
        this.setState({
            currentSection: curl,
            currentSectionContent: sectionPage.sectionContent[idx]
        })
    }

    submitTest = async (event, sectionId) => {
        event.preventDefault();
        // let p1 = document.getElementsByName('problem_1').value
        // let p2 = document.getElementsByName('problem_2').value
        // let p3 = document.getElementsByName('problem_3').value
        // console.log("Submit Test ....", p1, p2, p3)
        // const form = useRef(null)
        let testForm = document.getElementById('testForm');
        // let formData = new FormData(testForm);
        var myRadioInput1 = testForm.elements.problem_1.value
        var myRadioInput2 = testForm.elements.problem_2.value
        var myRadioInput3 = testForm.elements.problem_3.value
        // let formData = new FormData(form.current)
        // formData.append('p1', )
        console.log("Form Data ... ", myRadioInput1, myRadioInput2, myRadioInput3)
        // alert(sectionId)
        if(myRadioInput1 && myRadioInput2 && myRadioInput3) {
            let data = {
                Person_id: auth.getItem("uuid"),
                Associated_Section_id: sectionId,
                Answer_Person: myRadioInput1 + "," + myRadioInput2 + "," + myRadioInput3
            }
            console.log("data ------ ", data)
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
                        console.log('Section Answer has been added! ---- ', data.mySectionAnswers)
                        // window.location.reload();
                    } else {
                        alert('Error occured...')
                    }
                });
        }
    }

    getMyStudyDetail = (sectionId) => {
        let { myStudy } = this.state;
        console.log("mystudy.... ", this.state)
        // for (let i = 0; i < myStudy.length; i++) {
        //     if (sectionId = myStudy[i].Associated_Section_id) {
        //         return myStudy[i]
        //     }
        // }
    }

    render() {
        const { course, allSections, currentSection, currentSectionContent, myStudy } = this.state;
        console.log("---------", this.state)
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle title="章节学习" subtitle="理论 /" md="12" className="ml-sm-auto mr-sm-auto" />
                </Row>
                <Row>
                    <Col lg="3">
                        <Card small className="mb-4 pt-3">
                            <CardHeader className="border-bottom text-center">
                                {/* <div className="mb-3 mx-auto">
                                    <Button theme="white" href="/course-posts">Return to Courses</Button>
                                </div> */}
                                {/* <h4 className="mb-0">{course.Course_Name}</h4>
                                <p>{allSections[0].Year}</p>
                                <p>{allSections[0].Semester}</p>
                                <p>{allSections[0].Enrollment}</p> */}
                                <canvas
                                    height="220"
                                    ref={this.canvasRef}
                                    className="blog-users-by-device m-auto"
                                />
                            </CardHeader>
                            <ListGroup flush>
                                {
                                    allSections.map((section, idx) => (
                                        <ListGroupItem className="px-4" onClick={() => { this.getCurrentSection(idx) }}>
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
                                                // value={this.getMyStudyDetail(section.Section_ID).Section_Score}
                                                >
                                                    <span className="progress-value">
                                                        {myStudy[section.Section_ID] && myStudy[section.Section_ID].Section_Score} %
                                                        {/* {this.getMyStudyDetail(section.Section_ID).Section_Score} % */}
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
                                {/* <h6 className="m-0">{currentSection.Comment1}</h6> */}
                                <h6 className="m-0"></h6>
                            </CardHeader>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row className="border-bottom">
                                        <Col>
                                            {currentSectionContent()}
                                            {/* <Lesson /> */}
                                            {/* </Form> */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12" className="form-group text-center">
                                            {/* <button click={(e) => this.submitTest(e, currentSection.ID)}>Submit Test</button> */}
                                            <Button theme="accent" className="btn-lg" onClick={e => this.submitTest(e, currentSection.Section_ID)} >提交答案</Button>
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

/*
CourseSections.propTypes = {
    userDetails: PropTypes.object,
    title: PropTypes.string
};
*/

// CourseSections.defaultProps = {
//     // title: "Section Details",
//     chartData: {
//         datasets: [
//             {
//                 hoverBorderColor: "#ffffff",
//                 data: [20, this.state.allSections.length],
//                 backgroundColor: [
//                     "rgba(0,123,255,0.9)",
//                     "rgba(0,123,255,0.3)"
//                 ]
//             }
//         ],
//         labels: ["Completed", "Undertested"]
//     }
// };

export default CourseSections;
