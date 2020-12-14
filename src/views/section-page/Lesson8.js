import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson8 = () => (
    <Fragment>
        <Row noGutters className="page-header py-4">
            <Col>
                <h3>8.	Python字典</h3>
                <b>字典含义及格式</b>
                <div>在python中，字典是一系列键-值对。每个键都与一个值相关联。每个键-值对内部key：value用冒号分割，键值对与键值对之间用逗号分割，整个字典包括在花括号&lbrace;&rbrace;中。如：</div>
                <pre>dict = &lbrace;'Alice': '2341', 'Beth': '9102', 'Cecil': '3258'&rbrace;</pre>
                <pre>dict = &lbrace;&rbrace;   # 创建空字典，可与下面的“添加字典的键-值对”搭配使用</pre>
                <div>注意：字典里不允许同一个键出现两次。创建时如果同一个键被赋值两次，则后一个值会覆盖前一个值。</div>

<pre>&gt;&gt;&gt; dict = &lbrace;'Name': 'Zara', 'Age': 7, 'Name': 'Tom'&rbrace; </pre>
<pre>&gt;&gt;&gt; print(dict['Name'])</pre>
<pre>Tom</pre>

<b>访问字典中的值</b>
<div>要获取与键（key）相关的值（value），可指定字典名和放在方括号内的键，如：</div>
<pre>&gt;&gt;&gt; dict = &lbrace;'Name': 'Zara', 'Age': 7, 'Class': 'First'&rbrace;</pre>
<pre>&gt;&gt;&gt; print("dict['Name']: ", dict['Name'])</pre>
<pre>dict['Name']:  Zara</pre>

<b>修改字典中的值</b>
<div>要修改字典中的值，可依次指定字典名、用方括号括起的键以及与该键关联的新值。如：</div>
<pre>&gt;&gt;&gt; dict = &lbrace;'Name': 'Zara', 'Age': 7, 'Class': 1&rbrace;</pre>
<pre>&gt;&gt;&gt; dict['Age'] = 8     # 更新</pre>
<pre>&gt;&gt;&gt; print("dict['Age']: ", dict['Age'])</pre>
<pre>dict['Age']:  8</pre>

<b>添加字典的键-值对</b>
<div>字典是一种动态结构，可随时在其中添加键-值对。要添加键-值对，可依次指定字典名、用方括号括起的键，赋值相关联的值。如：</div>
<pre>&gt;&gt;&gt; dict = &lbrace;'Name': 'Zara', 'Age': 7, 'Class': 1&rbrace;</pre>
<pre>&gt;&gt;&gt; dict['Grade'] = 1     # 添加键-值对</pre>
<pre>&gt;&gt;&gt; print(dict)</pre>
<pre>&lbrace;'Name': 'Zara', 'Age': 7, 'Class': 1, 'Grade': 1&rbrace;</pre>

<b>清空字典</b>
<div>可使用clear语句清空字典：</div>
<pre>&gt;&gt;&gt; dict = &lbrace;'Name': 'Zara', 'Age': 7, 'Class': 1&rbrace;</pre>
<pre>&gt;&gt;&gt; dict.clear()   # 清空字典</pre>
<pre>&gt;&gt;&gt; print(dict)</pre>
<pre>&lbrace;&rbrace;</pre>

<b>删除字典的键-值对或整个字典</b>
<div>可使用del语句，指定字典名和要删除的键，删除相应的键-值对。如：</div>
<pre>&gt;&gt;&gt; dict = &lbrace;'Name': 'Zara', 'Age': 7, 'Class': 1&rbrace;</pre>
<pre>&gt;&gt;&gt; del dict['Class']     # 删除键-值对</pre>
<pre>&gt;&gt;&gt; print(dict)</pre>
<pre>&lbrace;'Name': 'Zara', 'Age': 7&rbrace;</pre>

<b>使用del语句，指定字典名，可删除整个字典。</b>
<pre>&gt;&gt;&gt; del dict   # 删除整个字典</pre>
<pre>&gt;&gt;&gt; print(dict)   # 会导致错误，因为dict不再存在</pre>

<b>字典内置函数</b>
<div>以dict = &lbrace;'Name': 'Zara', 'Age': 7, 'Class': 1&rbrace;为例：</div>

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
                            <td>len(dict)</td>
                            <td>计算字典键-值对个数，即键的总数。</td>
                            <td>&gt;&gt;&gt; len(dict)   # 3</td>
                        </tr>
                        <tr>
                            <td>dict.copy()</td>
                            <td>返回一个字典的副本。<br/>注意：不可通过键入dict2 = dict1来复制字典，因为dict2只是对dict1的引用，而dict1中的更改也将自动在dict2中进行。</td>
                            <td>
                                &gt;&gt;&gt; dict_copy=dict<br/>
                                &gt;&gt;&gt; del dict['Class']<br/>
                                &gt;&gt;&gt; print(dict_copy)<br/>
                                &lbrace;'Name': 'Zara', 'Age': 7&rbrace;
                            </td>
                        </tr>
                        <tr>
                            <td>dict.fromkeys(seq[, val])</td>
                            <td>创建新字典，以序列seq中元素做字典的键，val为字典所有键对应的初始值</td>
                            <td>
                                &gt;&gt;&gt; seq=[ 'Tom', 'Jerry']<br/>
                                &gt;&gt;&gt; thisdict=dict.fromkeys(seq,10)<br/>
                                &gt;&gt;&gt; print(thisdict)<br/>
                                &lbrace;'Tom': 10, 'Jerry': 10&rbrace;
                            </td>
                        </tr>
                        <tr>
                            <td>dict.get(key, default=None)</td>
                            <td>返回指定键的值，若键不在字典中返回default设定的值</td>
                            <td>
                                &gt;&gt;&gt; dict.get('Class', 2)   # 1<br/>
                                &gt;&gt;&gt; dict.get('Grade', 2)   # 2
                            </td>
                        </tr>
                        <tr>
                            <td>dict.setdefault(key,default=None)</td>
                            <td>返回指定键的值，若键不在字典中，则添加键并将值设为default设定的值</td>
                            <td>
                                &gt;&gt;&gt; grade= dict.setdefault ('Grade', 2)<br/>
                                &gt;&gt;&gt; print(dict)<br/>
                                &lbrace;'Name': 'Zara', 'Age': 7, 'Class': 1, 'Grade': 2&rbrace;
                            </td>
                        </tr>
                        <tr>
                            <td>dict.items()</td>
                            <td>以列表返回可遍历的键-值对</td>
                            <td>
                                &gt;&gt;&gt; dict.items()<br/>
                                dict_items([('Name', 'Zara'), ('Age', 7), ('Class', 1)])
                            </td>
                        </tr>
                        <tr>
                            <td>dict.keys()</td>
                            <td>以列表返回字典的所有键</td>
                            <td>
                                &gt;&gt;&gt; dict.keys()<br/>
                                dict_keys(['Name', 'Age', 'Class'])
                            </td>
                        </tr>
                        <tr>
                            <td>dict.values()()</td>
                            <td>以列表返回字典的所有值</td>
                            <td>
                                &gt;&gt;&gt; dict.values()<br/>
                                dict_values(['Zara', 7, 1])
                            </td>
                        </tr>
                        <tr>
                            <td>dict.update(dict2)</td>
                            <td>把字典dict2的键/值对更新到dict里</td>
                            <td>
                                &gt;&gt;&gt; dict2= &lbrace;'Name': 'Tom', 'Grade': 1&lbrace;<br/>
                                &gt;&gt;&gt; dict.update(dict2)<br/>
                                &gt;&gt;&gt; print(dict)<br/>
                                &lbrace;'Name': 'Tom', 'Age': 7, 'Class': 1, 'Grade': 1&rbrace;
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p></p>
            </Col>
        </Row>
        <Row noGutters className="page-header py-4">
            <Col md="12" className="form-group">
                <h3>测试</h3>
                <form id="testForm">
                    <label htmlFor="feFirstName">1. 字典中多个元素之间使用（  ）分隔开，每个元素的键与值之间使用（  ）分隔开。（1）冒号  （2）逗号  （3）顿号</label>
                    <p>
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
                    </p>
                    <label htmlFor="feFirstName">2. 已知x=&lbrace;'a': 'b', 'c': 'd'&rbrace;，那么表达式'a'in x的值为。</label>
                    <p>
                        <div>
                            <input type="radio" name="problem_2" value="A" /> A. True
                        </div>
                        <div>
                            <input type="radio" name="problem_2" value="B" /> B. False
                        </div>
                    </p>
                    <label htmlFor="feFirstName">3. 已知x=&lbrace;'a': 'b', 'c': 'd'&rbrace;，那么表达式'b'in x的值为（  ）。</label>
                    <p>
                        <div>
                            <input type="radio" name="problem_3" value="A" /> A. True
                        </div>
                        <div>
                            <input type="radio" name="problem_3" value="B" /> B. False
                        </div>
                    </p>
                </form>
            </Col>
        </Row>
    </Fragment>
)