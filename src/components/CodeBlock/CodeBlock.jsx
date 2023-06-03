import React, { useState } from "react";
// import CodeEditor from "react-code-editor";

const CodeBlock = ({ code, language }) => {
  const [editorState, setEditorState] = useState({
    code,
    language,
  });

  const handleChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className="code-block">
      <CodeEditor
        editorState={editorState}
        onChange={handleChange}
        language={language}
      />
    </div>
  );
};

export default CodeBlock;
