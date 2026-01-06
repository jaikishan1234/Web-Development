/* eslint-disable no-unused-vars */
import {
  Tv,
  Home,
  Compass,
  Layers,
  Heart,
  Play,
  Clock,
  Folder,
  Download,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-full w-full p-3 overflow-hidden">
      {/* Inner rounded container */}
      <div className="h-full bg-[#141428] rounded-2xl px-4 py-5 flex flex-col">
        {/* Logo row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Tv size={22} strokeWidth={1.8} />
            <span className="text-sm font-semibold leading-none">Drameeo</span>
          </div>

          <ChevronLeft size={18} className="text-gray-500" />
        </div>

        {/* Primary nav */}
        <nav className="flex flex-col gap-1">
          <SidebarItem icon={Home} label="Home" active />
          <SidebarItem icon={Compass} label="Explore" />
          <SidebarItem icon={Layers} label="Genres" />
          <SidebarItem icon={Heart} label="Favourites" />
        </nav>

        <Divider />

        {/* Secondary nav */}
        <nav className="flex flex-col gap-1">
          <SidebarItem icon={Play} label="Continue Watching" subtle />
          <SidebarItem icon={Clock} label="Recently Added" subtle />
          <SidebarItem icon={Folder} label="My Collections" subtle />
          <SidebarItem icon={Download} label="Downloads" subtle />
        </nav>

        <Divider />

        {/* Settings */}
        <SidebarItem icon={Settings} label="Settings" subtle />

        {/* Logout */}
        <div className="mt-auto pt-4">
          <SidebarItem icon={LogOut} label="Logout" subtle />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, label, active, subtle }) => {
  return (
    <button
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition
        ${
          active
            ? "bg-purple-600/90 text-white"
            : subtle
            ? "text-gray-400 hover:text-white hover:bg-white/5"
            : "text-gray-300 hover:text-white hover:bg-white/10"
        }
      `}
    >
      <Icon size={18} strokeWidth={1.8} />
      <span>{label}</span>
    </button>
  );
};

const Divider = () => <div className="my-4 h-px bg-white/10" />;

export default Sidebar;
