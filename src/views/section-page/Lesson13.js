import React, { Fragment } from "react";
import {
    Col, Row
} from "shards-react";

export const Lesson13 = () => (
    <Fragment>
        <Row className="page-header py-4">
            <Col>
                <h3>13.  Python文件处理</h3>
                <h4>13.1  文件打开</h4>
                <div>使用 open() 函数打开文件。open() 函数有两个参数：文件名和模式。例如：f = open("demofile.txt")</div>
                <div>有六种打开文件的不同方法（模式）：</div>
                <ul>
                    <li>"r" - 读取 - 默认值。打开文件进行读取，如果文件不存在则报错。</li>
                    <li>"a" - 追加 - 打开供追加的文件，如果不存在则创建该文件。</li>
                    <li>"w" - 写入 - 打开文件进行写入，如果文件不存在则创建该文件。</li>
                    <li>"x" - 创建 - 创建指定的文件，如果文件存在则返回错误。</li>
                    <li>"t" - 文本 - 默认值。文本模式。</li>
                    <li>"b" - 二进制 - 二进制模式（例如图像）。</li>
                </ul>
                <p></p>

                <h4>13.2  文件读取</h4>
                <div>默认情况下，read() 方法读取整个文本，也可在read后的括号中指定读取的字符数。</div>
                <div>可以使用 readline() 方法读取一行。</div>
                <div>通过循环遍历文件中的行，可以逐行读取整个文件。</div>
                <div>备注：文件处理完成后，始终关闭文件 close() 是个好习惯。</div>
                <p>实例：</p>
                <div>
                    假设我们有以下名为 file.txt 的文件，位于与 Python 相同的文件夹中：<br />
                    登鹳雀楼<br />
                    白日依山尽，<br />
                    黄河入海流。<br />
                    欲穷千里目，<br />
                    更上一层楼。
                </div>
                <pre>
                    {`
>>> f = open("file.txt", "r")
>>> print(f.read())
登鹳雀楼
白日依山尽，
黄河入海流。
欲穷千里目，
更上一层楼。
>>> f = open("file.txt", "r")
>>> print(f.read(5))
登鹳雀楼
>>> print(f.readline())
白日依山尽，
>>> print(f.readline())
黄河入海流。
f.seek(0)   # 把阅读光标移到起始位置，从头开始读
>>> f = open("file.txt", "r")
>>> for x in f:
>>>	print(x)
                    `}
                </pre>
                <p>输出结果：</p>
                <pre>
                    {`
登鹳雀楼
白日依山尽，
黄河入海流。
欲穷千里目，
更上一层楼。
                    `}
                </pre>

                <h4>13.3  文件写入</h4>
                <div>如需写入已有的文件，须向 open() 函数添加参数：</div>
                <ul>
                    <li>"a" - 追加 - 会追加到文件的末尾</li>
                    <li>"w" –覆盖 - 会覆盖任何已有的内容</li>
                </ul>
                <p>实例:</p>
                <div>打开文件 "file.txt" 并将内容追加到文件中：</div>
                <pre>
                    {`
>>> f = open("file.txt", "a")   # 追加
>>> f.write("备注：这是唐代诗人王之涣的诗。")   # 追加写入内容
12
>>> f.close()
>>> f = open("file.txt", "r")
>>> print(f.read())
登鹳雀楼
白日依山尽，
黄河入海流。
欲穷千里目，
更上一层楼。
备注：这是唐代诗人王之涣的诗。
>>> f = open("file.txt", "w")   # 覆盖
>>> f.write("春眠不觉晓，处处闻啼鸟。")   # 覆盖写入的内容
12
>>> f.close()
>>> f = open("file.txt", "r")
>>> print(f.read())
春眠不觉晓，处处闻啼鸟。
                    `}
                </pre>
            </Col>
        </Row>
        <Row className="page-header py-4">
            <Col>
                <h3>小测试</h3>
                <form id="testForm">
                    <label>1.  判断对错：二进制文件不能使用记事本程序打开（  ）。</label>
                    <div>
                        <input type="radio" name="problem_1" value="A" /> A. 对
                    </div>
                    <div>
                        <input type="radio" name="problem_1" value="B" /> B. 错
                    </div>
                    <p></p>
                    <label>2.  判断对错：使用普通文本编辑器软件也可正常查看二进制文件的内容（  ）。</label>
                    <div>
                        <input type="radio" name="problem_2" value="A" /> A. 对
                    </div>
                    <div>
                        <input type="radio" name="problem_2" value="B" /> B. 错
                    </div>
                    <p></p>
                    <label>3.  判断对错：以 "a" 模式打开的文件无法进行读操作（  ）。</label>
                    <div>
                        <input type="radio" name="problem_3" value="A" /> A. 对
                    </div>
                    <div>
                        <input type="radio" name="problem_3" value="B" /> B. 错
                    </div>
                </form>
            </Col>
        </Row>
    </Fragment>
)