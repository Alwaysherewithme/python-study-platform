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
  ListGroup,
  ListGroupItem
} from "shards-react";
import * as auth from "../../services/Session";
import PropTypes from "prop-types";


class Communication extends React.Component {



   

    render() {
        let title = this.props.title;
        return (
            <Card small className="h-100">
                {/* Card Header */}
                <CardHeader className="border-bottom">
                <h6 className="m-0">{title}</h6>
                </CardHeader>

                <CardBody className="d-flex flex-column">
                <Form className="quick-post-form">
                    {/* Title */}
                    <FormGroup>
                    <FormInput placeholder="Brave New World" />
                    </FormGroup>

                    {/* Body */}
                    <FormGroup>
                    <FormTextarea placeholder="Words can be like X-rays if you use them properly..." />
                    </FormGroup>

                    {/* Create Draft */}
                    <FormGroup className="mb-0">
                    <Button theme="accent" type="submit">
                        Create Draft
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
