/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
const returnArrow = require("../images/avatars/return_arrow.png");

class PostDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CourseDetail: []
    };
  }

  async componentDidMount() {
    console.log(this.props.location.query)
    let data = await fetch('http://localhost:5000/api/courses/' + window.location.search.split("=")[1])
      .then(function (response) {
        return response.json();
      });
    this.setState({
      CourseDetail: data.course[0]
    });
  }

  render() {
    const {
      CourseDetail
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Post Details" subtitle="Components" className="text-sm-left" />
        </Row>

        <Row>
          {(
            <Col lg="12" key={CourseDetail.id && CourseDetail.id}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{CourseDetail.title && CourseDetail.title}</h5>
                  <div className="card-text" dangerouslySetInnerHTML={{ __html: CourseDetail.content && CourseDetail.content }}></div>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="/blog-posts"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url(${returnArrow})` }}
                    >
                      Return
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {CourseDetail.author}
                      </span>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" /> Bookmark
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default PostDetails;
