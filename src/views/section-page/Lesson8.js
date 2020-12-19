import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson8 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h3>8.  Python字典</h3>
                <b>字典含义及格式</b>
                <div>在 python 中，字典是一系列键-值对。每个键都与一个值相关联。每个键-值对内部 key：value 用冒号分割，键值对与键值对之间用逗号分割，整个字典包括在花括号{'{}'}中。如：</div>
                <pre>dict = {"{'Alice': '2341', 'Beth': '9102', 'Cecil': '3258'}"}</pre>
                <pre>dict = {'{}'}   # 创建空字典，可与下面的“添加字典的键-值对”搭配使用</pre>
                <div>注意：字典里不允许同一个键出现两次。创建时如果同一个键被赋值两次，则后一个值会覆盖前一个值。</div>
                <pre>
                    {`
>>> dict = {"'Name': 'Zara', 'Age': 7, 'Name': 'Tom'"}
>>> print(dict['Name'])
Tom
                    `}
                </pre>

                <b>访问字典中的值</b>
                <div>要获取与键（key）相关的值（value），可指定字典名和放在方括号内的键，如：</div>
                <pre>
                    {`
>>> dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
>>> print("dict['Name']: ", dict['Name'])
dict['Name']:  Zara
                    `}
                </pre>

                <b>修改字典中的值</b>
                <div>要修改字典中的值，可依次指定字典名、用方括号括起的键以及与该键关联的新值。如：</div>
                <pre>
                    {`
>>> dict = {'Name': 'Zara', 'Age': 7, 'Class': 1}
>>> dict['Age'] = 8     # 更新
>>> print("dict['Age']: ", dict['Age'])
dict['Age']:  8
                    `}
                </pre>

                <b>添加字典的键-值对</b>
                <div>字典是一种动态结构，可随时在其中添加键-值对。要添加键-值对，可依次指定字典名、用方括号括起的键，赋值相关联的值。如：</div>
                <pre>
                    {`
>>> dict = {'Name': 'Zara', 'Age': 7, 'Class': 1}
>>> print(dict)
>>> dict['Grade'] = 1     # 添加键-值对
{'Name': 'Zara', 'Age': 7, 'Class': 1, 'Grade': 1}
                    `}
                </pre>

                <b>清空字典</b>
                <div>可使用clear语句清空字典：</div>
                <pre>
                    {`
>>> dict = {'Name': 'Zara', 'Age': 7, 'Class': 1}
>>> dict.clear()   # 清空字典
>>> print(dict)
{}
                    `}
                </pre>

                <b>删除字典的键-值对或整个字典</b>
                <div>可使用 del 语句，指定字典名和要删除的键，删除相应的键-值对。如：</div>
                <pre>
                    {`
>>> dict = {'Name': 'Zara', 'Age': 7, 'Class': 1}
>>> del dict['Class']     # 删除键-值对
>>> print(dict)
{'Name': 'Zara', 'Age': 7}
                    `}
                </pre>

                <b>使用del语句，指定字典名，可删除整个字典。</b>
                <pre>
                    {`
>>> del dict   # 删除整个字典
>>> print(dict)   # 会导致错误，因为 dict 不再存在
                    `}
                </pre>

                <b>字典内置函数</b>
                <div>以 dict = {"{'Name': 'Zara', 'Age': 7, 'Class': 1}"}为例：</div>
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
                            <td>len(dict)</td>
                            <td>计算字典键-值对个数，即键的总数。</td>
                            <td>
                                <pre>
                                    len(dict)   # 3
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>dict.copy()</td>
                            <td>返回一个字典的副本。<br />注意：不可通过键入 dict2 = dict1 来复制字典，因为dict2只是对dict1的引用，而dict1中的更改也将自动在dict2中进行。</td>
                            <td>
                                <pre>
                                    {`
>>> dict_copy=dict
>>> del dict['Class']
>>> print(dict_copy)
{'Name': 'Zara', 'Age': 7}
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>dict.fromkeys(seq[, val])</td>
                            <td>创建新字典，以序列 seq 中元素做字典的键，val 为字典所有键对应的初始值</td>
                            <td>
                                <pre>
                                    {`
>>> seq=[ 'Tom', 'Jerry']
>>> thisdict=dict.fromkeys(seq,10)
>>> print(thisdict)
{Tom': 10, 'Jerry': 10}
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>dict.get(key, default=None)</td>
                            <td>返回指定键的值，若键不在字典中返回 default 设定的值</td>
                            <td>
                                <pre>
                                    {`
>>> dict.get('Class', 2)   # 1
>>> dict.get('Grade', 2)   # 2
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>dict.setdefault(key,default=None)</td>
                            <td>返回指定键的值，若键不在字典中，则添加键并将值设为 default 设定的值</td>
                            <td>
                                <pre>
                                    {`
>>> grade= dict.setdefault ('Grade', 2)
>>> print(dict)
{'Name': 'Zara', 'Age': 7, 'Class': 1, 'Grade': 2}
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>dict.items()</td>
                            <td>以列表返回可遍历的键-值对</td>
                            <td>
                                <pre>
                                    {`
>>> dict.items()
dict_items([('Name', 'Zara'), ('Age', 7), ('Class', 1)])
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>dict.keys()</td>
                            <td>以列表返回字典的所有键</td>
                            <td>
                                <pre>
                                    {`
>>> dict.keys()
dict_keys(['Name', 'Age', 'Class'])
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>dict.values()()</td>
                            <td>以列表返回字典的所有值</td>
                            <td>
                                <pre>
                                    {`
>>> dict.values()
dict_values(['Zara', 7, 1])
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>dict.update(dict2)</td>
                            <td>把字典 dict2 的键/值对更新到 dict 里</td>
                            <td>
                                <pre>
                                    {`
>>> dict2 = {'Name': 'Tom', 'Grade': 1}
>>> dict.update(dict2)
>>> print(dict)
{'Name': 'Tom', 'Age': 7, 'Class': 1, 'Grade': 1}
                                    `}
                                </pre>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
        <Row className="page-header py-4">
            <Col>
                <h3>小测试</h3>
                <form id="testForm">
                    <label>1.  字典中多个元素之间使用（  ）分隔开，每个元素的键与值之间使用（  ）分隔开。（1）冒号  （2）逗号  （3）顿号</label>
                    <div>
                        <input type="radio" name="problem_1" value="A" /> A. (1) … (2)
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="B" /> B. (2) … (1）
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="C" /> C. (3) … (1)
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="D" /> D. (1) … (3)
                    </div>
                    <p></p>
                    <label>2.  已知 x = {"{'a': 'b', 'c': 'd'}"}，那么表达式 'a' in x 的值为。</label>
                    <div>
                        <input type="radio" name="problem_2" value="A" /> A. True
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="B" /> B. False
                    </div>
                    <p></p>
                    <label>3.  已知 x = {"{'a': 'b', 'c': 'd'}"};，那么表达式 'b' in x 的值为（  ）。</label>
                    <div>
                        <input type="radio" name="problem_3" value="A" /> A. True
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="B" /> B. False
                    </div>
                </form>
            </Col>
        </Row>
    </Fragment>
)