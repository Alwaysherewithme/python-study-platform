/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button,
  Modal
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { API_HOST } from "../api/constants";
import * as auth from "../services/Session";

class CurriculumPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curriculumPosts: [],
      myCurriculums: [],
      displayedCurriculums: null,
      message: null
    };
  }

  async componentDidMount() {
    let data = await fetch(`${API_HOST}/api/getAllCurriculums`)
      .then(function (response) {
        return response.json();
      }).catch(error => {
        console.log(error);
    });
    // let data2 = await fetch(`${API_HOST}/api/getMyCurriculums/${auth.getItem('uuid')}`)
    // .then(function (response) {
    //   return response.json();
    // }).catch(error => {
    //   console.log(error);
    // });
    this.setState({
      curriculumPosts: data.allCurriculums,
      // myCurriculums: data2.myCurriculums,
      displayedCurriculums: data.allCurriculums
    });
  }

  pickUpCurriculums = async (e, whose) => {
    e.preventDefault()
    if("mine" === whose) {
      let data = await fetch(`${API_HOST}/api/getMyCurriculums/${auth.getItem('uuid')}`)
      .then(function (response) {
        return response.json();
      }).catch(error => {
        console.log(error);
      });
      this.setState({
        displayedCurriculums: data.myCurriculums
      })
    } else {
      this.setState({
        displayedCurriculums: this.state.curriculumPosts
      })
    }
  }

  postMyCurriculum = async (e, curriculumId) => {
    e.preventDefault()
    let data = {
      Person_id: Number(auth.getItem("uuid")),
      Associated_Curriculum_id: curriculumId
    }
    fetch(`${API_HOST}/api/postMyCurriculum`, {
      method: 'post',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.myCurriculum) {
        alert("已加入")
        // this.setState({
        //   message: "已加入"
        // })
      } else if(data.msg) {
        alert(data.msg)
        // this.setState({
        //   message: data.msg
        // })
      } else {
        alert("请刷新页面试试")
        // this.setState({
        //   message: "请刷新页面试试"
        // })
      }
    });
  }

  render() {
    const {
      displayedCurriculums, message
    } = this.state;

    return(
      // {
      //   return null !== message ? (
      //     <Modal open={open} toggle={this.toggle}>
      //     <ModalHeader>系统提示：</ModalHeader>
      //     <ModalBody>{message}</ModalBody>
      //   </Modal>
      //   ) :
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="课程大纲" subtitle="理论 /" className="text-sm-left" />
        </Row>

        <Row>
          <Col className="mb-4 text-center">
            <Button className="" theme="white" onClick={e => this.pickUpCurriculums(e, 'all')}>
              <i className="far fa-bookmark mr-1" /> 全部大纲
            </Button>
          </Col>
          <Col className="mb-4 text-center">
            <Button className="" theme="white" onClick={e => this.pickUpCurriculums(e, 'mine')}>
              <i className="far fa-bookmark mr-1" /> 我加入的
            </Button>
          </Col>
        </Row>

        <Row>
          {displayedCurriculums && displayedCurriculums.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{post.Cur_name}</h5>
                  <p className="card-text text-muted">最小完成时：{post.Min_Hours}（小时）</p>
                  <p className="card-text text-muted">百分点2：{post.Percent_Level_2}</p>
                  <p className="card-text text-muted">百分点3：{post.Percent_Level_3}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <Button size="sm" theme="white" onClick={e => this.postMyCurriculum(e, post.id)}>
                      <i className="far fa-bookmark mr-1" /> 加入学习
                    </Button>
                  </div>
                  <div className="my-auto ml-auto">
                    <a
                       href={`/course-posts?cuid=${post.id}`}
                       className="text-right view-report"
                    >
                      查看课程 &rarr;
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default CurriculumPosts;
