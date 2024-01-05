import { FaRegCircleUser } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="flex justify-between items-center shadow-md p-2">
      <div className="company-logo font-bold text-lg ml-4 text-[#555]">
        LOGO
      </div>
      <div className="app-name text-lg font-semibold text-[#555]">
        Dashboard
      </div>
      <div className="user-image mr-4 text-[#555]">
        <FaRegCircleUser size={25} />
      </div>
    </div>
  );
}
