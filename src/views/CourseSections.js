import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    Button,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    ListGroup,
    ListGroupItem,
    Container, Row, Col
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

const CourseSections = ({ userDetails, title }) => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
            <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row>
            <Col lg="3">
                <Card small className="mb-4 pt-3">
                    <CardHeader className="border-bottom text-center">
                        <div className="mb-3 mx-auto">
                            <Button theme="white" href="/course-posts">Return to Courses</Button>
                        </div>
                        <h4 className="mb-0">Course_Name</h4>
                        <p>Year</p>
                        <p>Semester</p>
                        <p>Enrollment</p>
                        <p>Comment1</p>
                        <p>Comment2</p>
                    </CardHeader>
                    <ListGroup flush>
                        <ListGroupItem className="px-4">
                            <div className="progress-wrapper">
                                <strong className="text-muted d-block mb-2">
                                    Section 1
                                </strong>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem className="p-4">
                            <strong className="text-muted d-block mb-2">
                                Section 2
                            </strong>
                        </ListGroupItem>
                        <ListGroupItem className="px-4">
                            <div className="progress-wrapper">
                                <strong className="text-muted d-block mb-2">
                                    Section 3
                                </strong>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem className="p-4">
                            <strong className="text-muted d-block mb-2">
                                Section 4
                            </strong>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
            <Col lg="9">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Section 1</h6>
                    </CardHeader>
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Row>
                                <Col>
                                    {/*<Form>
                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feFirstName">Hahaha</label>
                                                <FormInput
                                                    id="feFirstName"
                                                    placeholder="First Name"
                                                    value="Sierra"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feLastName">Last Name</label>
                                                <FormInput
                                                    id="feLastName"
                                                    placeholder="Last Name"
                                                    value="Brooks"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feEmail">Email</label>
                                                <FormInput
                                                    type="email"
                                                    id="feEmail"
                                                    placeholder="Email Address"
                                                    value="sierra@example.com"
                                                    onChange={() => { }}
                                                    autoComplete="email"
                                                />
                                            </Col>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="fePassword">Password</label>
                                                <FormInput
                                                    type="password"
                                                    id="fePassword"
                                                    placeholder="Password"
                                                    value="EX@MPL#P@$$w0RD"
                                                    onChange={() => { }}
                                                    autoComplete="current-password"
                                                />
                                            </Col>
                                        </Row>
                                        <FormGroup>
                                            <label htmlFor="feAddress">Address</label>
                                            <FormInput
                                                id="feAddress"
                                                placeholder="Address"
                                                value="1234 Main St."
                                                onChange={() => { }}
                                            />
                                        </FormGroup>
                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feCity">City</label>
                                                <FormInput
                                                    id="feCity"
                                                    placeholder="City"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            <Col md="4" className="form-group">
                                                <label htmlFor="feInputState">State</label>
                                                <FormSelect id="feInputState">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </FormSelect>
                                            </Col>
                                            <Col md="2" className="form-group">
                                                <label htmlFor="feZipCode">Zip</label>
                                                <FormInput
                                                    id="feZipCode"
                                                    placeholder="Zip"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md="12" className="form-group">
                                                <label htmlFor="feDescription">Description</label>
                                                <FormTextarea id="feDescription" rows="5" />
                                            </Col>
                                        </Row>
                                        <Button theme="accent">Update Account</Button>
                                    </Form>*/}
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </Container>
);

CourseSections.propTypes = {
    /**
     * The user details object.
     */
    userDetails: PropTypes.object,
    title: PropTypes.string
};

CourseSections.defaultProps = {
    userDetails: {
        name: "Sierra Brooks",
        avatar: "",
        jobTitle: "Project Manager",
        performanceReportTitle: "Workload",
        performanceReportValue: 74,
        metaTitle: "Description",
        metaValue:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
    },
    title: "Section Details"
};

export default CourseSections;
