import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson12 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h3>12.  Python 的 for 循环</h3>
                <b>基本格式</b>
                <div>for 循环用于迭代组合元素，包括列表，元组，字典，集合、字符串。for 循环中可以使用 break 退出循环，使用 continue 跳至下一轮循环。for 循环的基本格式为：</div>
                <pre>
                    {`
for x in ABC(某组合数据):
    执行语句1
                `}
                </pre>
                <div>上述 for 语句的作用是：把某组合 ABC 的每一个元素依次赋值给 x，执行执行语句1，直到把每个元素全部赋值完。</div>
                <p></p>

                <b>循环遍历列表</b>
                <pre>
                    {`
fruits = ["apple", "banana", "cherry"]
for x in fruits:      # 依次将 "apple", "banana", "cherry" 赋值给 x
    print(x,end=" ")
                `}
                </pre>
                <div>以上代码执行输出结果: </div>
                <pre>
                    apple banana cherry
                </pre>
                <p></p>

                <b>循环遍历字典</b>
                <pre>
                    {`
favorite_languages = {
    "Jen": "Python",
    "Sarah": "C",
    "Edward": "Java"
};
for name,language in favorite_languages.items():<br />
    print(name + "'s favorite language is " + language + ".")
                `}
                </pre>
                <div>输出结果:</div>
                <pre>
                    {`
Jen's favorite language is Python.
Sarah's favorite language is C.
Edward's favorite language is Java.
                    `}
                </pre>
                <p></p>

                <b>循环遍历字符串</b>
                <pre>
                    {`
for x in "banana":
    print(x,end=" ")
                    `}
                </pre>
                <div>输出结果:</div>
                <pre>b a n a n a</pre>
                <p></p>

                <b>循环遍历中的 range() 函数</b>
                <div>如需循环一组代码指定的次数，我们可以使用 range() 函数。range() 函数返回一个数字序列，默认情况下从 0 开始，并递增 1（默认地）以指定的数字结束。如：</div>
                <p></p>
                <pre>
                    {`
for x in range(10): x 的值从0到9迭代。
for x in range(3, 10)：x 的值从3到10迭代（不包括 10）：
range() 函数默认将序列递增 1，也可以通过添加第三个参数来指定增量值：
for x in range(2, 10, 3)：x 的值从2、5、8迭代。
                    `}
                </pre>
            </Col>
        </Row>
        <Row className="page-header py-4">
            <Col>
                <h3>小测试</h3>
                <form id="testForm">
                    <label>1.  range(10,20)[4] 的值为（  ）。</label>
                    <div>
                        <input type="radio" name="problem_1" value="A" /> A. 13
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="B" /> B. 14
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="C" /> C. 16
                    </div>
                    <p></p>
                    <label>2.  以下代码的执行结果为（  ）。</label>
                    <pre>
                        {`
for i in range(3):
    print (i,end=’,’)
                        `}
                    </pre>
                    <div>
                        <input type="radio" name="problem_2" value="A" /> A. 0, 1, 2,
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="B" /> B. 0, 1, 2
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="C" /> C. 1, 2, 3,
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="D" /> D. 1, 2, 3
                    </div>
                    <p></p>
                    <label>3.  如果仅仅是用于控制循环次数，那么 for i in range(20) 和 for i in range(20，40) 的作用是等价的。请判断这句话对错（  ）。</label>
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