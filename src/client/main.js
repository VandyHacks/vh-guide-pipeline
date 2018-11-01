import React from "react";
import { render } from "react-dom";
import ReactMarkdown from "react-markdown";
import "./css/main.css";
import hacker_md from "./pages/hacker-guide.md";
import mentor_md from "./pages/mentor-guide.md";

const transformImageUri = uri => {
  return uri;
};

const App = props => {
  return (
    <ReactMarkdown
      source={
        window.location.hostname === "mentor.vandyhacks.org"
          ? mentor_md
          : hacker_md
      }
      escapeHtml={false}
      transformImageUri={transformImageUri}
      linkTarget={(url, text, title) =>
        url.indexOf("#") > -1 ? undefined : "_blank"
      }
    />
  );
};

render(<App />, document.getElementById("content"));
