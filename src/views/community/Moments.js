import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Row,
    Col,
    ButtonGroup,
    CardFooter,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    FormTextarea
  } from "shards-react";
  import * as auth from "../../services/Session";
  import PropTypes from 'prop-types';

class Moments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Discussions",
            discussions:[],
            open : false,
            page : 1,
            maxPage: 1
        }
    
      }
      toggle(){
        this.setState({open:!this.state.open});
      }


      componentWillMount(){
        this.getMoments(1);
        this.getMaxPage();
      }


      getMaxPage(){
        fetch(`http://localhost:8080/user/maxPage`, {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        
      }).then(response => response.json()).then( (data) => {
              this.setState({maxPage:data})
            });
      }

      getMoments(pageSize){
        fetch(`http://localhost:8080/user/moment?pageSize=`+pageSize, {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        
      }).then(response => response.json()).then( (data) => {
              this.setState({discussions:data})
            });
      }

      postMoment(){
        fetch(`http://localhost:8080/user/moment`, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
              username : auth.getItem("name"),
              content : document.getElementById("momentContent").value
            })
            }).then( () => {
              document.getElementById("momentContent").value=""
              this.setState({open:!this.state.open})
              this.getMoments(1)
              this.getMaxPage();
            });
      }


      nextPage(){
        let currentPage = this.state.page+1;
        this.setState({page:currentPage});
        this.getMoments(currentPage)
      }


      lastPage(){
        let currentPage = this.state.page-1;
        this.setState({page:currentPage});
        this.getMoments(currentPage)
      }

      render() {
       let discussions = this.state.discussions;
       let open = this.state.open;
       return(<Card small className="blog-comments">
        <CardHeader className="border-bottom">
            <div className="row">
                <h6 className="m-0">&nbsp;动态</h6>
                <ButtonGroup size="sm" className='offset-10'>
                    <Button theme="white" onClick={this.toggle.bind(this)}> 
                        发表
                    </Button>
                </ButtonGroup>
            </div>
        </CardHeader>
    
        <CardBody className="p-0" style={{height:333 +"px"}}>
          <input type='hidden' value={this.state.page} />
          {discussions.map((discussion, idx) => (
            <div key={idx} className="blog-comments__item d-flex p-3">
              {/* Content */}
              <div className="blog-comments__content">
                {/* Content :: Title */}
                <div className="blog-comments__meta text-mutes">
                  <a className="text-secondary" >
                    {discussion.username}
                  </a>
                  <span className="text-mutes"> - {discussion.time}</span>
                </div>
    
                {/* Content :: Body */}
                <p className="m-0 my-1 mb-2 text-muted">{discussion.content}</p>
    
                {/* Content :: Actions */}
                <div className="blog-comments__actions">
                  <ButtonGroup size="sm">
                    <Button theme="white">
                      <span className="thumb_up">
                        <i className="material-icons">check</i>
                      </span>{" "}
                      赞
                    </Button>
                    <Button theme="white">
                      <span className="thumb_down">
                        <i className="material-icons">clear</i>
                      </span>{" "}
                      踩
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          ))}
        </CardBody>
        <CardFooter className="border-top">
          <Row>
            <Col className="text-center view-report">
              <Button theme="white" type="submit" disabled={this.state.page == 1} onClick={this.lastPage.bind(this)}>
                上一页
              </Button>
              <Button theme="white" type="submit" disabled={this.state.maxPage == this.state.page} onClick={this.nextPage.bind(this)}>
                下一页
              </Button>
            </Col>
          </Row>
        </CardFooter>

        <Modal open={open} toggle={this.toggle.bind(this)} id="momentModal">
            <ModalHeader>发表动态</ModalHeader>
            <ModalBody>
            <Form id='momemtForm' className="quick-post-form">
              <FormGroup>
                <FormTextarea id="momentContent"/>
                
              </FormGroup>
              <FormGroup>
                <ButtonGroup className='offset-10'>
                    <Button theme="accent" onClick={this.postMoment.bind(this)}>提交</Button>
                  </ButtonGroup>
              </FormGroup>
              </Form>
            </ModalBody>
        </Modal>

      </Card>
      );
    } 
}

Moments.propTypes = {
    /**
     * The component's title.
     */
    title: PropTypes.string,
    /**
     * The discussions dataset.
     */
    discussions: PropTypes.array
  };

Moments.defaultProps = {
title: "Discussions",
discussions: [
    {
    id: 1,
    date: "3 days ago",
    author: {
        image: require("../../images/avatars/1.jpg"),
        name: "John Doe",
        url: "#"
    },
    post: {
        title: "Hello World!",
        url: "#"
    },
    body: "Well, the way they make shows is, they make one show ..."
    },
    {
    id: 2,
    date: "4 days ago",
    author: {
        image: require("../../images/avatars/2.jpg"),
        name: "John Doe",
        url: "#"
    },
    post: {
        title: "Hello World!",
        url: "#"
    },
    body: "After the avalanche, it took us a week to climb out. Now..."
    },
    {
    id: 3,
    date: "5 days ago",
    author: {
        image: require("../../images/avatars/3.jpg"),
        name: "John Doe",
        url: "#"
    },
    post: {
        title: "Hello World!",
        url: "#"
    },
    body: "My money's in that office, right? If she start giving me..."
    }
]
};



export default Moments;
