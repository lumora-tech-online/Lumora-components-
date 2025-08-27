import { AlertTriangle } from "lucide-react";

const WarningMessage = ({ message = "Please be cautious. Something needs your attention." }) => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 max-w-md w-full text-center shadow-md">
        <AlertTriangle className="mx-auto text-yellow-500 mb-3" size={48} />
        <h2 className="text-xl font-semibold text-yellow-700 mb-2">Warning</h2>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default WarningMessage;
