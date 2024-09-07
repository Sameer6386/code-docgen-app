// components/ActionButtons.js
const ActionButtons = ({ onGenerateDocs, onDebugCode, loading }) => {
  return (
    <div className="flex gap-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={onGenerateDocs}
        disabled={loading}
      >
        {loading ? "Generating Docs..." : "Generate Documentation"}
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={onDebugCode}
        disabled={loading}
      >
        {loading ? "Debugging..." : "Debug Code"}
      </button>
    </div>
  );
};

export default ActionButtons;
