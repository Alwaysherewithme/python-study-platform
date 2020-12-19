import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson3 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h3>3.  Python 变量名和关键字</h3>
                <h4>3.1  Python 变量名</h4>
                <div>
                    <ul>
                        <li>变量名只能包含字母、数字和下划线。不能包含空格，可使用下划线来分隔其中的单词。例如，变量名 greeting_message 可行，但 greeting message 会引发错误。</li>
                        <li>变量名可以字母或下划线开头，但不能以数字开头。例如，可将变量命名为 message_1，但不能命名为 1_message。</li>
                        <li>变量名对大小写敏感。例如，ABC 与 abc 是两个不同的变量。</li>
                        <li>不要将 Python 关键字和函数名用作变量名。</li>
                    </ul>
                </div>
                <br />
                <h4>3.2  Python 关键字</h4>
                <div>Python 的标准库提供了一个 keyword 模块，可以输出当前版本的所有关键字：</div>
                <pre>
                    {`
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
                    `}
                </pre>
            </Col>
        </Row>
        <Row className="page-header py-4">
            <Col>
                <h3>小测试</h3>
                <form id="testForm">
                    <label>1.  在 false、true、if、else、And、Or、Return、lambda 中，属于 Python 关键字的有（  ）个。</label>
                    <div>
                        <input type="radio" name="problem_1" value="A" /> A. 0
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="B" /> B. 2
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="C" /> C. 3
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="D" /> D. 8
                    </div>
                    <p></p>
                    <label>2.  可以用 hello baby 命名 Python 文件么（  ）。</label>
                    <div>
                        <input type="radio" name="problem_2" value="A" /> A. 可以
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="B" /> B. 不可以
                    </div>
                    <p></p>
                    <label>3.  Python 变量名对大小写不敏感，请判断对错（   ）。</label>
                    <div>
                        <input type="radio" name="problem_3" value="A" /> A. 对
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="B" /> B. 错
                    </div>
                </form>
            </Col>
        </Row>
    </Fragment>
)





