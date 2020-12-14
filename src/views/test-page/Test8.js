import React, { Fragment } from "react";
import { CardBody, CardHeader, ListGroup, ListGroupItem, Row, Col } from "shards-react";

const Test8 = () => (
    <Fragment>
        <CardHeader className="border-bottom">
            <Col className="text-left">
                <h6 className="m-0">8.	汉诺塔实践。（知识点：函数调用，递归方法、格式化表示）</h6>
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
                                汉诺塔问题大家都清楚，这里不再赘述。‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬请完成如下功能：‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬<br />
                                有三个圆柱A、B、C，初始时A上有N个圆盘，N由用户输入给出，最终移动到圆柱C上。‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬每次移动步骤的表达方式示例如下：[STEP 10] A-&gt;C。其中，STEP是步骤序号，宽度为4个字符，右对齐。‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬<br />
                                请编写代码，获得输入N后，输出汉诺塔移动的步骤。
                                </strong>
                                <p>示例：：</p>
                                <div>输入格式：一个整数‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬</div>
                                <div>输入示例‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬：4</div>
                                <div>输出格式：每个步骤一行，每行参考格式如下：[STEP  10] A-&gt;C‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‫‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬</div>
                                <div>
                                    输出示例：
                                    <pre>
                                        [STEP   1] A-&gt;B<br />
                                    [STEP   2] A-&gt;C<br />
                                    [STEP   3] B-&gt;C<br />
                                    [STEP   4] A-&gt;B<br />
                                    [STEP   5] C-&gt;A<br />
                                    [STEP   6] C-&gt;B<br />
                                    [STEP   7] A-&gt;B<br />
                                    [STEP   8] A-&gt;C<br />
                                    [STEP   9] B-&gt;C<br />
                                    [STEP  10] B-&gt;A<br />
                                    [STEP  11] C-&gt;A<br />
                                    [STEP  12] B-&gt;C<br />
                                    [STEP  13] A-&gt;B<br />
                                    [STEP  14] A-&gt;C<br />
                                    [STEP  15] B-&gt;C<br />
                                    </pre>
                                </div>
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
                                        <td rowSpan="7">3</td>
                                        <td>[STEP   1] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   2] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   3] C-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   4] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   5] B-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   6] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   7] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan="63">6</td>
                                        <td>[STEP   1] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   2] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   3] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   4] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   5] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   6] C-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   7] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   8] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP   9] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  10] B-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  11] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  12] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  13] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  14] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  15] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  16] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  17] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  18] C-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  19] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  20] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  21] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  22] B-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  23] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  24] C-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  25] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  26] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  27] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  28] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  29] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  30] C-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  31] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  32] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  33] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  34] B-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  35] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  36] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  37] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  38] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  39] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  40] B-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  41] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  42] C-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  43] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  44] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  45] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  46] B-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  47] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  48] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  49] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  50] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  51] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  52] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  53] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  54] C-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  55] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  56] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  57] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  58] B-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  59] C-&gt;A</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  60] B-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  61] A-&gt;B</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  62] A-&gt;C</td>
                                    </tr>
                                    <tr>
                                        <td>[STEP  63] B-&gt;C</td>
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

export default Test8;
