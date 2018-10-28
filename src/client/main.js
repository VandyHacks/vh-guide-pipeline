import React from "react";
import { render } from "react-dom";
import ReactMarkdown from "react-markdown";
import md from "./pages/hacker-guide.md";

const App = props => {
  return <ReactMarkdown source={md} />;
};

render(<App />, document.getElementById("content"));
