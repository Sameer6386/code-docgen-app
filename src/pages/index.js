// pages/index.js
import { useState } from "react";
import axios from "axios";
import CodeEditor from "../components/CodeEditor";
import ActionButtons from "../components/ActionButtons";
import OutputDisplay from "../components/OutputDisplay";
import ErrorMessage from "../components/ErrorMessage";
import LoadingIndicator from "../components/LoadingIndicator";

export default function Home() {
  const [code, setCode] = useState("// Write your JavaScript code here...");
  const [output, setOutput] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateDocs = async () => {
    setLoading(true);
    setError("");
    setDocumentation("");

    try {
      const response = await axios.post("/api/generateDocs", { code });
      setDocumentation(response.data.docs);
    } catch (err) {
      setError("Error generating documentation.");
    } finally {
      setLoading(false);
    }
  };

  const handleDebugCode = async () => {
    setLoading(true);
    setError("");
    setOutput("");

    try {
      const response = await axios.post("/api/execute", { code });
      setOutput(response.data.result);
    } catch (err) {
      setError("Error executing code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Code Documentation & Debugger
      </h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Code Editor */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Code Editor</h2>
          <CodeEditor value={code} onChange={(newValue) => setCode(newValue)} />
        </div>
        {/* Actions & Output */}
        <div className="flex-1">
          {/* Action Buttons */}
          <ActionButtons
            onGenerateDocs={handleGenerateDocs}
            onDebugCode={handleDebugCode}
            loading={loading}
          />
          {/* Error Message */}
          <ErrorMessage message={error} />
          {/* Output Display */}
          {loading && <LoadingIndicator />}
          <OutputDisplay title="Output" content={output} loading={loading} />
          <OutputDisplay
            title="Documentation"
            content={documentation}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
