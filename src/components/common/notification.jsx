import Bell from "@/assets/topbar/notifications.svg?react";

const Notification = ({ number }) => {
  return (
    <div className="flex gap-2 items-center">
      <Bell className="w-4 h-4" />
      <span className="flex items-center bg-[#EF4444] px-2 py-1 rounded-[45%] text-white text-[10px] font-medium">
        {number > 9 ? <p>9+</p> : <p>{number}</p>}
      </span>
    </div>
  );
};

export default Notification;
