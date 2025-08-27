import { CheckCircle } from "lucide-react";

const Success = ({ message = "Action completed successfully!" }) => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-md w-full text-center shadow-md">
        <CheckCircle className="mx-auto text-green-500 mb-3" size={48} />
        <h2 className="text-xl font-semibold text-green-700 mb-2">Success!</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default Success;
