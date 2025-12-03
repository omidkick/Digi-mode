import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-md ring ring-gray-200 px-2 py-1 shadow-md">
      <Search className="w-4 h-4 text-gray-400" />
      <input
        type="text"
        id="search"
        placeholder="جستوجو..."
        className="text-sm outline-0 placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchBar;
