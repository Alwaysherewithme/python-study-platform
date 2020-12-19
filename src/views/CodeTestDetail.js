import React from "react";
import { Card, Container, Row, Col, CardFooter } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import TestPage from "./test-page";

const CodeTestDetail = (props) => {
    // console.log("CodeTestDetail----- ", props)
    return (
        <Container fluid className="main-content-container px-4 pb-4">
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="编程详情" subtitle="实践 / 综合编程 /" className="text-sm-left" />
            </Row>
            <Row noGutters className="page-header py-4">
                <Col>
                    <Card small className="mb-4">
                        {renderCurrentTestPage(props)()}
                        <CardFooter>
                            <Row>
                                <Col>
                                    <iframe title="trinket.io" src="https://trinket.io/embed/python/af0932fbad" width="100%" height="356" frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

let renderCurrentTestPage = (props) => {
    // return TestPage.testContent[window.location.search.split('=')[1]]
    return TestPage.testContent[props.location.search.split('=')[1]]
}

export default CodeTestDetail;
