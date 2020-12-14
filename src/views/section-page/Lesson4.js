import React, { Fragment } from "react";
import {
  Col, Row
} from "shards-react";

export const Lesson4 = () => (
  <Fragment>
    <Row className="page-header py-4">
      <Col>
        <h3>4.  Python 数字类型</h3>
        <h4>4.1  Python 数字类型</h4>
        <div>Python 主要有三种数字类型：</div>
        <ul>
          <li>int：整数。</li>
          <li>float：小数，也可以是带有“e”的科学数字，表示 10 的幂。</li>
          <li>complex：复数，复数用 "j" 作为虚部编写。</li>
        </ul>
        <div>为变量赋值时，将创建数值类型的变量。如：</div>
        <br />
        <pre>
          x = 10     # int<br />
          y = 6.3    # float<br />
          z = 2j     # complex
        </pre>
        <h4>4.2  Python数字类型转换</h4>
        <div>可以使用 int()、float() 和 complex() 方法从一种类型转换为另一种类型。如：</div>
        <pre>
          x = 10     # int<br />
          y = 6.3    # float<br />
          z = 1j     # complex<br />
          a = float(x)     # 把整数转换为浮点数<br />
          b = int(y)       # 把浮点数转换为整数<br />
          c = complex(x)   # 把整数转换为复数
        </pre>
        <div>备注：无法将复数转换为其他数字类型。</div>
        <br />
        <h4>4.3  Python浮点数运算注意事项</h4>
        <div>Python 浮点数运算需要特别注意的是，其小数点尾数有时存在问题。如：</div>
        <pre>
          &gt;&gt;&gt; 0.1+0.2<br />
          0.30000000000000004<br />
          &gt;&gt;&gt; 0.1+0.2==0.3<br />
          False
        </pre>
        <div>为避免上述情况发生，请使用 round( ) 函数使用近似值。</div>
        <pre>
          &gt;&gt;&gt; round(0.1+0.2, 2)<br />
          0.3<br />
          &gt;&gt;&gt; round(0.1+0.2, 2)==0.3<br />
          True
        </pre>
        <br />
        <h4>4.4  数字格式化</h4>
        <div>str.format() 通过字符串中的花括号{'{}'}来识别替换字段，从而完成字符串的格式化。如：</div>
        <pre>
          &gt;&gt;&gt; print("{':.2f'}".format(3.1415926));<br />
          3.14
        </pre>
        <table className="table mb-0">
          <thead className="bg-light">
            <tr>
              <th scope="col" className="border-0">数字</th>
              <th scope="col" className="border-0">格式</th>
              <th scope="col" className="border-0">输出</th>
              <th scope="col" className="border-0">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3.1415926</td>
              <td>{':2f'}</td>
              <td>3.14</td>
              <td>保留小数点后两位</td>
            </tr>
            <tr>
              <td>-1</td>
              <td>{':+.2f'}</td>
              <td>-1.00</td>
              <td>带符号保留小数点后两位</td>
            </tr>
            <tr>
              <td>2.71828</td>
              <td>{':.0f'}</td>
              <td>3</td>
              <td>不带小数</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{':0>2d'}</td>
              <td>5xxx</td>
              <td>数字补零（填充左边，宽度为2）</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{':x<4d'}</td>
              <td>1,000,000</td>
              <td>数字补x (填充右边, 宽度为4)</td>
            </tr>
            <tr>
              <td>1000000</td>
              <td>{':,'}</td>
              <td>5xxx</td>
              <td>以逗号分隔的数字格式</td>
            </tr>
            <tr>
              <td>0.25</td>
              <td>{':.2%'}</td>
              <td>25.00%</td>
              <td>百分比格式</td>
            </tr>
            <tr>
              <td>1000000000</td>
              <td>{':.2e'}</td>
              <td>1.00E+09</td>
              <td>指数记法</td>
            </tr>
            <tr>
              <td>13</td>
              <td>{':>10d'}</td>
              <td>13</td>
              <td>右对齐 (默认, 宽度为10)</td>
            </tr>
            <tr>
              <td>13</td>
              <td>{':<10d'}</td>
              <td>13</td>
              <td>左对齐 (宽度为10)</td>
            </tr>
            <tr>
              <td>13</td>
              <td>{':^10d'}</td>
              <td>13</td>
              <td>中间对齐 (宽度为10)</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
    <Row className="page-header py-4">
      <Col>
        <h3>小测试</h3>
        <form id="testForm">
          <label>1.  0.6+0.7==1.3 的执行结果是（  ）。</label>
          <div>
            <input type="radio" name="problem_1" value="A" /> A. True
          </div>
          <div>
            <input type="radio" name="problem_1" value="B" /> B. False
          </div>
          <p></p>
          <label>2.  6+7==13 的执行结果是（  ）。</label>
          <div>
            <input type="radio" name="problem_2" value="A" /> A. True
          </div>
          <div>
            <input type="radio" name="problem_2" value="B" /> B. False
          </div>
          <p></p>
          <label>3.  int(3.66) =（  ）。</label>
          <div>
            <input type="radio" name="problem_3" value="A" /> A. 3
          </div>
          <div>
            <input type="radio" name="problem_3" value="B" /> B. 4
          </div>
          <div>
            <input type="radio" name="problem_3" value="C" /> C. 3.0
          </div>
          <div>
            <input type="radio" name="problem_3" value="D" /> C. 4.0
          </div>
          <p></p>
        </form>
      </Col>
    </Row>
  </Fragment>
)





