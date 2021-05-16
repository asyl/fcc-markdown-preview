import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Toolbar from "./components/Toolbar";

function App() {
  const [markdown, setMarkdown] = useState(placeholder);
  const [editorMaximized, setEditorMaximized] = useState(false);
  const [previewMaximized, setPreviewMaximized] = useState(false);

  const handleEditorMaximize = () => {
    setEditorMaximized((editorMaximized) => !editorMaximized);
  };

  const handlePreviewMaximize = () => {
    setPreviewMaximized((previewMaximized) => !previewMaximized);
  };

  let editorState = "editorWrap";
  let previewState = "previewWrap";
  let expandState = "fa fa-arrows-alt";

  if (editorMaximized) {
    editorState = "editorWrap maximized";
    previewState = "previewWrap hide";
    expandState = "fa fa-compress";
  } else if (previewMaximized) {
    editorState = "editorWrap hide";
    previewState = "previewWrap maximized";
    expandState = "fa fa-compress";
  }

  return (
    <div>
      <div className={editorState}>
        <Toolbar
          text="Editor"
          icon={expandState}
          onClick={handleEditorMaximize}
        />
        <Editor markdown={markdown} onMarkdownChange={setMarkdown} />
      </div>
      <div className={previewState}>
        <Toolbar
          text="Preview"
          icon={expandState}
          onClick={handlePreviewMaximize}
        />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
