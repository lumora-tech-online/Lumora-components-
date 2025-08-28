// components/PasswordInput.jsx
import { useState } from "react";

const PasswordInput = ({ label, ...props }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4 w-full">
      {label && <label className="block text-gray-700 font-medium mb-1">{label}</label>}
      <div className="relative">
        <input
          {...props}
          type={show ? "text" : "password"}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-2 text-sm text-blue-600"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};
export default PasswordInput;
