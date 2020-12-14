import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson7 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h1>还没格式化</h1>
                <h3>7.	Python序列</h3>
                <p>
                    <div>序列是多个元素的组合。</div>
                    <div>为便于快速找到序列中的元素，每个元素都分配了索引。</div>
                    <div>序列的第一个索引是0，第二个索引是1，依此类推。</div>
                    <div>类似的，序列的倒数第一个索引是-1，倒数第二个索引是-2，依此类推。</div>
                    <div>序列都可以进行的操作包括索引，切片，加，乘，检查成员。</div>
                    <div>前面讲的字符串就属于序列。此外还有两种最常见的序列：列表、元组。</div>
                </p>
                <h4>7.1 列表</h4>
                <p>
                    <div>列表是什么</div>
                    <div>列表由一系列按特定顺序排列的元素组成。</div>
                    <div>Python用方括号（[ ]）表示列表，并用逗号分割其中的元素。</div>
                    <div>列表的元素不需要具有相同的数据类型。</div>
                    <div>创建一个列表，只要把逗号分隔的不同的数据项使用方括号括起来即可。如下所示：</div>
                    <pre>list1 = ['physics', 'chemistry', 1997, 2000]</pre>
                    <pre>list2 = [1, 2, 3, 4, 5]</pre>
                    <pre>list3 = ["a", "b", "c", "d"]</pre>
                </p>
                <p>
                    <div>访问列表中的值</div>
                    <div>与字符串的索引一样，列表索引从0开始。使用下标索引来访问列表中的值，如：</div>
                </p>
                <pre>&gt;&gt;&gt; list = ['physics', 'chemistry', 1997, 2000]</pre>
                <pre>&gt;&gt;&gt; list[0]</pre>
                <pre>'physics'</pre>
                <pre>&gt;&gt;&gt; list[1]</pre>
                <pre>'chemistry'</pre>
                <p>
                    <div>更新列表</div>
                    <div>可以对列表的元素进行修改或更新，如：</div>
                    <pre>&gt;&gt;&gt; cars = ["Porsche", "Volvo", "BMW"]</pre>
                    <pre>&gt;&gt;&gt; cars[0] = "Audi"</pre>
                    <pre>&gt;&gt;&gt; print(cars)</pre>
                    <pre>['Audi', 'Volvo', 'BMW']</pre>
                    <div>也可以使用append()方法来添加列表项，如：</div>
                    <pre>&gt;&gt;&gt; list = []               # 空列表</pre>
                    <pre>&gt;&gt;&gt; list.append('Google')   # 使用 append() 添加元素</pre>
                    <pre>&gt;&gt;&gt; print(list)</pre>
                    <pre>['Google']</pre>
                </p>
                <p>
                    <div>删除列表元素</div>
                    <div>可以使用 del 语句来删除列表的元素，如：</div>
                    <pre>&gt;&gt;&gt; list = ['physics', 'chemistry', 1997, 2000]</pre>
                    <pre>&gt;&gt;&gt; del list[2]</pre>
                    <pre>&gt;&gt;&gt; print(list)</pre>
                    <pre>['physics', 'chemistry', 2000]</pre>
                </p>
                <p>
                    <div>列表切片</div>
                    <div>列表切片处理方法与字符串切片方法类似。所不同的是，列表切片处理的是一个一个列表内以索引为单位的元素；字符串处理的是一个一个以字符为单位的元素。如：</div>
                    <pre>&gt;&gt;&gt; L = ['Google', 'Yahoo', 'Taobao']</pre>
                    <pre>&gt;&gt;&gt; L[-2]</pre>
                    <pre>'Yahoo'</pre>
                    <pre>&gt;&gt;&gt; L[1:]</pre>
                    <pre>['Yahoo', 'Taobao']</pre>
                </p>
                <p>
                    <div>序列类型通用函数</div>
                    <div>以s =["python","chemistry","art"]为例：</div>
                </p>
                <table className="table mb-0">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="border-0">
                                函数
                        </th>
                            <th scope="col" className="border-0">
                                描述
                        </th>
                            <th scope="col" className="border-0">
                                实例
                        </th>
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
                <br />
                <p>
                    <div>列表类型操作函数和方法</div>
                    <div>以ls = ["cat","dog","tiger",1024]为例：</div>
                </p>
                <table className="table mb-0">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="border-0">
                                函数或方法
                        </th>
                            <th scope="col" className="border-0">
                                描述
                        </th>
                            <th scope="col" className="border-0">
                                实例
                        </th>
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
                <h4>7.2 元祖</h4>
                <p>元祖tuple是一种序列。元祖与列表的不同之处在于：列表的元素可以修改，而元组的元素不能修改。元祖使用圆括号标识，并使用逗号分隔元素。</p>

                <div>创建元祖</div>
                <pre>tup1 = ('physics', 'chemistry', 1997, 2000) </pre>
                <pre>tup2 = (1, 2, 3, 4, 5 )</pre>
                <pre>tup3 = ()              #创建空元组</pre>
                <pre>tup4 = (50,)           #元组中只包含一个元素时，须在元素后面添加逗号！</pre>

                <div>访问元祖元素</div>
                <div>可以通过引用方括号内的索引号来访问元组元素。下标索引从0开始。如：</div>
                <pre>&gt;&gt;&gt; tuple = ("apple", "banana", "cherry", "orange", "kiwi")</pre>
                <pre>&gt;&gt;&gt; print(tuple[1])</pre>
                <pre>banana</pre>
                <pre>&gt;&gt;&gt; print(tuple[-1])</pre>
                <pre>kiwi</pre>
                <pre>&gt;&gt;&gt; print(tuple[-3:-1])</pre>
                <pre>('cherry', 'orange')</pre>

                <b>修改元组元素</b>
                <div>元组中的元素值是不允许修改的，但可以对整个元组变量重新赋值。如：</div>
                <pre>&gt;&gt;&gt; tup = (12, 34.56) </pre>
                <pre>&gt;&gt;&gt; tup = ('abc', 'xyz') </pre>
                <pre># 以下修改元组元素操作是非法的，系统将报错。</pre>
                <pre># tup[0] = 100 </pre>
                <pre>TypeError: 'tuple' object does not support item assignment</pre>
                <b>删除元祖</b>
                <div>可以使用del语句来删除整个元组</div>
                <pre>&gt;&gt;&gt; tup = ("apple", "banana", "cherry")</pre>
                <pre>&gt;&gt;&gt; del tup</pre>
                <pre># 以下会引发错误，因为元组已不存在。</pre>
                <pre>#print(tup)</pre>
                <pre>NameError: name 'tup' is not defined</pre>

                <b>元祖相关函数</b>
                <table className="table mb-0">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="border-0">
                                Python表达式
                        </th>
                            <th scope="col" className="border-0">
                                结果
                        </th>
                            <th scope="col" className="border-0">
                                描述
                        </th>
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
                            <td>for x in (1, 2, 3):<br />&nbsp;&nbsp;&nbsp;&npsp;print x,</td>
                            <td>1 2 3</td>
                            <td>遍历元祖元素</td>
                        </tr>
                    </tbody>
                </table>

            </Col>
        </Row>
        <Row noGutters className="page-header py-4">
            <Col md="12" className="form-group">
                <h3>测试</h3>
                <form id="testForm">
                    <label htmlFor="feFirstName">1. 列表List值为[1,2,3,4,5,6,7,8]，则切片List[2:5]得到的值是（ ）。</label>
                    <p>
                        <div>
                            <input type="radio" name="problem_1" value="A" /> A. [2,3,4,5]
                        </div>
                        <div>
                            <input type="radio" name="problem_1" value="B" /> B. [2,3,4]
                        </div>
                        <div>
                            <input type="radio" name="problem_1" value="C" /> C. [3,4,5,6]
                        </div>
                        <div>
                            <input type="radio" name="problem_1" value="D" /> D. [3,4,5]]
                        </div>
                    </p>
                    <label htmlFor="feFirstName">2. 表达式（1，2，3）* 3的执行结果是（ ）。</label>
                    <p>
                        <div>
                            <input type="radio" name="problem_2" value="A" /> A. (1，2，3，1，2，3，1，2，3)
                        </div>
                        <div>
                            <input type="radio" name="problem_2" value="B" /> B. (1，1，1，2，2，2，3，3，3)
                        </div>
                        <div>
                            <input type="radio" name="problem_2" value="C" /> C. ((1，2，3), (1，2，3), (1，2，3))
                        </div>
                    </p>
                    <label htmlFor="feFirstName">3. 已知x=[1，2，3，2，3]，执行语句x.pop()之后，x的值为（  ）。</label>
                    <p>
                        <div>
                            <input type="radio" name="problem_3" value="A" /> A. [1,2,3,2]
                        </div>
                        <div>
                            <input type="radio" name="problem_3" value="B" /> B. [2,3,2,3]
                        </div>
                        <div>
                            <input type="radio" name="problem_3" value="C" /> C. [1,2,3]
                        </div>
                    </p>
                </form>
            </Col>
        </Row>
    </Fragment>
)