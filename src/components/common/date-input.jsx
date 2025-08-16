// import { Calendar } from "lucide-react"; 
import { useState } from "react";

const DateInput = ({ label = "Start Date", required = false }) => {
  const [date, setDate] = useState("");

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 
                     focus:border-blue-500 focus:ring focus:ring-blue-100 
                     appearance-none"
        />
        {/* <Calendar
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        /> */}
      </div>
    </div>
  );
};

export default DateInput;
