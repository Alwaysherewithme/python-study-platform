import React, { Fragment } from "react";
import { CardBody, CardHeader, ListGroup, ListGroupItem, Row, Col } from "shards-react";

const Test6 = () => (
    <Fragment>
        <CardHeader className="border-bottom">
            <Col className="text-left">
                <h6 className="m-0">6.	用户登录的三次机会。（知识点：循环语句，条件分支，break语句）</h6>
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
                                <strong className="text-muted d-block mb-2">‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬
                                给用户三次输入用户名和密码的机会，要求如下：
                                </strong>
                                <ul>
                                    <li>1）如输入第一行输入用户名为‘Kate’,第二行输入密码为‘666666’，输出‘登录成功！’，退出程序;</li>
                                    <li>2）当一共有3次输入用户名或密码不正确输出“3次用户名或者密码均有误！退出程序。”。</li>
                                </ul>
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
                                        <td>Kate</td>
                                        <td rowSpan="2">登录成功！</td>
                                    </tr>
                                    <tr>
                                        <td>666666</td>
                                    </tr>
                                    <tr>
                                        <td>kate</td>
                                        <td rowSpan="6">3次用户名或者密码均有误！退出程序。</td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                    </tr>
                                    <tr>
                                        <td>alice</td>
                                    </tr>
                                    <tr>
                                        <td>456</td>
                                    </tr>
                                    <tr>
                                        <td>john</td>
                                    </tr>
                                    <tr>
                                        <td>111111</td>
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

export default Test6;
