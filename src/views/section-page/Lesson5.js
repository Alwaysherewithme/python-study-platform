import React, { Fragment } from "react";
import {
  Col, Row
} from "shards-react";

export const Lesson5 = () => (
  <Fragment>
    <Row className="page-header py-4">
      <Col>
        <h3>5.  Python 运算符</h3>
        <h4>5.1  Python 算术运算符</h4>
        <div>算术运算符与数值一起使用来执行常见的数学运算：</div>
        <table className="table mb-0">
          <thead className="bg-light">
            <tr>
              <th scope="col" className="border-0">运算符</th>
              <th scope="col" className="border-0">名称</th>
              <th scope="col" className="border-0">实例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>+</td>
              <td>加</td>
              <td>x + y</td>
            </tr>
            <tr>
              <td>-</td>
              <td>减</td>
              <td>x - y</td>
            </tr>
            <tr>
              <td>*</td>
              <td>乘</td>
              <td>x * y</td>
            </tr>
            <tr>
              <td>/</td>
              <td>除</td>
              <td>x / y</td>
            </tr>
            <tr>
              <td>%</td>
              <td>取模</td>
              <td>x % y</td>
            </tr>
            <tr>
              <td>**</td>
              <td>幂</td>
              <td>x ** y</td>
            </tr>
            <tr>
              <td>//</td>
              <td>取整数</td>
              <td>x // y</td>
            </tr>
          </tbody>
        </table>
        <p></p>
        <h4>5.2  Python 比较运算符</h4>
        <div>比较运算符用于比较两个值：</div>
        <table className="table mb-0">
          <thead className="bg-light">
            <tr>
              <th scope="col" className="border-0">运算符</th>
              <th scope="col" className="border-0">名称</th>
              <th scope="col" className="border-0">实例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>==</td>
              <td>等于</td>
              <td>x == y</td>
            </tr>
            <tr>
              <td>!=</td>
              <td>不等于</td>
              <td>x != y</td>
            </tr>
            <tr>
            <td>{'>'}</td>
              <td>大于</td>
              <td>{'x > y'}</td>
            </tr>
            <tr>
                <td>{'<'}</td>
              <td>小于</td>
              <td>{'x < y'}</td>
            </tr>
            <tr>
                <td>{'>='}</td>
              <td>大于或等于</td>
              <td>{'x >= y'}</td>
            </tr>
            <tr>
                <td>{'<='}</td>
              <td>小于或等于</td>
              <td>{'x <= y'}</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <h4>5.3  Python 逻辑运算符</h4>
        <div>逻辑运算符用于组合条件语句：</div>
        <table className="table mb-0">
          <thead className="bg-light">
            <tr>
              <th scope="col" className="border-0">运算符</th>
              <th scope="col" className="border-0">描述</th>
              <th scope="col" className="border-0">实例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>and</td>
              <td>如果两个语句都为真，则返回 True。如果and的两边都是数字如 x and y，则 x 为真就是 y, x 为假就是 y。</td>
              <td>{'x > 3 and x < 10'}</td>
            </tr>
            <tr>
              <td>or</td>
              <td>如果其中一个语句为真，则返回 True。如果or的两边都是数字如 x or y，则 x 为真就是 x（无需判断 y）, x 为假就是 y。</td>
              <td>{'x > 3 or x < 4'}</td>
            </tr>
            <tr>
                <td>not</td>
              <td>反转结果，如果结果为 True，则返回 False</td>
              <td>{'not(x > 3 and x < 10)'}</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <h4>5.4  Python 身份运算符</h4>
        <div>身份运算符用于比较对象，不是比较它们是否相等，但如果它们实际上是同一个对象，则具有相同的内存位置：</div>
        <table className="table mb-0">
          <thead className="bg-light">
            <tr>
              <th scope="col" className="border-0">运算符</th>
              <th scope="col" className="border-0">描述</th>
              <th scope="col" className="border-0">实例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>is</td>
              <td>如果两个变量是同一个对象，则返回 True。</td>
              <td>{'x is y'}</td>
            </tr>
            <tr>
              <td>is not</td>
              <td>如果两个变量不是同一个对象，则返回 True。</td>
              <td>{'x is not y'}</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <h4>5.5  Python 成员运算符</h4>
        <div>成员资格运算符用于检查序列是否在对象中出现：</div>
        <table className="table mb-0">
          <thead className="bg-light">
            <tr>
              <th scope="col" className="border-0">运算符</th>
              <th scope="col" className="border-0">描述</th>
              <th scope="col" className="border-0">实例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>in</td>
              <td>如果对象中存在具有指定值的序列，则返回 True。</td>
              <td>{'x in y'}</td>
            </tr>
            <tr>
              <td>not in</td>
              <td>如果对象中存在具有指定值的序列，则返回 True。</td>
              <td>{'x not in y'}</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <h4>5.6  Python 位运算符</h4>
        <div>位运算符用于比较（二进制）数字：</div>
        <table className="table mb-0">
          <thead className="bg-light">
            <tr>
              <th scope="col" className="border-0">运算符</th>
              <th scope="col" className="border-0">描述</th>
              <th scope="col" className="border-0">实例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{'&'}</td>
              <td>AND</td>
              <td>如果两个位均为 1，则将每个位设为 1。</td>
            </tr>
            <tr>
                <td>{'|'}</td>
              <td>OR</td>
              <td>如果两位中的一位为 1，则将每个位设为 1。</td>
            </tr>
            <tr>
              <td>{'^'}</td>
              <td>XOR</td>
              <td>如果两个位中只有一位为 1，则将每个位设为 1。</td>
            </tr>
            <tr>
                <td>{'~'}</td>
              <td>NOT</td>
              <td>反转所有位。</td>
            </tr>
            <tr>
              <td>{'<<'}</td>
              <td>Zero fill left shift</td>
              <td>通过从右侧推入零来向左移动，推掉最左边的位。</td>
            </tr>
            <tr>
                <td>{'>>'}</td>
              <td>Signed right shift</td>
              <td>通过从左侧推入最左边的位的副本向右移动，推掉最右边的位。</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
    <Row className="page-header py-4">
      <Col>
        <h3>小测试</h3>
        <form id="testForm">
          <label>1.  Python 运算符中用来取整除的是（  ）。</label>
          <div>
              <input type="radio" name="problem_1" value="A" /> A. /
          </div>
          <div>
            <input type="radio" name="problem_1" value="B" /> B. //
          </div>
          <div>
            <input type="radio" name="problem_1" value="C" /> C. %
          </div>
          <div>
            <input type="radio" name="problem_1" value="D" /> D. |
          </div>
          <p></p>
          <label>2.  表达式 3|5 的值为（  ）。</label>
          <div>
              <input type="radio" name="problem_2" value="A" /> A. 7
          </div>
          <div>
            <input type="radio" name="problem_2" value="B" /> B. 3
          </div>
          <div>
            <input type="radio" name="problem_2" value="C" /> C. True
          </div>
          <div>
            <input type="radio" name="problem_2" value="D" /> D. 1
          </div>
          <p></p>
          <label>3.  假设 n 为整数，那么表达式 n{'&'}1 == n%2 的值为（  ）。</label>
          <div>
            <input type="radio" name="problem_3" value="A" /> A. True
          </div>
          <div>
            <input type="radio" name="problem_3" value="B" /> B. False
          </div>
          <p></p>
        </form>
      </Col>
    </Row>
  </Fragment>
)





