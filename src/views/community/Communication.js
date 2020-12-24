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
  FormTextarea,
  FormInput,
  Button,
  ButtonGroup
} from "shards-react";
import * as auth from "../../services/Session";
import PropTypes from "prop-types";


class Communication extends React.Component {



    send(){
        let socket = this.props.socket;
        if (socket != null){
            socket.send(JSON.stringify({
                type : "SPEAK",
                to : this.props.user,
				username : auth.getItem("name"),
				msg : document.getElementById("message_2").value
            }));
            document.getElementById("content_2").innerHTML += (auth.getItem('name')+":"+ document.getElementById("message_2").value+'<hr>');
            var divscll = document.getElementById('content_2');
            divscll.scrollTop = divscll.scrollHeight;
			document.getElementById("message_2").value=""
        }
    }

    close(){
        this.props.callback(null,false);
    }

    render() {
        let title = this.props.title;
        return (
            <Card small className="h-50">
            {/* Card Header */}
            <CardHeader className="border-bottom">
              <span id='from'>{this.props.user}</span>
              <ButtonGroup className='offset-9'>
                <Button theme="white">
                      <span className="thumb_down">
                        <i className="material-icons" onClick={this.close.bind(this)}>clear</i>
                      </span>
                    </Button>
                  </ButtonGroup>
            </CardHeader>
                <CardBody className="d-flex flex-column">
                    <Form id='myForm' className="quick-post-form">
                        {/* Body */}
                        <FormGroup>
                        <p style={{height:"70px",overflow:"auto"}} className='card-text' disabled id="content_2" ></p>
                        </FormGroup>
                        {/* Title */}
                        <FormGroup>
                        <FormInput id="message_2"/>
                        </FormGroup>
                        {/* Create Draft */}
                        <FormGroup className="mb-0">
                        <Button theme="accent" onClick={this.send.bind(this)} className="offset-9">
                            发送
                        </Button>
                        </FormGroup>
                    </Form>
                    </CardBody>
            </Card>
        );
    }
}

Communication.propTypes = {
    /**
     * The component's title.
     */
    title: PropTypes.string
  };
  
  Communication.defaultProps = {
    title: "New Draft"
  };
export default Communication;
