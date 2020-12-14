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
import { connect } from "react-redux";

const contentManagement = require("../images/content-management/1.jpeg");


class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curriculums: [],
      whose: 'all'
    };
  }

  // https://www.cnblogs.com/gerry2019/p/12432850.html
  async componentDidMount() {
    let data = await fetch('http://localhost:5000/api/getAllCurriculums')
      .then(function (response) {
        return response.json();
      });
    // .then(function (data) {
    //   this.setState({ PostsList: data.courses })
    // });
    this.setState({
      curriculums: data.allCurriculums
    });
    console.log("--- Blog Post Store Props: ", this.props)
  }

  async getCurriculums(whose) {
    console.log("--- Store --- ", this.props);
    if ("my" === whose) {
      let data = await fetch(`http://localhost:5000/api/getMyCurriculums/${this.props.signinUser.ID}`)
        .then(function (response) {
          return response.json();
        });
      this.setState({
        curriculums: data.myCurriculums,
        whose: "my"
      })
    } else if ("all" === whose) {
      let data = await fetch('http://localhost:5000/api/getAllCurriculums')
        .then(function (response) {
          return response.json();
        });
      this.setState({
        curriculums: data.allCurriculums,
        whose: "all"
      })
    }
  }

  async addToFavorites(currId) {
    let data = {
      // Person_id: 1,
      Associated_Curriculum_id: currId
    }
    fetch('http://localhost:5000/api/postMyCurriculums', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
      // body: courseData
    })
      .then(response => response.json())
      .then(data => {
        if (data.myCurriculums) {
          alert('Curriculum has been added!', data.myCurriculums)
        } else {
          alert('Error occured...')
        }
      });
  }

  render() {
    const {
      curriculums, whose
    } = this.state;
    console.log("Blog Post... signinUser: ", this.props)
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Curriculums" subtitle="Curriculums" className="text-sm-left" />
        </Row>

        <Row>
          {curriculums.map((curr, idx) => (
            <Col lg="4" sm="12" className="mb-4" key={idx}>
              <Card small className="h-100">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">{curr.Cur_name}</h6>
                </CardHeader>
                <CardBody className="d-flex py-0">
                  {/* <ListGroup small flush className="list-group-small">*/}
                  <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex px-3">
                      <span className="text-semibold text-fiord-blue">{curr.Min_Hours}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex px-3">
                      <span className="text-semibold text-fiord-blue">{curr.Percent_Level_2}</span>
                      <span className="ml-auto text-right text-semibold text-reagent-gray">{curr.Percent_Level_3}</span>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
                <CardFooter className="border-top">
                  <Row>
                    <Col>{
                      "my" === whose ? <Button size="sm" theme="white" onClick={(e) => { alert("To be removed") }} disabled>
                        <i className="fas fa-heart mr-1" /> Remove from Favorites
                  </Button> : <Button size="sm" theme="white" onClick={(e) => { this.addToFavorites(curr.id) }}>
                          <i className="fas fa-heart mr-1" /> Add to Favorites
                    </Button>
                    }
                    </Col>
                    <Col className="text-right view-report">
                      <a href={`/course-posts?curriculum-id=${curr.id}`}>View full courses &rarr;</a>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          ))
          }
        </Row>

        <Row className="mb-1">
          <Col className="mb-4">
            {/* <Button theme="primary" className="bg-primary text-white text-center rounded p-3">
              All Curriculums
      </Button> */}
            <div
              className="bg-primary text-white text-center rounded p-3 "
              style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}>
              <Button theme="primary" onClick={(e) => this.getCurriculums("all")}>
                All Curriculums
                </Button>
            </div>
          </Col>
          <Col className="mb-4">
            <div
              className="bg-secondary text-white text-center rounded p-3"
              style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}>
              <Button theme="secondary" onClick={(e) => this.getCurriculums("my")}>My Favorites</Button>
            </div>
            {/* <Button theme="secondary" className="bg-secondary text-white text-center rounded p-3">
              My Favorites
      </Button> */}
          </Col>
        </Row>

      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return (
    {
      signinUser: state.signinUser
    }
  )
}

export default connect(mapStateToProps, null)(BlogPosts);
