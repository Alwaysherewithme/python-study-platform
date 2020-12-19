import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson10 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h3>10.  Python条件分支</h3>
                <b>条件分支基本形式</b>
                <div>Python 编程中 if 语句用于控制程序的执行，通过判断条件语句的执行结果（True 或者 False）来决定执行哪个分支的代码块。</div>
                <div>格式方面，请注意 if/elif/else 一行以冒号结尾，执行语句须缩进。缩进相同空格的连续代码块，表示其他诸如 C 语言的花括号。如：</div>
                <pre>
                    {`
if 判断条件1：
    执行语句1……
elif判断条件2：        # 根据需要可以删除，或者增加多个 elif 语句
    执行语句2……
    执行语句2……
else：
    执行语句3……
                    `}
                </pre>
                <div>备注：Python 不支持 switch 语句。故对多个条件判断，须用 elif 实现。</div>
                <p></p>

                <div>实例：</div>
                <pre>
                    {`
num = 5
if num == 3:            # 判断 num 的值
    print （'boss'）
elif num == 2:
    print （'user'）
elif num == 1:
    print （'worker'）
else:                   # 条件均不成立时输出
    print （'error'）
                    `}
                </pre>
                <div>输出结果为：</div>
                <pre>error         # 输出结果</pre>

                <b>有多个条件同时判断时，可使用 and 或者 or 逻辑符号。</b>
                <div>实例</div>
                <pre>
                    {`
num = 9
if num > 0 and num < 10:    # 判断值是否在 0 ~ 10 之间
    print 'hello'
                    `}
                </pre>
                <div>输出结果: hello</div>
                <pre>
                    {`
num = 10
if num < 0 or num > 10:       # 判断值是否在小于 0 或大于 10
    print 'hello'
else:
    print 'undefine'
                    `}
                </pre>
                <div>输出结果: undefine</div>
                <p></p>

                <b>简写 if</b>
                <div>如果只有一条语句要执行，可以将其与 if 语句放在同一行。如：</div>
                <pre>
                    {`
a = 200
b = 66
if a > b: print("a is greater than b")
                    `}
                </pre>

                <b>简写 if ... else</b>
                <div>如果只有两条语句要执行，一条 if，另一条 else，可以将它们放在同一行。如：</div>
                <pre>
                    {`
a = 200
b = 66
print("A") if a > b else print("B")
                    `}
                </pre>
            </Col>
        </Row>
        <Row className="page-header py-4">
            <Col>
                <h3>小测试</h3>
                <form id="testForm">
                    <label>1.  判断对错：Python 支持 switch 语句（  ）。</label>
                    <div>
                        <input type="radio" name="problem_1" value="A" /> A. 对
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="B" /> B. 错
                    </div>
                    <p></p>
                    <label>2.  哪个选项给出的保留字不直接用于表示分支结构？（  ）</label>
                    <div>
                        <input type="radio" name="problem_2" value="A" /> A. elif
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="B" /> B. else
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="C" /> C. if
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="D" /> D. in
                    </div>
                    <p></p>
                    <label>3.  以下语句的执行结果为（  ）。</label>
                    <pre>
                        {`
num = 2
if num == 3:            # 判断num的值
    print （'boss'）
elif num == 2:
    print （'user'）
elif num == 1:
    print （'worker'）
else:                   # 条件均不成立时输出
    print （'error'）
                        `}
                    </pre>
                    <p></p>
                    <div>
                        <input type="radio" name="problem_3" value="A" /> A. boss
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="B" /> B. user
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="C" /> C. worker
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="D" /> D. error
                    </div>
                </form>
            </Col>
        </Row>
    </Fragment>
)