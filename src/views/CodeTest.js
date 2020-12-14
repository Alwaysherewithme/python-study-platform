/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class CodeTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            CodeTestList: [
                {
                    id: 1,
                    title: "综合题 1",
                    body: "1.   数字形式转换。（知识点：字符串序列，for循环语句）"
                },
                {
                    id: 2,
                    title: "综合题 2",
                    body: "2.   货币转换。 （知识点：字符串切片，格式化format，条件语句）"
                },
                {
                    id: 3,
                    title: "综合题 3",
                    body: "3.	天天向上的力量。（知识点：算术运算符，format格式，循环语句，条件分支）"
                },
                {
                    id: 4,
                    title: "综合题 4",
                    body: "4.	恺撒密码。（知识点：字符串函数、算术运算符，条件分支、循环语句）"
                },
                {
                    id: 5,
                    title: "综合题 5",
                    body: "5.	三位水仙花数。（知识点：算术运算符、格式化、循环语句，条件分支）"
                },
                {
                    id: 6,
                    title: "综合题 6",
                    body: "6.	用户登录的三次机会 。（知识点：循环语句，条件分支，break语句）"
                },
                {
                    id: 7,
                    title: "综合题 7",
                    body: "7.	斐波那契数列计算。（知识点：函数调用、递归方法）"
                },
                {
                    id: 8,
                    title: "综合题 8",
                    body: "8.	汉诺塔实践。（知识点：函数调用，递归方法、格式化表示）"
                },
                {
                    id: 9,
                    title: "综合题 9",
                    body: "9.	连续质数计算。（知识点：函数调用、循环语句、条件语句，格式化）"
                }
            ]
        }
    }

    render() {
        const {
            CodeTestList,
        } = this.state;

        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="综合编程" subtitle="实践 /" className="text-sm-left" />
                </Row>

                <Row>
                    {CodeTestList.map((post, idx) => (
                        <Col lg="4" key={idx}>
                            <Card small className="card-post mb-4">
                                <CardBody>
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text text-muted">{post.body}</p>
                                </CardBody>
                                <CardFooter className="border-top d-flex">
                                    <div className="my-auto ml-auto">
                                        <Button size="sm" theme="white" href={`/test-detail?test-id=${post.id}`}>
                                            <i className="far fa-bookmark mr-1" /> 去完成
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default CodeTest;
