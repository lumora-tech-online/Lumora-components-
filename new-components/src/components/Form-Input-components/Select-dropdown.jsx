// components/SelectInput.jsx
const SelectInput = ({ label, options, ...props }) => {
  return (
    <div className="mb-4 w-full">
      {label && <label className="block text-gray-700 font-medium mb-1">{label}</label>}
      <select
        {...props}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
      >
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectInput;
