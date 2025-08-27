import { Info } from "lucide-react";

const InfoMessage = ({ message = "Here is some important information for you." }) => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-md w-full text-center shadow-md">
        <Info className="mx-auto text-blue-500 mb-3" size={48} />
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Information</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default InfoMessage;
