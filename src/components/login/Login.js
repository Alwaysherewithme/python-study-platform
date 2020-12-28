import React from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button,
  Container
} from "shards-react";

import { connect } from 'react-redux';

import * as auth from "../../services/Session";
import { API_HOST } from "../../api/constants";
import { SIGNIN_ACTION } from "../../store/ActionTypes";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginName: ''
    }

  }

  userSignin = async () => {
    if (this.state.loginName) {
      let data = {
        name: this.state.loginName
      }
      fetch(`${API_HOST}/api/sign-in`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          if (data.signinUser.length > 0) {
            console.log('... Signin : ', data.signinUser)
            console.log("Login Signin ... ", this.props)
            auth.setItem("uuid", data.signinUser[0].ID);
            auth.setItem("name", data.signinUser[0].Name);
            auth.setItem("token", `${data.signinUser[0].ID}_${data.signinUser[0].Name}`)
            this.props.history.push('/curriculum-posts');
          } else {
            alert("此用户不存在")
          }
        });
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value.trim()
    });
  }

  render() {
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
                  <Form>
                    <Row form>
                      <Col md="12" className="form-group">
                        <label htmlFor="feEmail">用户名</label>
                        <FormInput
                          id="feEmail"
                          name="loginName"
                          placeholder="用户名"
                          onChange={(e) => { this.setState({ loginName: e.target.value }) }}
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
                          autoComplete="current-password"
                          disabled
                        />
                      </Col>
                    </Row>
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
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (signinUser) => {
      dispatch({
        type: SIGNIN_ACTION,
        payload: signinUser
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
