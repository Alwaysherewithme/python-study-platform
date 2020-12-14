import React, { Fragment } from "react";
import { Button, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row } from "shards-react";

const Test1 = () => (
    <Fragment>
        <CardHeader className="border-bottom">
            <Row>
                <Col className="text-left">
                    <h6 className="m-0">1.	数字形式转换。（知识点：字符串序列，for循环语句）</h6>
                </Col>
                <Col className="text-right">
                    {/* <a href={`/code-test`}> &larr; 返回列表页</a> */}
                    <Button pill className="text-right" href={`/code-test`}>&larr; 返回列表页</Button>
                </Col>
            </Row>
        </CardHeader>

        <CardBody className="p-0 pb-3">
            <Row>
                <Col lg="12">
                    <ListGroup flush>
                        <ListGroupItem className="px-5">
                            <div>
                                <strong className="text-muted d-block mb-2">
                                    获得用户输入的一个正整数输入，输出该数字对应的中文字符表示。0到9对应的中文字符分别是：零一二三四五六七八九。
                                </strong>
                                <p>示例：</p>
                                <div>输入格式：一个正整数</div>
                                <div>输入示例‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬：123‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬</div>
                                <div>输出格式：一串中文字符‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬</div>
                                <div>输出示例：一二三</div>
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
                                        <td>123</td>
                                        <td>一二三</td>
                                    </tr>
                                    <tr>
                                        <td>9876543210</td>
                                        <td>九八七六五四三二一零</td>
                                    </tr>
                                    <tr>
                                        <td>999</td>
                                        <td>九九九</td>
                                    </tr>
                                    <tr>
                                        <td>4096</td>
                                        <td>四零九六</td>
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

export default Test1;
