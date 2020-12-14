/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Badge,
    CardFooter,
    Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
const contentManagement = require("../images/content-management/1.jpeg");

class CoursePosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
            isMyCourse: false
        };
    }

    // https://www.cnblogs.com/gerry2019/p/12432850.html
    async componentDidMount() {
        let data = await fetch(`http://localhost:5000/api/getAllCurriculumCourses/${window.location.search.split('=')[1]}`)
            .then(function (response) {
                return response.json();
            });
        this.setState({
            courses: data.allCurriculumCourses,
            isMyCourse: true
        });
    }

    render() {
        const {
            courses, isMyCourse
        } = this.state;

        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Courses" subtitle="Curriculums / Courses" className="text-sm-left" />
                </Row>
                <Row>
                    {courses.map((course, idx) => (
                        <Col lg="4" key={idx}>
                            <Card small className="card-post mb-4">
                                <CardBody>
                                    <span className="text-semibold text-fiord-blue">Subject_Code</span>
                                    <h5 className="card-title">{course.Subject_Code}</h5>
                                    <span className="text-semibold text-fiord-blue">{course.Course_Number}</span>
                                    &nbsp;
                                    <p className="card-text text-muted">{course.Description}</p>
                                    <span className="text-semibold text-fiord-blue">Course_Hours</span>
                                    <p className="card-text text-muted">{course.Course_Hours}</p>
                                </CardBody>
                                <CardFooter className="border-top d-flex">
                                    <div className="card-post__author d-flex">
                                        <Button size="sm" theme="white" href={`/course-sections?course-id=${course.id}`}>
                                            <i className="fas fa-book mr-1" /> Take a lecture
                                        </Button>
                                        {/* <a href="/course-sections"><i className="fas fa-chalkboard-teacher">Have a learn</i></a> */}
                                    </div>
                                    <div className="my-auto ml-auto">
                                        <Button size="sm" theme="white" href={`/course-tests?course-id=${course.id}`}>
                                            <i className="fas fa-graduation-cap mr-1" /> Go to test
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        );
    }
}

export default CoursePosts;
