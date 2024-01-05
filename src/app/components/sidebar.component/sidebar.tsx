import SidebarItem from "../sidebar-item.component/sidebar-item";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-[200px] justify-start p-4 border-r-2 border-[#dfdfdf] shadow-md">
      <SidebarItem title={"Dashboard"} />
      <SidebarItem title={"Analytics"} />
    </div>
  );
}
