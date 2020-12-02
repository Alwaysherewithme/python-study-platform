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
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
const contentManagement = require("../images/content-management/1.jpeg");

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      PostsList: [],
      // Second list of posts.
      PostsListTwo: [
        {
          backgroundImage: require("../images/content-management/5.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "Anna Ken",
          authorAvatar: require("../images/avatars/0.jpg"),
          title: "Curriculum 1",
          body: "This is curriculum 1...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/6.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "John James",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Curriculum 2",
          body: "This is curriculum 2...",
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
          <PageTitle sm="4" title="Curriculums" subtitle="Components" className="text-sm-left" />
        </Row>

        {/* Second Row of Posts */}{/*
        <Row>
          {PostsListTwo.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="/course-posts"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Visit all courses
                    </a>
                  </div>
                </div>
                <Row>
                  <Col lg="10" sm="12" className="mb-4" >1</Col>
                  <Col lg="10" sm="12" className="mb-4" >1</Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
  */}
        <Row>
          <Col lg="4" sm="12" className="mb-4">
            <Card small className="h-100">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Cur_Name</h6>
              </CardHeader>
              <CardBody className="d-flex py-0">
                {/* <canvas
                  height="220"
                  ref=""
                  className="blog-users-by-device m-auto"
                /> */}
                {/* <ListGroup small flush className="list-group-small">
                  {referralData.map((item, idx) => (
                    <ListGroupItem key={idx} className="d-flex px-3">
                      <span className="text-semibold text-fiord-blue">{item.title}</span>
                      <span className="ml-auto text-right text-semibold text-reagent-gray">
                        {item.value}
                      </span>
                    </ListGroupItem>
                  ))}
                </ListGroup> */}
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="d-flex px-3">
                    <span className="text-semibold text-fiord-blue">Head</span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex px-3">
                    <span className="text-semibold text-fiord-blue">Topic Category</span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex px-3">
                    <span className="text-semibold text-fiord-blue">Min_Hours</span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex px-3">
                    <span className="text-semibold text-fiord-blue">Percent_level_2</span>
                    <span className="ml-auto text-right text-semibold text-reagent-gray">Percent_level_3</span>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
              <CardFooter className="border-top">
                <Row>
                  <Col>
                    <Button size="sm" theme="white">
                      <i className="fas fa-heart mr-1" /> Add to Favorites
                  </Button>
                  </Col>
                  <Col className="text-right view-report">
                    {/* eslint-disable-next-line */}
                    <a href="/course-posts">View full courses &rarr;</a>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col className="mb-4">
            <div
              className="bg-primary text-white text-center rounded p-3 "
              style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}>
              All Curriculums
        </div>
          </Col>
          <Col className="mb-4">
            <div
              className="bg-secondary text-white text-center rounded p-3"
              style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}>
              My Favorites
      </div>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default BlogPosts;
