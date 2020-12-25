import React from "react";
import { Container, Row, Col } from "shards-react";


import PageTitle from "../../components/common/PageTitle";
import UserInfoDetails from "./UserInfoDetail";
import PublicCommunity from "./PublicCommunity";
import Moments from "./Moments";
import Communication from "./Communication";
import * as auth from "../../services/Session";
import { API_HOST_Socket } from "../../api/constants";


class UserInfoLite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      user:''
    }

  }


  componentWillUnmount(){
    if(null !== this.state.socket) this.state.socket.close();
  }


componentDidMount(){
  let socket = this.state.socket;
  
  socket = new WebSocket(`ws://${API_HOST_Socket.split("//")[1]}//chat`);

  socket.onopen = () => {
    console.log('WebSocket打开连接');
    
    socket.send(JSON.stringify({
        type : "ENTER",
        to : '',
        username : auth.getItem("name"),
        msg : 'ENTER'
    }));
  }

  socket.onmessage = ({data}) => {
    console.log(data);
    console.log('WebSocket收到消息：%c' + data, 'color:green');

    // 获取服务端消息
    var message = JSON.parse(data) || {};
    if (message.type === 'SPEAKTOALL' && message.username !== auth.getItem("name")) {
      console.log('speak to all' + data);
      document.getElementById("content").innerHTML += (message.username+":"+ message.msg+'<hr/>');
      var divscll = document.getElementById('content');
      divscll.scrollTop = divscll.scrollHeight;
    }else if(message.type === "SPEAK"){
      console.log('speak to someone' + data);
      if(message.username === document.getElementById("from").innerText){
        document.getElementById("content_2").innerHTML += (message.username+":"+ message.msg+'<hr/>');

      }else{
        document.getElementById("from").innerText = message.username;     
        document.getElementById("content_2").innerHTML = (message.username+":"+ message.msg+'<hr/>');

      }       
      var divscll2 = document.getElementById('content_2');
      divscll2.scrollTop = divscll2.scrollHeight;
      this.callback(message.username, true);
    }
  }

  this.setState({
    socket
  })
}

  callback(user,flag) {
    this.setState({user:user})
    document.getElementById('communicationTab').style.display=(flag === true ? 'inline' : 'none');
  }

  render() {
   return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="交流社区" subtitle="交流 /" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <div id='communicationTab' className='col-lg-4' style={{position:'absolute',left:'35%',top:'55%',zIndex:'1000',display:'none'}}>
          <Communication callback={this.callback.bind(this)} user={this.state.user} socket={this.state.socket}/>
        </div>
        <Row>
          <Col lg="4">
            <UserInfoDetails />
            <PublicCommunity callback={this.callback.bind(this)} socket={this.state.socket}/>
          </Col>
          <Col lg="8">
            <Moments />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserInfoLite;
