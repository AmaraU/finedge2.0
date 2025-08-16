const Box = ({ children }) => {
  return (
    <div className="bg-[#F6F8FA] px-[16px] pb-[16px] flex flex-col gap-[10px] max-w-[1212px]  ">
      <div className="border-[0.5px] border-[#CBD5E1]  overflow-y-auto bg-white rounded-[8px] rounded-tl-[0px]">
        {children}
      </div>
    </div>
  );
};

export default Box;
