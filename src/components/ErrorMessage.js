// components/ErrorMessage.js
const ErrorMessage = ({ message }) => {
  return (
    message && (
      <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
        <p>{message}</p>
      </div>
    )
  );
};

export default ErrorMessage;
