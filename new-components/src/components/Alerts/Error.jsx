import { XCircle } from "lucide-react";

const Error = ({ message = "Something went wrong. Please try again." }) => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md w-full text-center shadow-md">
        <XCircle className="mx-auto text-red-500 mb-3" size={48} />
        <h2 className="text-xl font-semibold text-red-700 mb-2">Error</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default Error;
