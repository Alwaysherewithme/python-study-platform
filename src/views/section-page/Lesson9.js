import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson9 = () => (
    <Fragment>
        <Row noGutters className="page-header py-4">
            <Col>
                <h3>9.	Python 集合</h3>
                <b>集合是什么</b>
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
                <table className="table mb-0">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="border-0">
                                集合相关函数
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
                            <td>set.add(x)</td>
                            <td>如果x不在集合set中，将x增加到set</td>
                            <td>
                                <pre>
                                    &gt;&gt;&gt; set.add("grape")
                                    &gt;&gt;&gt; print(set)
                                    &lbrace;'grape', 'cherry', apple', 'banana', &rbrace;
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>set.update([list])</td>
                            <td>将list中的多个元素添加到集合set中</td>
                            <td>
                                <pre>
                                    &gt;&gt;&gt; set.update(["lemon","orange"])<br />
                                &gt;&gt;&gt; print(set)<br />
                                &lbrace;'lemon', 'cherry', 'orange', 'banana', 'grape', 'apple'&rbrace;
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>set1.union(set2)</td>
                            <td>set1与set2联合，返回合并后的新的集合</td>
                            <td>
                                <pre>
                                    &gt;&gt;&gt; set1=&lbrace;"apple", "banana", "cherry"&rbrace;<br />
                                &gt;&gt;&gt; set2=&lbrace;"lemon","apple"*rbrace;<br />
                                &gt;&gt;&gt; set1.union(set2)<br />
                                &lbrace;'lemon', 'cherry', 'apple', 'banana'&rbrace;
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>set.discard(x)</td>
                            <td>移除set中元素x。如果x不在集合中，不报错。</td>
                            <td>
                                <pre>
                                    &gt;&gt;&gt; set.discard("grape")<br />
                                &gt;&gt;&gt; print(set)
                                &lbrace;'cherry', 'apple', 'banana'&rbrace;
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>set.remove(x)</td>
                            <td>移除set中元素x。如果x不在集合中，报错。</td>
                            <td>
                                &gt;&gt;&gt; set.remove("grape")   # 删除不存在的元素，系统将报错。
                            </td>
                        </tr>
                        <tr>
                            <td>set.clear()</td>
                            <td>清空set中所有元素</td>
                            <td>
                                &gt;&gt;&gt; set.clear()<br />
                                &gt;&gt;&gt; print(set)   # set()<br />
                            </td>
                        </tr>
                        <tr>
                            <td>set.copy()</td>
                            <td>返回集合的一个副本</td>
                            <td>
                                &gt;&gt;&gt; set_copy = set.copy()<br />
                                &gt;&gt;&gt; print(set_copy)<br />
                                &lbrace;'cherry', 'apple', 'banana'&rbrace;
                            </td>
                        </tr>
                        <tr>
                            <td>len(set)</td>
                            <td>返回集合set的元素个数</td>
                            <td>
                                &gt;&gt;&gt; len(set)   # 3
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p></p>
                <b>集合操作符</b>
                <table className="table mb-0">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="border-0">
                                集合操作符
                        </th>
                            <th scope="col" className="border-0">
                                描述
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S|T</td>
                            <td>并，返回一个新集合，包括在集合S和T中的所有元素</td>
                        </tr>
                        <tr>
                            <td>S-T</td>
                            <td>差，返回一个新集合，包括在集合S但不在T中的元素</td>
                        </tr>
                        <tr>
                            <td>S{'&'}T</td>
                            <td>交，返回一个新集合，包括同时在集合S和T中的元素</td>
                        </tr>
                        <tr>
                            <td>S^T</td>
                            <td>补，返回一个新集合，包括集合S和T中的非相同元素</td>
                        </tr>
                        <tr>
                            <td>{'S<=T或S<T'}</td>
                            <td>返回True/False，判断S和T的子集关系。</td>
                        </tr>
                        <tr>
                            <td>{'S>=T或S>T'}</td>
                            <td>返回True/False，判断S和T的包含关系</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
        <Row noGutters className="page-header py-4">
            <Col md="12" className="form-group">
                <h3>测试</h3>
                <form id="testForm">
                    <label htmlFor="feFirstName">1. 表达式{1, 2, 3, 4}-{3, 4, 5, 6}的值为（  ）。</label>
                    <p>
                        <div>
                            <input type="radio" name="problem_1" value="A" /> A. {'{1,2,5,6}'}
                        </div>
                        <div>
                            <input type="radio" name="problem_1" value="B" /> B. {'{3,4}'}
                        </div>
                        <div>
                            <input type="radio" name="problem_1" value="C" /> C. {'{1,2}'}
                        </div>
                    </p>
                    <label htmlFor="feFirstName">2. 表达式{'{1,2,3,4}|{3,4,5,6}'}的值有（ ）个元素。</label>
                    <p>
                        <div>
                            <input type="radio" name="problem_2" value="A" /> A. 4
                        </div>
                        <div>
                            <input type="radio" name="problem_2" value="B" /> B. 6
                        </div>
                        <div>
                            <input type="radio" name="problem_2" value="C" /> C. 8
                        </div>
                    </p>
                    <label htmlFor="feFirstName">3. 表达式{'{1,2,3,4}&{3,4,5,6}'}的值有（ ）个元素。</label>
                    <p>
                        <div>
                            <input type="radio" name="problem_3" value="A" /> A. 1
                        </div>
                        <div>
                            <input type="radio" name="problem_3" value="B" /> B. 2
                        </div>
                        <div>
                            <input type="radio" name="problem_3" value="C" /> C. 4
                        </div>
                    </p>
                </form>
            </Col>
        </Row>
    </Fragment>
)