import React from "react";
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
    Container, Row, Col,
    Progress
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Chart from "../utils/chart";

let exampleAllSections = [
    {
        name: "Section 1",
        content: "Section content 1"
    },
    {
        name: "Section 2",
        content: "Section content 2"
    },
    {
        name: "Section 3",
        content: "Section content 3"
    },
    {
        name: "Section 4",
        content: "Section content 4"
    }
];

const exampleSectionDetail = {
    courseName: "Course_Name_1",
    year: 2020,
    semester: "FALL",
    enrollment: "Enrollment",
    comment1: "Comment 1",
    comment2: "Comment 2"
};

class CourseTests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionDetail: {},
            allSections: [],
            currentSection: {}
        };
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.setState({
            sectionDetail: exampleSectionDetail,
            allSections: exampleAllSections,
            currentSection: exampleAllSections[0]
        });
        const chartConfig = {
            type: "pie",
            data: this.props.chartData,
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
        this.setState({
            sectionDetail: exampleSectionDetail,
            allSections: exampleAllSections,
            currentSection: exampleAllSections[idx]
        })
    }

    render() {
        const { sectionDetail, allSections, currentSection } = this.state;
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle title="Tests" subtitle="Curriculums / Courses / Tests" md="12" className="ml-sm-auto mr-sm-auto" />
                </Row>
                <Row>
                    <Col lg="3">
                        <Card small className="mb-4 pt-3">
                            <CardHeader className="border-bottom text-center">
                                <div className="mb-3 mx-auto">
                                    <Button theme="white" href="/course-posts">Return to Courses</Button>
                                </div>
                                {/* <h4 className="mb-0">Course_Name</h4>
                        <p>Year</p>
                        <p>Semester</p>
                        <p>Enrollment</p>
                        <p>Comment1</p>
                        <p>Comment2</p> */}
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
                                                    {section.name}
                                                </strong>
                                            </div>
                                            <div className="progress-wrapper">
                                                <strong className="text-muted d-block mb-2">
                                                    Score:
          </strong>
                                                <Progress
                                                    className="progress-sm"
                                                    value={80}
                                                >
                                                    <span className="progress-value">
                                                        80 %
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
                                <h6 className="m-0">{currentSection.content}</h6>
                            </CardHeader>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row>
                                        <Col>
                                            <Form>
                                                <Row form>
                                                    {/* Description */}
                                                    <Col md="12" className="form-group">
                                                        <label htmlFor="feDescription">Test</label>
                                                        <FormTextarea id="feDescription" rows="5" />
                                                    </Col>
                                                </Row>
                                                <Button theme="accent">Submit Test</Button>
                                            </Form>
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

CourseTests.propTypes = {
    /**
     * The user details object.
     */
    userDetails: PropTypes.object,
    title: PropTypes.string,
    /**
   * The component's title.
   */
    title: PropTypes.string,
    /**
     * The chart config object.
     */
    chartConfig: PropTypes.object,
    /**
     * The Chart.js options.
     */
    chartOptions: PropTypes.object,
    /**
     * The chart data.
     */
    chartData: PropTypes.object
};

CourseTests.defaultProps = {
    userDetails: {
        name: "Sierra Brooks",
        avatar: "",
        jobTitle: "Project Manager",
        performanceReportTitle: "Workload",
        performanceReportValue: 74,
        metaTitle: "Description",
        metaValue:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
    },
    title: "Section Details",
    chartData: {
        datasets: [
            {
                hoverBorderColor: "#ffffff",
                data: [80.5, 19.5],
                backgroundColor: [
                    "rgba(0,123,255,0.9)",
                    "rgba(0,123,255,0.3)"
                ]
            }
        ],
        labels: ["Completed", "Undertested"]
    }
};

export default CourseTests;
