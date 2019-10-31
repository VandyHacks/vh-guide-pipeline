/**
 *
 * Rendering pipeline from markdown --> React, shared by all .md file conversions.
 *
 */

import React from "react";
import { render } from "react-dom";
import ReactMarkdown from "react-markdown";

const transformImageUri = uri => {
  return uri;
};

const App = props => {
  return (
    <ReactMarkdown
      source={props.md}
      escapeHtml={false}
      transformImageUri={transformImageUri}
      linkTarget={(url, text, title) =>
        url.indexOf("#") > -1 ? undefined : "_blank"
      }
    />
  );
};

const renderApp = src =>
  render(<App md={src} />, document.getElementById("content"));

export { renderApp };
