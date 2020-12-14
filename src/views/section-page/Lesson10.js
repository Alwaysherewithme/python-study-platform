import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson10 = () => (
    <Fragment>
        <Row noGutters className="page-header py-4">
            <Col>
                <h3>10.	Python条件分支</h3>
                <b>条件分支基本形式</b>

                <div>Python 编程中 if 语句用于控制程序的执行，通过判断条件语句的执行结果（True或者False）来决定执行哪个分支的代码块。</div>
格式方面，请注意if/elif/else一行以冒号结尾，执行语句须缩进。缩进相同空格的连续代码块，表示其他诸如C语言的花括号。如：
if 判断条件1：
		执行语句1……
elif判断条件2：        #根据需要可以删除，或者增加多个elif语句
		执行语句2……
		执行语句2……
else：
		执行语句3……
<div>备注：python不支持 switch 语句。故对多个条件判断，须用 elif实现。</div>

                <div>实例：</div>
                <pre>
                    num = 5
                    if num == 3:            # 判断num的值
                    print （'boss'）
                    elif num == 2:
                    print （'user'）
                    elif num == 1:
                    print （'worker'）
                    else:                   #条件均不成立时输出
                    print （'error'）
                    输出结果为：
                    error                   # 输出结果
</pre>

                <b>有多个条件同时判断时，可使用and或者or逻辑符号。</b>
实例
num = 9
if num &gte; 0 and num &lte; 10:    # 判断值是否在0~10之间
print 'hello'
输出结果: hello

num = 10
if num &lt; 0 or num &gt; 10:       # 判断值是否在小于0或大于10
    print 'hello'
else:
    print 'undefine'
输出结果: undefine

<b>简写 If</b>
如果只有一条语句要执行，可以将其与 if 语句放在同一行。如：
a = 200
b = 66
if a &gt; b: print("a is greater than b")

<b>简写 If ... Else</b>
                <div>如果只有两条语句要执行，一条if，另一条else，可以将它们放在同一行。如：</div>
                <pre>
                    a = 200
                    b = 66
                    print("A") if a &gt; b else print("B")
</pre>


                <div>集合是多个元素的无序组合。每个元素唯一，不存在相同元素。</div>
                <div>集合使用大括号标识，并使用逗号分隔元素。</div>
                <div>为便于保证集合元素的唯一性，Python规定集合的元素不可更改。</div>
                <b>创建集合</b>
                <div>用&lbrace;&rbrace;或set()创建集合。若建立空集合，必须使用set()</div>
                <pre>
                    &gt;&gt;&gt; B=&lbrace;"python","C","C++"&rbrace;<br />
                    &gt;&gt;&gt; print(B)<br />
                    &lbrace;'C++', 'C', 'python'&rbrace;
                </pre>
                <div>注释：集合是无序的，因此无法确定集合元素的显示顺序。</div>
                <pre>
                    &gt;&gt;&gt; D=&lbrace;"python","C","C++","python"&rbrace;   # 如果创建集合时有两个相同的元素python<br />
                    &gr;&gt;&gt; print(D)<br />
                    &lbrace;'C++', 'C', 'python'&rbrace;   # 创建好的集合只保留一个，保证元素互不相同
                </pre>
                <b>集合相关函数</b>
                <div>以set = &lbrace;"apple", "banana", "cherry"&rbrace;为例：</div>


            </Col>
        </Row>
        <Row noGutters className="page-header py-4">
            <Col md="12" className="form-group">
                <h3>测试</h3>
                <form id="testForm">
                    <label htmlFor="feFirstName">1. 判断对错：python支持 switch 语句。</label>
                    <p>
                        <div>
                            <input type="radio" name="problem_1" value="A" /> A. 对
                        </div>
                        <div>
                            <input type="radio" name="problem_1" value="B" /> B. 错
                        </div>
                    </p>
                    <label htmlFor="feFirstName">2. 哪个选项给出的保留字不直接用于表示分支结构？</label>
                    <p>
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
                    </p>
                    <label htmlFor="feFirstName">3. 以下语句的执行结果为（ ）。</label>
                    <pre>
                        num = 2
                        if num == 3:            # 判断num的值
                        print （'boss'）
                        elif num == 2:
                        print （'user'）
                        elif num == 1:
                        print （'worker'）
                        else:                   #条件均不成立时输出
                        print （'error'）
                    </pre>
                    <p>
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
                    </p>
                </form>
            </Col>
        </Row>
    </Fragment>
)