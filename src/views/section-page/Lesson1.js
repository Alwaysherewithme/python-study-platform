import {
    Col, Row
} from "shards-react";
import React, { Fragment } from 'react';

export const Lesson1 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h3>1.  Python简介</h3>
                <h4>1.1  Python简介</h4>
                <div>Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言。</div>
                <div>Python 由 Guido van Rossum发明，第一个公开发行版发行于 1991 年。</div>
                <div>
                    <ul>
                        <li>Python 是一种解释型语言： 这意味着开发过程中没有了编译这个环节。</li>
                        <li>Python 是交互式语言： 这意味着，您可以在一个 Python 提示符 {'>>>'} 后直接执行代码。</li>
                        <li>Python 是面向对象语言: 这意味着Python支持面向对象的风格或代码封装在对象的编程技术。</li>
                    </ul>
                </div>
                <p></p>
                <h4>1.2  Python 特点</h4>
                <div>
                    <ul>
                        <li>1. 易于学习：Python 有相对较少的关键字，结构简单，和一个明确定义的语法，学习起来更加简单。</li>
                        <li>2. 易于阅读：Python 代码定义的清晰。</li>
                        <li>3. 易于维护：Python 的成功在于它的源代码是相当容易维护的。</li>
                        <li>4. 一个广泛的标准库：Python 的最大的优势之一是丰富的库，跨平台的，在 UNIX，Windows 和 Macintosh 兼容很好。</li>
                        <li>5. 互动模式：互动模式的支持，您可以从终端输入执行代码并获得结果的语言，互动的测试和调试代码片断。</li>
                        <li>6. 可移植：基于其开放源代码的特性，Python 已经被移植（也就是使其工作）到许多平台。</li>
                        <li>7. 可扩展：如果你需要一段运行很快的关键代码，或者是想要编写一些不愿开放的算法，你可以使用 C 或 C++ 完成那部分程序，然后从你的Python程序中调用。</li>
                        <li>8. 数据库：Python 提供所有主要的商业数据库的接口。</li>
                        <li>9. GUI 编程：Python 支持 GUI 可以创建和移植到许多系统调用。</li>
                        <li>10. 可嵌入: 你可以将 Python 嵌入到 C/C++ 程序，让你的程序的用户获得“脚本化”的能力。</li>
                    </ul>
                </div>
            </Col>
        </Row>
        <Row className="page-header py-4">
            <Col>
                <h3>小测试</h3>
                <form id="testForm">
                    <label>1.  Python 是一种（  ）的高级程序设计语言。</label>
                    <div>
                        <input type="radio" name="problem_1" value="A" /> A. 汇编型
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="B" /> B. 解释型
                    </div>
                    <p></p>
                    {/* <FormRadio defaultChecked>A 汇编型 </FormRadio> */}
                    {/* <FormRadio onChange={(e)=>{alert(this.value)}} value="B">B 解释型</FormRadio> */}
                    <label>2.  Python 由 Guido van Rossum 发明，第一个公开发行版于（  ）发行。</label>
                    <div>
                        <input type="radio" name="problem_2" value="A" /> A. 1981
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="B" /> B. 2001
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="C" /> C. 1991
                    </div>
                    <p></p>
                    {/* <FormRadio>A 1981</FormRadio>
                    <FormRadio>B 2001</FormRadio>
                    <FormRadio>C 1991</FormRadio> */}
                    <label>3.  Python是（  ）的编程语言。</label>
                    <div>
                        <input type="radio" name="problem_3" value="A" /> A. 仅支持面向过程
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="B" /> B. 仅支持面向对象
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="C" /> C. 既支持面向过程又支持面向对象
                    </div>
                    <p></p>
                    {/* <FormRadio>A 仅支持面向过程</FormRadio>
                    <FormRadio>B仅支持面向对象</FormRadio>
                    <FormRadio>C既支持面向过程又支持面向对象</FormRadio> */}
                    {/* <button type="submit">SUBMIT</button> */}
                </form>
            </Col>
        </Row>
    </Fragment>
)