import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson6 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h3>6.  Python 字符串</h3>
                <h4>6.1  Python 字符串基本用法</h4>
                <div>字符串就是一系列字符。在 Python 中，用引号括起的是字符串，其中的引号可以是单引号，也可以是双引号。如：</div>
                <pre>
                    {`
“This is a string.”
‘This is also a string.’
                    `}
                </pre>
                <br />
                <h4>6.2  输入字符串</h4>
                <div>Python 提供 input 函数接收用户的输入的文本信息。获取用户输入后，Python 将其存储在一个变量中。如：</div>
                <pre>
                    {`
Name = input("Please enter your name:")
print("Hello," + name + "!")
                    `}
                </pre>
                <div>显示结果：</div>
                <pre>
                    {`
Please enter your name: Eric     # 粗体 Eric 为用户输入
Hello, Eric！
                    `}
                </pre>
                <br />
                <h4>6.3  引号内的引号处理</h4>
                <div>单引号内的字符串内容若含有双引号，则保留双引号处理。如：</div>
                <pre>
                    {`
>>> word='P"y"thon'
>>> print(word)
P"y"thon
                    `}
                </pre>
                <div>同理，双引号内的字符串内容若含有单引号，则保留单引号处理。如</div>
                <pre>
                    {`
>>> word="P'y'thon"
>>> print(word)
P'y'thon
                    `}
                </pre>
                <div>注意：单引号内的字符串内容若含有单引号，双引号内的字符串内容若含有双引号，系统会报错。报错原因是：系统把前两个引号中间的内容视作字符串，把第二个引号到第三个引号之间的内容（如下面的y）视作Python代码，从而引发错误。</div>
                <pre>
                    {`
>>> word="P"y"thon"
SyntaxError: invalid syntax
                    `}
                </pre>
                <br />
                <h4>6.4  多行字符串</h4>
                <div>可以使用三个引号将多行字符串赋值给变量。如：</div>
                <pre>
                    {`
a = """Python is a widely used general-purpose, high level programming language.
It was initially designed by Guido van Rossum in 1991
and developed by Python Software Foundation.
It was mainly developed for emphasis on code readability,
and its syntax allows programmers to express concepts in fewer lines of code."""
                    `}
                </pre>
                <br />
                <h4>6.5  字符串是数组</h4>
                <div>Python 中的字符串是表示 unicode 字符的字节数组。单个字符就是长度为 1 的字符串。可用方括号访问字符串的元素。如，获取位置 1 处的字符（请记住第一个字符的位置为 0）：</div>
                <pre>
                    {`
>>> a = "Hello, World!"
>>> print(a[1])
e
                    `}
                </pre>
                <br />
                <h4>6.6  字符串切片</h4>
                <div>指定开始索引和结束索引，以冒号分隔，可以返回字符串的一部分。如：获取从位置 2 到位置 5（不包括 5）的字符：</div>
                <pre>
                    {`
>>> b = "Hello, World!"
>>> print(b[2:5])
llo
                    `}
                </pre>
                <div>可以使用负索引（倒数第一个索引是 -1，倒数第二个索引是 -2，依此类推）从字符串末尾开始切片：</div>
                <pre>
                    {`
>>> b = "Hello, World"
>>> print(b[0:-1])
Hello, Worl
>>> b = "Hello, World!"
>>> print(b[-5:-2])
orl
                    `}
                </pre>
                <br />
                <h4>6.7  字符串相关函数和方法</h4>
                <table className="table mb-0">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="border-0">Python 表达式</th>
                            <th scope="col" className="border-0">结果</th>
                            <th scope="col" className="border-0">描述</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>"Emma"+ " "+"Zhao"</td>
                            <td>'Emma Zhao'</td>
                            <td>使用加号合并字符串</td>
                        </tr>
                        <tr>
                            <td>'Hi!'*4</td>
                            <td>'Hi!Hi!Hi!Hi!'</td>
                            <td>复制字符串</td>
                        </tr>
                        <tr>
                            <td>len("apple")</td>
                            <td>5</td>
                            <td>计算字符个数</td>
                        </tr>
                        <tr>
                            <td>"Apple".lower()</td>
                            <td>'apple'</td>
                            <td>将字符串全部转换成小写</td>
                        </tr>
                        <tr>
                            <td>"Apple".upper()</td>
                            <td>'APPLE'</td>
                            <td>将字符串全部转换成大写</td>
                        </tr>
                        <tr>
                            <td>"apple orange pear".split()</td>
                            <td>['apple', 'orange', 'pear']</td>
                            <td>将字符串以空格为分隔符，分拆成若干字符组成的列表</td>
                        </tr>
                        <tr>
                            <td>"apple orange apple".count("apple")</td>
                            <td>2</td>
                            <td>字符串中出现特定字符的个数</td>
                        </tr>
                        <tr>
                            <td>"apple orange apple".replace("apple","lemon")</td>
                            <td>'lemon orange lemon'</td>
                            <td>替换字符串中的某个元素</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
        <Row className="page-header py-4">
            <Col md="12" className="form-group">
                <h3>小测试</h3>
                <form id="testForm">
                    <label>1.  表达式 'ab' in 'acbed' 的值为（  ）。</label>
                    <div>
                        <input type="radio" name="problem_1" value="A" /> A. True
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="B" /> B. False
                    </div>
                    <p></p>
                    <label>2.  表达式 'abcabcabcab'.count('abc') 的值为（  ）。</label>
                    <div>
                        <input type="radio" name="problem_2" value="A" /> A. 1
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="B" /> B. 2
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="C" /> C. 3
                    </div>
                    <p></p>
                    <label>3.  表达式 .join('abcdefg'.split('bc')) 的值为（  ）。</label>
                    <div>
                        <input type="radio" name="problem_3" value="A" /> A. adefg
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="B" /> B. bcdefg
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="C" /> C. abc
                    </div>
                </form>
            </Col>
        </Row>
    </Fragment>
)