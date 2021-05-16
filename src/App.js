import { useState } from "react";
import Editor from "./components/Editor";
import Toolbar from "./components/Toolbar";

function App() {
  const [markdown, setMarkdown] = useState("")
  const [editorMaximized, setEditorMaximized] = useState(false)
  
  const handleEditorMaximize = () => {
    setEditorMaximized(editorMaximized => !editorMaximized)
  }

  let editorState = "editorWrap"
  let editorExpandState = "fa fa-arrows-alt"

  if (editorMaximized) {
    editorState = "editorWrap maximized"
    editorExpandState = "fa fa-compress"
  }

  return (
    <div>
      <div className={editorState}>
        <Toolbar text="Editor" icon={editorExpandState} onClick={handleEditorMaximize} />
        <Editor onMarkdownChange={setMarkdown} />
      </div>
    </div>
  );
}

export default App;
