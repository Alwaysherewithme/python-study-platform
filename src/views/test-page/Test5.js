import React, { Fragment } from "react";
import { CardBody, CardHeader, ListGroup, ListGroupItem, Row, Col } from "shards-react";

const Test5 = () => (
    <Fragment>
        <CardHeader className="border-bottom">
            <Col className="text-left">
                <h6 className="m-0">5.	三位水仙花数。（知识点：算术运算符、格式化、循环语句，条件分支）</h6>
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
                                “水仙花数”是指一个三位整数，其各位数字的三次方之和等于该数本身。<br />
                                例如：ABC是一个"3位水仙花数"，则：A的3次方＋B的3次方＋C的3次方 = ABC。<br />
                                请按照从小到大的顺序输出所有的3位水仙花数，请用"逗号"分隔输出结果。‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬
                                </strong>
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
                                        <td>无输入</td>
                                        <td>153,370,371,407</td>
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

export default Test5;
