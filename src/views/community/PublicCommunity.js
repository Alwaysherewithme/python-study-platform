import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  FormInput,
  Button,
  ListGroup,
  ListGroupItem
} from "shards-react";
import * as auth from "../../services/Session";



class PublicCommunity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loginName: '',
          tabActiveIndex:0,
          userlist: []
        }
    
      }


      componentDidMount(){
    
        setInterval(function(){ fetch(`http://localhost:8080/user/onlineUsers`, {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            })
            .then(response => response.json())
            .then(data => {
                this.setState({userlist:data})
            }); }.bind(this), 3000);
        }


    handleTabClick(tabActiveIndex) {
		this.setState({
			tabActiveIndex
		})
    }
    
    send(){
        let socket = this.props.socket;
        if (socket != null){
            socket.send(JSON.stringify({
				type : "SPEAKTOALL",
				username : auth.getItem('name'),
				msg : document.getElementById("message").value
            }));
            document.getElementById("content").innerHTML += (auth.getItem('name')+":"+ document.getElementById("message").value+'<hr>');
            var divscll = document.getElementById('content');
            divscll.scrollTop = divscll.scrollHeight;
			document.getElementById("message").value=""
        }
    }


    changeItem(item){
        this.props.callback(item,true);
    }


    render() {
        let tabActiveIndex = this.state.tabActiveIndex;
        console.log(this.state)
       return (
        <Card small className="mb-4 pt-3">
            {/* Card Header */}
            <CardHeader>
                <Nav tabs>
                    <NavItem key='1'><NavLink activeclassname="nav-active" onClick={this.handleTabClick.bind(this, 0)}>公屏</NavLink></NavItem>
                    <NavItem key='2'><NavLink activeclassname="nav-active" onClick={this.handleTabClick.bind(this, 1)}>好友</NavLink></NavItem>
                </Nav>
            </CardHeader>
            <div className={"tab-pane fade"+ (tabActiveIndex === 0 ? '"show active"': '')} style={{display:(tabActiveIndex === 0 ? 'inline': 'none')}}>
                <CardBody className="d-flex flex-column">
                    <Form id='myForm' className="quick-post-form">
                        {/* Body */}
                        <FormGroup>
                        <p style={{height:"70px",overflow:"auto"}} className='card-text' disabled id="content" ></p>
                        </FormGroup>
                        {/* Title */}
                        <FormGroup>
                        <FormInput id="message" placeholder="说点什么吧" />
                        </FormGroup>
                        {/* Create Draft */}
                        <FormGroup className="mb-0 text-right">
                        <Button theme="accent" onClick={this.send.bind(this)}>
                            发送
                        </Button>
                        </FormGroup>
                    </Form>
                    </CardBody>
            </div>
            <div className = {"tab-pane fade"+ (tabActiveIndex === 1 ? '"show active"': '')} style={{display:(tabActiveIndex === 1 ? 'inline': 'none')}}>
                <CardBody className="d-flex flex-column">
                <Form id='myForm' className="quick-post-form">
                    <FormGroup className="mb-0">
                        <ListGroup>{
                            this.state.userlist.map((item, idx) => <ListGroupItem key={idx} onClick={this.changeItem.bind(this,item)}>{item}</ListGroupItem>)
                        }
                        </ListGroup>
                        </FormGroup>
                    </Form>
                </CardBody>
            </div>
        </Card>
            
        );
    }
}

export default PublicCommunity;
