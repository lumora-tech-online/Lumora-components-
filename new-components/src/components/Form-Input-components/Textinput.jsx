// components/TextInput.jsx
const TextInput = ({ label, helperText, error, ...props }) => {
  return (
    <div className="mb-4 w-full">
      {label && <label className="block text-gray-700 font-medium mb-1">{label}</label>}
      <input
        {...props}
        className={`w-full px-4 py-2 rounded-lg border focus:outline-none 
          ${error ? "border-red-500" : "border-gray-300"} 
          focus:ring-2 focus:ring-blue-600`}
      />
      {helperText && !error && <p className="text-sm text-gray-500 mt-1">{helperText}</p>}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};
export default TextInput;
