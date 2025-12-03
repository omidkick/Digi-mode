import Link from "next/link";
import { Bell, Home, ShoppingCart } from "lucide-react";
import { convertToPersianDigits } from "@/utils/toPersianNumbers";

const NavLinks = () => {
  const links = [
    { href: "/", icon: Home, label: "خانه" },
    { href: "/notifications", icon: Bell, label: "اعلان‌ها", badge: 3 },
    { href: "/cart", icon: ShoppingCart, label: "سبد خرید", badge: 2 },
  ];

  return (
    <div className="flex items-center gap-3 lg:gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative group"
          aria-label={link.label}
        >
          <div className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <link.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-orange-500 transition-colors" />
          </div>

          {/* Badge for notifications/cart */}
          {link.badge && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {convertToPersianDigits(link.badge)}
            </span>
          )}

          {/* Tooltip */}
          <span className="hidden lg:block absolute top-full mt-2 right-1/2 transform translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
