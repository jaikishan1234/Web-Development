import { Search, Bell, User } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search for films, directors, or actors..."
          className="w-full bg-[#141428] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4 shrink-0">
        <button className="p-2 rounded-lg hover:bg-white/10 transition">
          <Bell size={20} />
        </button>

        <img
          src="https://i.pravatar.cc/100" // Random Avatar
          alt="User avatar"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default TopBar;
