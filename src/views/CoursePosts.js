/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { API_HOST } from "../api/constants";
import * as auth from "../services/Session";
import Errors from "./Errors";

class CoursePosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coursePosts: [],
      myCurriculums: null
    };
  }

  async componentDidMount() {
    let coursesData = await fetch(`${API_HOST}/api/getAllCurriculumCourses/${window.location.search.split("=")[1]}`)
      .then(function (response) {
        return response.json();
      }).catch(error => {
        console.log(error);
    });
    let curriculumData = await fetch(`${API_HOST}/api/getMyCurriculums/${auth.getItem('uuid')}`)
      .then(function (response) {
        return response.json();
      }).catch(error => {
        console.log(error);
    });
    this.setState({
      coursePosts: coursesData.allCurriculumCourses,
      myCurriculums: curriculumData.myCurriculums
    });
  }

  render() {
    const {
      coursePosts, myCurriculums
    } = this.state;

    let isMyCurriculum = false;
    
    if(null !== myCurriculums) {
      for(let i=0; i<myCurriculums.length; i++) {
        if(Number(window.location.search.split("=")[1]) === myCurriculums[i].id){
          isMyCurriculum = true;
          break;
        }
      }
    }

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="课程列表" subtitle="理论 / 课程大纲 /" className="text-sm-left" />
        </Row>

        <Row>
          {null !== coursePosts ? coursePosts.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{post.Course_Number} - {post.Course_Name}</h5>
                  <p className="card-text text-muted">科目代码：{post.Subject_Code}</p>
                  <p className="card-text text-muted">课时：{post.Credit_Hours}</p>
                  <p className="card-text text-muted">课程介绍：{post.Description}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    
                  </div>
                  <div className="my-auto ml-auto">
                    {
                      isMyCurriculum ?
                        <a
                           href={`/course-sections?coid=${post.id}`}
                           className="text-right view-report"
                        >
                          我要学习 &rarr;
                        </a>
                        :
                        <span className="text-right view-report">暂未加入</span>
                    }
                  </div>
                </CardFooter>
              </Card>
            </Col>
          )) : <Errors />}
        </Row>
      </Container>
    );
  }
}

export default CoursePosts;
