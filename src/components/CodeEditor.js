// components/CodeEditor.js
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = ({ value, onChange }) => {
  return (
    <div className="border-2 border-gray-200 rounded-lg shadow-lg">
      <MonacoEditor
        height="400px"
        language="javascript"
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{
          selectOnLineNumbers: true,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default CodeEditor;
