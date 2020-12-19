import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson11 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h3>11. Python 的 while 循环</h3>
                <b>while 循环基本用法</b>
                <div>while 语句用于循环执行程序，即在某条件下，循环执行某段程序，以处理需要重复处理的相同任务。基本形式为：</div>
                <pre>
                    {`
while 判断条件(condition)：
    执行语句(statements)……
                    `}
                </pre>
                <div>其中，执行语句可以是单个语句或语句块。判断条件可以是任何表达式，任何非零、或非空（null）的值均为 true。当判断条件假 false 时，循环结束。</div>
                <pre>
                    {`
count = 0
while (count &gt; 4):
    print 'The count is:', count
    count = count + 1
print "Good bye!"
                    `}
                </pre>
                <div>以上代码执行输出结果:</div>
                <pre>
                    {`
The count is: 0
The count is: 1
The count is: 2
The count is: 3
Good bye!
                    `}
                </pre>

                <b>使用 break 退出循环</b>
                <div>要立即退出循环，不再运行循环中余下的代码，也不管判断条件的结果如何，可使用 break 语句。break 可以跳出其所在的那一层循环。如：</div>
                <pre>
                    {`
i = 1
while i:
    print i         # 输出 1~10
    i += 1
    if i &gt; 10:     # 当 i 大于 10时跳出循环
        break
                    `}
                </pre>

                <b>在循环中使用 continue</b>
                <div>要返回到循环条件，并根据判断条件的结果决定是否继续执行循环，可使用 continue 语句。如：</div>
                <pre>
                    {`
current_number = 0
while current_number &lt; 0:
    current_number += 1
    if current_number%2 == 0
        continue
    print(current_number, end=’ ’)
                    `}
                </pre>
                <div>输出结果: 1 3 5 7 9</div>
                <p></p>

                <b>while … else语句</b>
                <div>通过使用 else 语句，当判断条件的结果为 false 时，运行一次 else 代码块。如：</div>
                <pre>
                    {`
i = 1
while i &lt; 6:
    print(i)
    i += 1
else:
    print("i is no longer less than 6")
                    `}
                </pre>

                <b>避免无限循环</b>
                <div>若条件判断语句永远为 true，循环将无限执行。要避免无限循环，务必对每个 while 循环进行测试，确保它按预期结束。</div>
                <div>如果程序陷入无限循环，可按 <pre>CTRL + C</pre> 中断循环，也可关闭显示程序输出的终端窗口。</div>
            </Col>
        </Row>
        <Row className="page-header py-4">
            <Col>
                <h3>小测试</h3>
                <form id="testForm">
                    <label>1.  对于带有 else 子句的 while 循环，当循环因循环条件不成立而自然结束时（  ）执行 else 中的代码。</label>
                    <div>
                        <input type="radio" name="problem_1" value="A" /> A. 会
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="B" /> B. 不会
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="C" /> C. 不一定
                    </div>
                    <p></p>
                    <label>2.  在循环语句中，break 语句的作用是（  ）。</label>
                    <div>
                        <input type="radio" name="problem_2" value="A" /> A. 提前结束所有循环
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="B" /> B. 提前结束本层循环
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="C" /> C. 提前进入下一次循环
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="D" /> D. 提前结束下一次循环
                    </div>
                    <p></p>
                    <label>3.  判断对错：在循环中 continue 语句的作用是跳出当前循环（  ）。</label>
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