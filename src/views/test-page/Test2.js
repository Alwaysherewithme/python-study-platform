import React, { Fragment } from "react";
import { CardBody, CardHeader, ListGroup, ListGroupItem, Row, Col } from "shards-react";

const Test2 = () => (
    <Fragment>
        <CardHeader className="border-bottom">
            <Col className="text-left">
                <h6 className="m-0">2.	货币转换。 （知识点：字符串切片，格式化format，条件语句）</h6>
            </Col>
            <Col className="text-right">
                <a href={`/code-test`}> &larr; 返回列表页</a>
            </Col>
        </CardHeader>

        <CardBody className="p-0 pb-3">
            <Row>
                <Col lg="12">
                    <ListGroup flush>
                        <ListGroupItem className="px-5">
                            <div>
                                <strong className="text-muted d-block mb-2">
                                    人民币和美元是世界上通用的两种货币之一，写一个程序进行货币间币值转换。<br />
                                其中：人民币和美元间汇率固定为：1美元 = 6.78人民币。‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬程序可以接受人民币或美元输入，转换为美元或人民币输出。人民币采用RMB表示，美元USD表示，符号和数值之间没有空格。不提示输出格式错误，结果小数点后保留两位。‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬
                                </strong>
                                <p>示例：</p>
                                <div>输入示例‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬：RMB123‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬</div>
                                <div>输出示例：USD18.14</div>
                            </div>
                            <p></p>
                            <table className="table mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        <th scope="col" className="border-0">
                                            测试用例--输入
                        </th>
                                        <th scope="col" className="border-0">
                                            输出
                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>RMB123</td>
                                        <td>USD18.14</td>
                                    </tr>
                                    <tr>
                                        <td>USD20</td>
                                        <td>RMB135.60</td>
                                    </tr>
                                    <tr>
                                        <td>RMB1234.567</td>
                                        <td>USD182.09</td>
                                    </tr>
                                    <tr>
                                        <td>USD1234.567</td>
                                        <td>RMB8370.36</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p></p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </CardBody>
    </Fragment>
)

export default Test2;
