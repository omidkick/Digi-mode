import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="E-commerce shop"
        width={36}
        height={36}
        className="w-8 h-8 md:w-9 md:h-9"
      />

      <p className="hidden md:block text-lg xl:text-2xl font-black tracking-widest self-end text-orange-500">
        دیجی مُد
      </p>
    </Link>
  );
};

export default Logo;
