import Link from "next/link";
import { HiOutlineArrowRightEndOnRectangle } from "react-icons/hi2";

const AuthButton = () => (
  <Link
    href="/login"
    className="flex items-center gap-2 bg-linear-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-2 md:px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md text-sm cursor-pointer"
  >
    <HiOutlineArrowRightEndOnRectangle className="w-5 h-5" />
    <span className="hidden sm:inline">ورود/ثبت نام</span>
  </Link>
);
export default AuthButton;
