// components/LoadingIndicator.js
const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingIndicator;
