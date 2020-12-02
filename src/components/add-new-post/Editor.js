import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, FormInput, FormTextarea } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

// https://www.jianshu.com/p/0536fcb1543b

class Editor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: null,
      summary: null,
      content: ''
    };

    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image'],
        ['table'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
      ]
    };
    /*
    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];
    */
  }

  /*
  onTitleChange = (title) => {
    console.log(title, 'title');
    this.setState({
      title
    });
    this.props.receiveData(this.state.title);
  }

  onSummaryChange = (summary) => {
    console.log(summary, 'summary');
    this.setState({
      summary
    });
    this.props.receiveData(this.state.summary);
  }
  */

  onValueChange = (e, value) => {
    console.log(value, '--- title, summary value');
    console.log(e.target.value, 'e');
    e.preventDefault();
    switch (value) {
      case 'title':
        this.setState({
          title: e.target.value
        }, this.props.receiveData({
          title: e.target.value
        }));
        break
      case 'summary':
        this.setState({
          summary: e.target.value
        }, this.props.receiveData({
          summary: e.target.value
        }));
        break
      default:
        break
    }
  }

  onQuillChange = (value) => {
    console.log(value, '--- content value');
    this.setState({
      content: value
    });
    this.props.receiveData({ content: this.state.content });
  }

  render() {
    const { content } = this.state;

    return (
      <Card small className="mb-3">
        <CardBody>
          <div className="add-new-post">
            <FormInput
              size="lg"
              className="mb-3"
              placeholder="Title (<= 100 chars)"
              maxLength="100"
              onChange={e => this.onValueChange(e, 'title')} />
            <FormTextarea
              size="lg"
              className="mb-5"
              placeholder="Summary (<= 500 chars)"
              maxLength="500"
              onChange={e => this.onValueChange(e, 'summary')} />
            <ReactQuill
              value={content}
              theme="snow"
              modules={this.modules}
              // formats={this.formats}
              className="add-new-post__editor mb-1"
              onChange={this.onQuillChange} />
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default Editor;
