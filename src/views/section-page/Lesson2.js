import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson2 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h3>2.  Python安装</h3>
                <div>许多 PC 和 Mac 都已经安装了 python。</div>
                <div>要检查是否已在 Windows PC 上安装了 python，请在开始栏中寻找 Python 或在命令行（cmd.exe）上运行以下命令：</div>
                <pre>C:\Users\Your Name&gt;python --version</pre>
                <div>要检查您是否在 Linux 或 Mac 上安装了 python，请在 Linux 上打开命令行或在 Mac 上打开终端并键入：</div>
                <pre>python –version</pre>
                <div>如果您发现计算机上没有安装 python，则可以从以下网站免费下载：</div>
                <a href="https://www.python.org/">https://www.python.org/</a>
            </Col>
        </Row>
        <Row className="page-header py-4">
            <Col>
                <h3>小测试</h3>
                <form id="testForm">
                    <label>1.  Mac机器上（  ）安装Python。</label>
                    <div>
                        <input type="radio" name="problem_1" value="A" /> A. 能
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="B" /> B. 不能
                    </div>
                    <p></p>
                    <label>2.  Windows PC上在命令行运行（  ）命令检查是否已安装 Python。</label>
                    <div>
                        <input type="radio" name="problem_2" value="A" /> A. node --version
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="B" /> B. python --version
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="C" /> C. java --help
                    </div>
                    <p></p>
                    <label>3.  Python 的官网是（  ）。</label>
                    <div>
                        <input type="radio" name="problem_3" value="A" /> A. www.python.com
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="B" /> B. www.sun.org
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="C" /> C. www.python.org
                    </div>
                </form>
            </Col>
        </Row>
    </Fragment>
)