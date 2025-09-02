import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Calendar from "@/assets/calendar.svg?react";

const CustomDatePicker = ({placeholder}) => {
  const [date, setDate] = useState(null);
  return (
    <div className="relative w-full">
      <DatePicker
        selected={date}
        onChange={(d) => setDate(d)}
        placeholderText={placeholder}
        className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px] p-2"
        wrapperClassName="w-full"
      />
      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default CustomDatePicker;
