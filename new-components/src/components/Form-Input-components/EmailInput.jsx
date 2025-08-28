// components/EmailInput.jsx
const EmailInput = ({ label, ...props }) => {
  return (
    <div className="mb-4 w-full">
      {label && <label className="block text-gray-700 font-medium mb-1">{label}</label>}
      <input
        {...props}
        type="email"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
        placeholder="you@example.com"
      />
    </div>
  );
};
export default EmailInput;
