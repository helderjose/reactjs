import React from "react";
import ReactDOM from "react-dom";
import Field from "./field";

ReactDOM.render(
<div style={{ border: "solid 1px #000" }}>
  <h3>index.jsx</h3>
  <Field initialValue="Teste" />
</div>, document.getElementById("app"));
