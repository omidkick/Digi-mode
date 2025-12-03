import { LogIn } from "lucide-react";
import Link from "next/link";

const AuthButton = () => (
  <Link
    href="/login"
    className="flex items-center gap-2 bg-linear-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md text-sm"
  >
    <LogIn className="w-4 h-4" />
    <span className="hidden sm:inline">ورود/ثبت نام</span>
  </Link>
);
export default AuthButton;
