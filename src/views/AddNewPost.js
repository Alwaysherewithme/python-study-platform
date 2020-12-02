import React from "react";
import { Button, Container, FormGroup, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";


class AddNewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      summary: '',
      content: ''
      // title: 'title',
      // summary: 'summary',
      // content: 'hello',
    };
  }

  receiveData = (data) => {
    // console.log('receiveData', data)
    this.setState({
      ...data
    });
  }

  clearOut = () => {
    console.log('clear......');
    this.setState({
      title: "wmz",
      summary: null,
      content: null
    }, console.log('out...', this.state));
  }

  handleSave = () => {
    console.log('handleSave...', this.state);

    let { title, summary, content } = this.state;

    if (!title || !summary || !content) return false;

    let courseData = {
      title: this.state.title,
      summary: this.state.summary,
      content: this.state.content
    };

    fetch('http://localhost:5000/api/post-course', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(courseData)
      // body: courseData
    })
      .then(response => response.json())
      .then(data => {
        if (data.course) {
          alert('Course has been added!')
        } else {
          alert('Error occured...')
        }
      });
  }

  render() {
    return (<Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Add New Course" subtitle="Course Posts" className="text-sm-left" />
      </Row>

      <Row>
        {/* Editor */}
        <Col lg="12" md="12">
          <Editor receiveData={this.receiveData} />
        </Col>
      </Row>

      <Row>
        <FormGroup className="text-center view-report col">
          <Button theme="accent" size="sm" className="ml-auto" onClick={this.handleSave}>
            <i className="material-icons">save</i> Publish
          </Button>
        </FormGroup>
      </Row>
    </Container>)
  }
}

export default AddNewPost;
