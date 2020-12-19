import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson7 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h3>7.  Python序列</h3>
                <div>序列是多个元素的组合。</div>
                <div>为便于快速找到序列中的元素，每个元素都分配了索引。</div>
                <div>序列的第一个索引是0，第二个索引是1，依此类推。</div>
                <div>类似的，序列的倒数第一个索引是-1，倒数第二个索引是-2，依此类推。</div>
                <div>序列都可以进行的操作包括索引，切片，加，乘，检查成员。</div>
                <div>前面讲的字符串就属于序列。此外还有两种最常见的序列：列表、元组。</div>
                <p></p>

                <h4>7.1  列表</h4>
                <b>列表是什么</b>
                <div>列表由一系列按特定顺序排列的元素组成。</div>
                <div>Python 用方括号（[ ]）表示列表，并用逗号分割其中的元素。</div>
                <div>列表的元素不需要具有相同的数据类型。</div>
                <div>创建一个列表，只要把逗号分隔的不同的数据项使用方括号括起来即可。如下所示：</div>
                <pre>
                    {`
list1 = ['physics', 'chemistry', 1997, 2000]
list2 = [1, 2, 3, 4, 5]
list3 = ["a", "b", "c", "d"]
                    `}
                </pre>

                <b>访问列表中的值</b>
                <div>与字符串的索引一样，列表索引从0开始。使用下标索引来访问列表中的值，如：</div>
                <pre>
                    {`
>>> list = ['physics', 'chemistry', 1997, 2000]
>>> list[0]
'physics'
>>> list[1]
'chemistry'
                    `}
                </pre>

                <b>更新列表</b>
                <div>可以对列表的元素进行修改或更新，如：</div>
                <pre>
                    {`
>>> cars = ["Porsche", "Volvo", "BMW"]
>>> cars[0] = "Audi"
>>> print(cars)
['Audi', 'Volvo', 'BMW']
                    `}
                </pre>
                <div>也可以使用append()方法来添加列表项，如：</div>
                <pre>
                    {`
>>> list = []               # 空列表
>>> list.append('Google')   # 使用 append() 添加元素
>>> print(list)
['Google']
                    `}
                </pre>

                <b>删除列表元素</b>
                <div>可以使用 del 语句来删除列表的元素，如：</div>
                <pre>
                    {`
>>> list = ['physics', 'chemistry', 1997, 2000]
>>> del list[2]
>>> print(list)
['physics', 'chemistry', 2000]
                    `}
                </pre>

                <b>列表切片</b>
                <div>列表切片处理方法与字符串切片方法类似。所不同的是，列表切片处理的是一个一个列表内以索引为单位的元素；字符串处理的是一个一个以字符为单位的元素。如：</div>
                <pre>
                    {`
>>> L = ['Google', 'Yahoo', 'Taobao']
>>> L[-2]
'Yahoo'
>>> L[1:]
['Yahoo', 'Taobao']
                    `}
                </pre>

                <b>序列类型通用函数</b>
                <div>以s =["python","chemistry","art"]为例：</div>
                <p></p>

                <table className="table mb-0">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="border-0">函数</th>
                            <th scope="col" className="border-0">描述</th>
                            <th scope="col" className="border-0">实例</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>len(s)</td>
                            <td>返回序列s的长度，即元素个数</td>
                            <td>&gt;&gt;&gt; len(s)   # 3</td>
                        </tr>
                        <tr>
                            <td>min(s)</td>
                            <td>返回序列s的最小元素，s中元素需要可比较</td>
                            <td>&gt;&gt;&gt; min(s)   # 'art'</td>
                        </tr>
                        <tr>
                            <td>max(s)</td>
                            <td>返回序列s的最大元素，s中元素需要可比较</td>
                            <td>&gt;&gt;&gt;max(s)   # 'python'</td>
                        </tr>
                        <tr>
                            <td>s.index(x)</td>
                            <td>返回序列s中第一次出现元素x的位置</td>
                            <td>{'>>> s.index("chemistry")   # 1'}</td>
                        </tr>
                        <tr>
                            <td>s.count(x)</td>
                            <td>返回序列s中出现x的总次数</td>
                            <td>{'>>> s.count("chemistry")   # 1'}</td>
                        </tr>
                        <tr>
                            <td>",".join(s)</td>
                            <td>s中的元素必须是字符串形式。表示把序列s（列表或者元组）中的各个元素连接起来，各元素以指定字符分隔（左例为逗号）,形成新的字符串。</td>
                            <td>{'>>> str=",".join(s)'}<br />{'>>> print(str)   # python,chemistry,art'}</td>
                        </tr>
                    </tbody>
                </table>
                <p></p>

                <b>列表类型操作函数和方法</b>
                <div>以ls = ["cat", "dog", "tiger", 1024]为例：</div>
                <p></p>

                <table className="table mb-0">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="border-0">函数或方法</th>
                            <th scope="col" className="border-0">描述</th>
                            <th scope="col" className="border-0">实例</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ls.append(x)</td>
                            <td>在列表ls最后增加一个元素</td>
                            <td>{">>> ls.append(1234)"}<br />{">>> print(ls)   # ['cat', 'dog', 'tiger', 1024, 1234]"}</td>
                        </tr>
                        <tr>
                            <td>ls.clear()</td>
                            <td>删除列表ls中所有元素</td>
                            <td>{'>>> ls.clear('}<br />{'>> print(ls)   # []'}</td>
                        </tr>
                        <tr>
                            <td>ls.copy()</td>
                            <td>生成一个新列表，赋值ls中所有元素</td>
                            <td>{'ls_copy= ls.copy()'}<br />{">>> print(ls_copy)   # ['cat', 'dog', 'tiger', 1024]"}</td>
                        </tr>
                        <tr>
                            <td>ls.insert(i,x)</td>
                            <td>在列表ls的第i位置增加元素x</td>
                            <td>{'>>> ls.insert(3,"human")'}<br />{">>> print(ls)   # ['cat', 'dog', 'tiger', 'human', 1024]"}</td>
                        </tr>
                        <tr>
                            <td>ls.pop(i)</td>
                            <td>将列表ls中第i位置元素取出并删除该元素</td>
                            <td>{">>> ls.pop(1)   # 'dog'"}<br />{">>> print(ls)   # ['cat', tiger', 1024]"}</td>
                        </tr>
                        <tr>
                            <td>ls.remove(x)</td>
                            <td>将列表ls中出现的第一个元素x删除</td>
                            <td>{'>>> ls.remove("tiger")'}<br />{">>> print(ls)   # ['cat', 'dog',1024]"}</td>
                        </tr>
                        <tr>
                            <td>ls.reverse()</td>
                            <td>将列表ls中的元素反转</td>
                            <td>{'>>> ls.reverse()'}<br />{">>> print(ls)   # [1024, 'tiger', 'dog', 'cat']"}</td>
                        </tr>
                    </tbody>
                </table>
                <p></p>

                <h4>7.2  元祖</h4>
                <div>元祖 tuple 是一种序列。元祖与列表的不同之处在于：列表的元素可以修改，而元组的元素不能修改。元祖使用圆括号标识，并使用逗号分隔元素。</div>

                <b>创建元祖</b>
                <pre>
                    {`
tup1 = ('physics', 'chemistry', 1997, 2000)
tup2 = (1, 2, 3, 4, 5 )
tup3 = ()              # 创建空元组
tup4 = (50,)           # 元组中只包含一个元素时，须在元素后面添加逗号！
                    `}
                </pre>

                <b>访问元祖元素</b>
                <div>可以通过引用方括号内的索引号来访问元组元素。下标索引从 0 开始。如：</div>
                <pre>
                    {`
>>> tuple = ("apple", "banana", "cherry", "orange", "kiwi")
>>> print(tuple[1])
banana
>>> print(tuple[-1])
kiwi
>>> print(tuple[-3:-1])
('cherry', 'orange')
                    `}
                </pre>

                <b>修改元组元素</b>
                <div>元组中的元素值是不允许修改的，但可以对整个元组变量重新赋值。如：</div>
                <pre>
                    {`
>>> tup = (12, 34.56) 
>>> tup = ('abc', 'xyz') 
# 以下修改元组元素操作是非法的，系统将报错。
# tup[0] = 100 
TypeError: 'tuple' object does not support item assignment
                    `}
                </pre>
                <b>删除元祖</b>
                <div>可以使用 del 语句来删除整个元组</div>
                <pre>
                    {`
>>> tup = ("apple", "banana", "cherry")
>>> del tup
# 以下会引发错误，因为元组已不存在。
# print(tup)
NameError: name 'tup' is not defined
                    `}
                </pre>

                <b>元祖相关函数</b>
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
                            <td>len((1, 2, 3))</td>
                            <td>3</td>
                            <td>计算元素个数</td>
                        </tr>
                        <tr>
                            <td>max((1, 2, 3))</td>
                            <td>3</td>
                            <td>返回元素最大值</td>
                        </tr>
                        <tr>
                            <td>min((1, 2, 3))</td>
                            <td>1</td>
                            <td>返回元素最小值</td>
                        </tr>
                        <tr>
                            <td>(1, 2, 3) + (4, 5, 6)</td>
                            <td>(1, 2, 3, 4, 5, 6)</td>
                            <td>连接合并元祖</td>
                        </tr>
                        <tr>
                            <td>('Hi!',) * 4</td>
                            <td>('Hi!', 'Hi!', 'Hi!', 'Hi!')</td>
                            <td>复制元素</td>
                        </tr>
                        <tr>
                            <td>3 in (1, 2, 3)</td>
                            <td>True</td>
                            <td>元素是否存在</td>
                        </tr>
                        <tr>
                            <td>
                                <pre>
                                    {`
for x in (1, 2, 3):
    print x,
                                    `}
                                </pre>
                            </td>
                            <td>1 2 3</td>
                            <td>遍历元祖元素</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
        <Row noGutters className="page-header py-4">
            <Col>
                <h3>小测试</h3>
                <form id="testForm">
                    <label>1.  列表 List 值为 [1, 2, 3, 4, 5, 6, 7, 8] ，则切片 List[2 : 5] 得到的值是（ ）。</label>
                    <div>
                        <input type="radio" name="problem_1" value="A" /> A. [2, 3, 4, 5]
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="B" /> B. [2, 3, 4]
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="C" /> C. [3, 4, 5, 6]
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="D" /> D. [3, 4, 5]
                    </div>
                    <p></p>
                    <label>2.  表达式（1，2，3）* 3 的执行结果是（ ）。</label>
                    <div>
                        <input type="radio" name="problem_2" value="A" /> A. (1，2，3，1，2，3，1，2，3)
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="B" /> B. (1，1，1，2，2，2，3，3，3)
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="C" /> C. ((1，2，3), (1，2，3), (1，2，3))
                    </div>
                    <p></p>
                    <label>3. 已知 x = [1, 2, 3, 2, 3]，执行语句 x.pop() 之后，x 的值为（  ）。</label>
                    <div>
                        <input type="radio" name="problem_3" value="A" /> A. [1, 2, 3, 2]
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="B" /> B. [2, 3, 2, 3]
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="C" /> C. [1, 2, 3]
                    </div>
                </form>
            </Col>
        </Row>
    </Fragment>
)