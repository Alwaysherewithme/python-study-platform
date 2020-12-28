import React from "react";
import { Container, Button } from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
      <h2>404</h2>
        <h3>出错啦！</h3>
        <p>十分抱歉，此部分暂无内容。</p>
        <Button pill onClick={e => returnBack(e)}>&larr; 返回</Button>
      </div>
    </div>
  </Container>
);

const returnBack = e => {
  e.preventDefault();
  window.history.back()
}

export default Errors;
