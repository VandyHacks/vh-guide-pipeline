import React from "react";
import { render } from "react-dom";
import ReactMarkdown from "react-markdown";
import md from "./pages/hacker-guide.md";

const transformImageUri = uri => {
  return uri;
};

const App = props => {
  return (
    <ReactMarkdown
      source={md}
      escapeHtml={false}
      transformImageUri={transformImageUri}
    />
  );
};

render(<App />, document.getElementById("content"));
