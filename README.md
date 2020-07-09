# vh-hacker-guide
VandyHacks Summer Edition Hacker Guide

Markdown --> HTML rendering pipeline via Webpack!


Dev
---

Uses [React-markdown](https://github.com/rexxars/react-markdown).

- Edit markdown files in `./src/client/pages`
- Style shared css in `./src/client/css`

`./src/common.js` contains the rendering pipeline logic, shared by all .md file conversions.

All other `./src/*.js` are .md file-specific logic, usually just a path change.

```
npm i
npm run watch # hot-reload changes
```

Then open `public/index.html` or `mentor/index.html` in a browser!
