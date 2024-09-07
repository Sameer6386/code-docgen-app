// components/OutputDisplay.js
const OutputDisplay = ({ title, content, loading }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md h-40 overflow-auto">
        <pre className="text-sm text-gray-700">
          {loading
            ? `${title.split(" ")[0]} in progress...`
            : content || `${title.split(" ")[0]} will appear here.`}
        </pre>
      </div>
    </div>
  );
};

export default OutputDisplay;
