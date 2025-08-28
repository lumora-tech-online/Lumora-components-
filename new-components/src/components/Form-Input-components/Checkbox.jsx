// components/Checkbox.jsx
const Checkbox = ({ label, ...props }) => {
  return (
    <label className="flex items-center space-x-2 mb-3 cursor-pointer">
      <input type="checkbox" {...props} className="w-4 h-4 text-blue-600 rounded" />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};
export default Checkbox;



