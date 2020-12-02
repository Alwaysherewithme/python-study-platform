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
            PostsList: [],

            // Third list of posts.
            PostsListThree: [
                {
                    author: "John James",
                    authorAvatar: require("../images/avatars/1.jpg"),
                    title: "Course_Name",
                    body:
                        "Description",
                    date: "29 February 2019"
                },
                {
                    author: "John James",
                    authorAvatar: require("../images/avatars/2.jpg"),
                    title: "Course_Name",
                    body:
                        "Description",
                    date: "29 February 2019"
                },
                {
                    author: "John James",
                    authorAvatar: require("../images/avatars/3.jpg"),
                    title: "Course_Name",
                    body: "Description",
                    date: "29 February 2019"
                }
            ]
        };
    }

    // https://www.cnblogs.com/gerry2019/p/12432850.html
    async componentDidMount() {
        let data = await fetch('http://localhost:5000/api/courses')
            .then(function (response) {
                return response.json();
            });
        // .then(function (data) {
        //   this.setState({ PostsList: data.courses })
        // });
        this.setState({
            PostsList: data.courses
        });
    }

    render() {
        const {
            PostsList, PostsListOne, PostsListTwo, PostsListThree, PostsListFour
        } = this.state;

        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Courses" subtitle="Components" className="text-sm-left" />
                </Row>
                <Row>
                    {PostsListThree.map((post, idx) => (
                        <Col lg="4" key={idx}>
                            <Card small className="card-post mb-4">
                                <CardBody>
                                    <span className="text-semibold text-fiord-blue">Subject_Code</span>
                                    <h5 className="card-title">{post.title}</h5>
                                    <span className="text-semibold text-fiord-blue">Course_Number</span>
                                    &nbsp;
                                    <span className="text-semibold text-fiord-blue">Course_Hours</span>
                                    <p className="card-text text-muted">{post.body}</p>
                                </CardBody>
                                <CardFooter className="border-top d-flex">
                                    <div className="card-post__author d-flex">
                                        <Button size="sm" theme="white" href="/course-sections">
                                            <i className="fas fa-book mr-1" /> Take a lecture
                                        </Button>
                                        {/* <a href="/course-sections"><i className="fas fa-chalkboard-teacher">Have a learn</i></a> */}
                                    </div>
                                    <div className="my-auto ml-auto">
                                        <Button size="sm" theme="white" href="course-tests">
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
