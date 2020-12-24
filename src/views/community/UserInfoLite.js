import React from "react";
import { Container, Row, Col } from "shards-react";


import PageTitle from "../../components/common/PageTitle";
import UserInfoDetails from "./UserInfoDetail";
import PublicCommunity from "./PublicCommunity";
import Moments from "./Moments";
import Communication from "./Communication";
import * as auth from "../../services/Session";


class UserInfoLite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      user:''
    }

  }


  componentWillUnmount(){
    if(this.state.socket != null) this.state.socket.close();
}


componentWillMount(){
    

    this.state.socket = new WebSocket('ws://localhost:8080/chat');

    this.state.socket.onopen = () => {			console.log('WebSocket打开连接');
    
    

    this.state.socket.send(JSON.stringify({
        type : "ENTER",
        to : '',
        username : auth.getItem("name"),
        msg : 'ENTER'
    }));
    



}

this.state.socket.onmessage = ({data}) => {
        console.log(data);

        console.log('WebSocket收到消息：%c' + data, 'color:green');
  // 获取服务端消息
  var message = JSON.parse(data) || {};
  if (message.type === 'SPEAKTOALL' && message.username != auth.getItem("name")) {
            console.log('speak to all' + data);
            document.getElementById("content").innerHTML += (message.username+":"+ message.msg+'<hr/>');
            var divscll = document.getElementById('content');
            divscll.scrollTop = divscll.scrollHeight;
  }else if(message.type === "SPEAK"){
            console.log('speak to someone' + data);
  }
    }
}

  callback(user,flag) {
    document.getElementById('communicationTab').style.display=(flag == true ? 'inline' : 'none');
  }

  render() {
   return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="交流社区" subtitle="交流 /" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <div id='communicationTab' className='col-lg-4' style={{position:'absolute',left:'35%',top:'55%',zIndex:'1000',display:'none'}}>
          <Communication user={this.state.user} socket={this.state.socket}/>
        </div>
        <Row>
          <Col lg="4">
            <UserInfoDetails />
            <PublicCommunity callback={this.callback} socket={this.state.socket}/>
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
