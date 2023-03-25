"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import {
  IoSettingsOutline,
  IoHomeOutline,
  IoCardOutline,
  IoBarChartOutline,
} from "react-icons/io5";

function Sidebar() {
  const segment = useSelectedLayoutSegment();
  return (
    <aside className="hidden space-y-10 text-xl px-3 pt-6 text-white md:flex md:flex-col">
      <button className="flex flex-col items-center">
        <IoHomeOutline />
        <p className="text-xs">Home</p>
      </button>
      <button className="flex flex-col items-center">
        <IoBarChartOutline />
        <p className="text-xs">Activity</p>
      </button>
      <button className="flex flex-col items-center">
        <IoCardOutline />
      </button>
      <button className="flex flex-col items-center">
        <IoSettingsOutline />
        <p className="text-xs">Settings</p>
      </button>
    </aside>
  );
}

export default Sidebar;
