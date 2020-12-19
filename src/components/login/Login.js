import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
  Container
} from "shards-react";

// import { Store } from "../../flux";
// import Dispatcher from "../../flux/dispatcher";
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { getUserData, getPathname } from "../../store/Action";

import * as auth from "../../services/Session";
import { API_HOST } from "../../api/constants";

let userSignin2 = (loginName) => {
  alert("signin ...", loginName)
  // fetch
};


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginName: ''
    }

  }

  userSignin = async () => {
    // alert(loginName.value)

    if (this.state.loginName) {
      let data = {
        name: this.state.loginName
      }
      fetch(`${API_HOST}/api/sign-in`, {
        // fetch(`${window.location.href}:5000/api/sign-in`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
        // body: courseData
      })
        .then(response => response.json())
        .then(data => {
          if (data.signinUser.length > 0) {
            console.log('... Signin : ', data.signinUser)
            // Store.registerToActions({
            //   actionType: "SIGNINUSER",
            //   payload: data.signinUser[0].ID
            // })
            // Dispatcher.dispatch({
            //   // actionType: "SIGNINUSER",
            //   actionType: "TOGGLE_SIDEBAR",
            //   payload: data.signinUser[0].ID
            // })
            // Store.addChangeListener(this.onChange);
            // this.props.signin(data.signinUser[0])
            // document.cookie = `signinUserId=${data.signinUser[0].ID}`
            // document.cookie = `signinUserName=${data.signinUser[0].Name}`
            console.log("Login Signin ... ", this.props)
            auth.setItem("uuid", data.signinUser[0].ID);
            auth.setItem("name", data.signinUser[0].Name);
            auth.setItem("token", `${data.signinUser[0].ID}_${data.signinUser[0].Name}`)
            // window.location.href = "/blog-posts"
            this.props.history.push('/course-sections');
            // this.props.redirect("/blog-posts");
          } else {
            alert('Error occured...')
          }
        });
    }
  }

  userRegister = async () => {
    // alert(loginName.value)

    if (this.state.loginName) {
      let data = {
        name: this.state.loginName
      }
      fetch(`${API_HOST}/api/sign-in`, {
        // fetch(`${window.location.href}:5000/api/sign-in`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
        // body: courseData
      })
        .then(response => response.json())
        .then(data => {
          if (data.signinUser.length > 0) {
            console.log('... Signin : ', data.signinUser)

            console.log("Login Signin ... ", this.props)
            auth.setItem("uuid", data.signinUser[0].ID);
            auth.setItem("name", data.signinUser[0].Name);
            auth.setItem("token", `${data.signinUser[0].ID}_${data.signinUser[0].Name}`)
            // window.location.href = "/blog-posts"
            this.props.history.push('/course-sections');
            // this.props.redirect("/blog-posts");
          } else {
            alert('Error occured...')
          }
        });
    }
  }

  /*
  componentWillReceiveProps(nextProps) {
    if (nextProps.status === "200") {
      const { uuid, name, id } = nextProps.userData.user;
      // const { uuid, name, email, about, img } = nextProps.userData.user;
      auth.setItem("uuid", uuid);
      auth.setItem("name", name);
      // auth.setItem("email", email);
      // auth.setItem("about", about ? about : "");
      // auth.setItem("img", img);
      auth.setItem("token", nextProps.userData.token);
      // this.formRef.reset();
      // this.validator.hideMessages();
      this.props.history.push("/blog-posts");
    } else if (
      nextProps.status === "404" ||
      nextProps.status === "403" ||
      nextProps.status === "500"
    ) {
      // addNotification(
      //   this.notificationRef,
      //   "Error",
      //   "danger",
      //   nextProps.message
      // );
    }
  }
  */

  submitForm = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    const data = {
      email
      // password
    };
    this.props.getData(data);
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value.trim()
    });
  }

  render() {
    console.log("Login : ", this.props)
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h3 className="m-0 text-center">欢迎！</h3>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <Row>
                <Col>
                  {/* <Form onSubmit={userSignin} type="post"> */}
                  <Form>
                    {/* <Form onSubmit={this.submitForm}> */}
                    {/*<Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feFirstName">First Name</label>
                      <FormInput
                        id="feFirstName"
                        placeholder="First Name"
                        value="Sierra"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feLastName">Last Name</label>
                      <FormInput
                        id="feLastName"
                        placeholder="Last Name"
                        value="Brooks"
                        onChange={() => {}}
                      />
                    </Col>
                  </Row>*/}
                    <Row form>
                      <Col md="12" className="form-group">
                        <label htmlFor="feEmail">用户名</label>
                        <FormInput
                          // type="email"
                          id="feEmail"
                          name="loginName"
                          placeholder="用户名"
                          // value
                          // value="sierra@example.com"
                          onChange={(e) => { this.setState({ loginName: e.target.value }) }}
                          // onChange={this.handleUserInput}
                          // onChange={(e) => { console.log('------', e.target.value) }}
                          autoComplete="email"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" className="form-group">
                        <label htmlFor="fePassword">密码</label>
                        <FormInput
                          type="password"
                          id="fePassword"
                          placeholder="Password"
                          value="EX@MPL#P@$$w0RD"
                          onChange={() => { }}
                          // onChange={this.handleUserInput}
                          autoComplete="current-password"
                          disabled
                        />
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col md="12" className="form-group">
                        <label htmlFor="fePassword">chongfu密码</label>
                        <FormInput
                          type="password"
                          id="fePassword"
                          placeholder="Password"
                          value="EX@MPL#P@$$w0RD"
                          onChange={() => { }}
                          // onChange={this.handleUserInput}
                          autoComplete="current-password"
                          disabled
                        />
                      </Col>
                    </Row> */}
                    <Row>
                      <Col md="12" className="form-group text-center">
                        <Button theme="accent" onClick={this.userSignin}>登录</Button>
                        {/* <Button theme="accent" className="btn-lg" type="submit">登录</Button> */}
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </ListGroupItem>
            {/* <ListGroupItem className="p-3">
              <Row>
                <Col><Button onClick={ this.userRegister }>zhuce</Button></Col>
              </Row>
            </ListGroupItem> */}
          </ListGroup>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return (
    {
      signinUser: state.signinUser
      // userData: state.userData.user,
      // status: state.userData.status,
      // message: state.userData.message,
      // pathname: state.getDashboardData.pathname
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (signinUser) => {
      dispatch({
        type: 'SIGNIN_ACTION',
        payload: signinUser
      })
    }
    // getData: data => {
    //   dispatch(getUserData(data));
    // },
    // setPathname: path => {
    //   dispatch(getPathname(path));
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
