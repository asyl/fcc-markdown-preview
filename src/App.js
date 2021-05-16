import { useState } from "react";
import Editor from "./components/Editor";
import Toolbar from "./components/Toolbar";

function App() {
  const [markdown, setMarkdown] = useState("");
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
      </div>
    </div>
  );
}

export default App;
