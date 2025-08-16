import searchIcon from "@/assets/search.svg";
import { cn } from "@/utils/utils";

const SearchInput = ({className}) => {
  return (
    <div className="relative">
      <input
        type="text"
        className={cn(
          "peer py-2.5 sm:py-3 pe-4 ps-11 block w-45 bg-[#F1F5F9] border border-gray-300 rounded-4xl sm:text-sm focus:border-blue-500 focus:ring-blue-500 placeholder-[#64748B] placeholder:font-medium",
          className
        )}
        placeholder="Search anything... "
      />

      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
        <img src={searchIcon} />
      </div>
    </div>
  );
};

export default SearchInput;
