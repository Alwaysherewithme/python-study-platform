import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson9 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h3>9.  Python 集合</h3>
                <b>集合是什么</b>
                <div>集合是多个元素的无序组合。每个元素唯一，不存在相同元素。</div>
                <div>集合使用大括号标识，并使用逗号分隔元素。</div>
                <div>为便于保证集合元素的唯一性，Python 规定集合的元素不可更改。</div>
                <p></p>

                <b>创建集合</b>
                <div>用{'{}'}或 set() 创建集合。若建立空集合，必须使用 set()</div>
                <pre>
                    {`
>>> B = {"python","C","C++"}
>>> print(B)
{'C++', 'C', 'python'}
                    `}
                </pre>
                <div>注释：集合是无序的，因此无法确定集合元素的显示顺序。</div>
                <pre>
                    {`
>>> D = {"python","C","C++","python"}   # 如果创建集合时有两个相同的元素 python
>>> print(D)
{'C++', 'C', 'python'}   # 创建好的集合只保留一个，保证元素互不相同
                    `}
                </pre>

                <b>集合相关函数</b>
                <div>以set = {'{"apple", "banana", "cherry"}'}为例：</div>
                <table className="table mb-0">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="border-0">集合相关函数</th>
                            <th scope="col" className="border-0">描述</th>
                            <th scope="col" className="border-0">实例</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>set.add(x)</td>
                            <td>如果 x 不在集合 set 中，将 x 增加到 set</td>
                            <td>
                                <pre>
                                    {`
>>> set.add("grape")
>>> print(set)
{grape', 'cherry', apple', 'banana'}
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>set.update([list])</td>
                            <td>将 list 中的多个元素添加到集合 set 中</td>
                            <td>
                                <pre>
                                    {`
>>> set.update(["lemon","orange"])
>>> print(set)
{'lemon', 'cherry', 'orange', 'banana', 'grape', 'apple'}
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>set1.union(set2)</td>
                            <td>set1 与 set2 联合，返回合并后的新的集合</td>
                            <td>
                                <pre>
                                    {`
>>> set1 = {"apple", "banana", "cherry"}
>>> set2 = {"lemon","apple"*rbrace;
>>> set1.union(set2)
{'lemon', 'cherry', 'apple', 'banana'}
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>set.discard(x)</td>
                            <td>移除 set 中元素 x。如果 x 不在集合中，不报错。</td>
                            <td>
                                <pre>
                                    {`
>>> set.discard("grape")
>>> print(set)
{'cherry', 'apple', 'banana'}
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>set.remove(x)</td>
                            <td>移除 set 中元素 x。如果 x 不在集合中，报错。</td>
                            <td>
                                <pre>
                                    {`
set.remove("grape")   # 删除不存在的元素，系统将报错。
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>set.clear()</td>
                            <td>清空 set 中所有元素</td>
                            <td>
                                <pre>
                                    {`
>>> set.clear()
>>> print(set)   # set()
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>set.copy()</td>
                            <td>返回集合的一个副本</td>
                            <td>
                                <pre>
                                    {`
>>> set_copy = set.copy()
>>> print(set_copy)
{'cherry', 'apple', 'banana'}
                                    `}
                                </pre>
                            </td>
                        </tr>
                        <tr>
                            <td>len(set)</td>
                            <td>返回集合 set 的元素个数</td>
                            <td>
                                <pre>
                                    {`
>>> len(set)   # 3
                                    `}
                                </pre>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p></p>

                <b>集合操作符</b>
                <table className="table mb-0">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="border-0">集合操作符</th>
                            <th scope="col" className="border-0">描述</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S|T</td>
                            <td>并，返回一个新集合，包括在集合 S 和 T 中的所有元素</td>
                        </tr>
                        <tr>
                            <td>S-T</td>
                            <td>差，返回一个新集合，包括在集合 S 但不在 T 中的元素</td>
                        </tr>
                        <tr>
                            <td>S{'&'}T</td>
                            <td>交，返回一个新集合，包括同时在集合 S 和 T 中的元素</td>
                        </tr>
                        <tr>
                            <td>S^T</td>
                            <td>补，返回一个新集合，包括集合 S 和 T 中的非相同元素</td>
                        </tr>
                        <tr>
                            <td>{'S<=T或S<T'}</td>
                            <td>返回 True/False，判断 S 和 T 的子集关系。</td>
                        </tr>
                        <tr>
                            <td>{'S>=T或S>T'}</td>
                            <td>返回 True/False，判断 S 和 T 的包含关系</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
        <Row className="page-header py-4">
            <Col>
                <h3>小测试</h3>
                <form id="testForm">
                    <label>1.  表达式{1, 2, 3, 4} - {3, 4, 5, 6}的值为（  ）。</label>
                    <div>
                        <input type="radio" name="problem_1" value="A" /> A. {'{1,2,5,6}'}
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="B" /> B. {'{3,4}'}
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="C" /> C. {'{1,2}'}
                    </div>
                    <p></p>
                    <label>2.  表达式{'{1,2,3,4} | {3,4,5,6}'}的值有（  ）个元素。</label>
                    <div>
                        <input type="radio" name="problem_2" value="A" /> A. 4
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="B" /> B. 6
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="C" /> C. 8
                    </div>
                    <p></p>
                    <label>3.  表达式{'{1,2,3,4} & {3,4,5,6}'}的值有（  ）个元素。</label>
                    <div>
                        <input type="radio" name="problem_3" value="A" /> A. 1
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="B" /> B. 2
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="C" /> C. 4
                    </div>
                </form>
            </Col>
        </Row>
    </Fragment>
)