type Props = {
  title: string;
};

export default function SidebarItem({ title }: Props) {
  return (
    <div className="sidebar-item my-1 p-1 font-medium rounded-xl cursor-pointer hover:bg-[#dfdfdf]">
      {title}
    </div>
  );
}
