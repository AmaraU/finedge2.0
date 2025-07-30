import React from "react";

const LabelValue = ({ label, firstName, lastName }) => {
  return (
    <div className="flex  font-medium text-[14px] gap-2">
      <div className="text-[#64748B]">
        {label.split(" ").map((word, i, arr) => {
          const isLast = i === arr.length - 1;
          return (
            <span key={i} className="block">
              {isLast ? `${word}:` : word}
            </span>
          );
        })}
      </div> 

      <div className="flex flex-col justify-center">
        <p className="text-[#1E293B]">{firstName}</p>
        <p className="text-[#1E293B]">{lastName}</p>
      </div>
    </div>
  );
};

export default LabelValue;
