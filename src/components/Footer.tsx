import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0">
        {/* Logo and Copyright */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Logo />
          <p className="text-sm text-gray-400">© ۱۴۰۴ دیجی مد.</p>
          <p className="text-sm text-gray-400">تمامی حقوق محفوظ است.</p>
        </div>

        {/* Company Links */}
        <FooterSection title="شرکت">
          <FooterLink href="/about">درباره ما</FooterLink>
          <FooterLink href="/contact">تماس با ما</FooterLink>
          <FooterLink href="/blog">بلاگ</FooterLink>
          <FooterLink href="/affiliate">برنامه همکاری</FooterLink>
        </FooterSection>

        {/* Product Links */}
        <FooterSection title="محصولات">
          <FooterLink href="/products">همه محصولات</FooterLink>
          <FooterLink href="/new-arrivals">جدیدترین‌ها</FooterLink>
          <FooterLink href="/best-sellers">پرفروش‌ترین‌ها</FooterLink>
          <FooterLink href="/sale">تخفیف‌دار</FooterLink>
        </FooterSection>

        {/* Legal Links */}
        <FooterSection title="قوانین">
          <FooterLink href="/">صفحه اصلی</FooterLink>
          <FooterLink href="/terms">شرایط استفاده</FooterLink>
          <FooterLink href="/privacy">حریم خصوصی</FooterLink>
          <FooterLink href="/return-policy">قوانین بازگشت کالا</FooterLink>
        </FooterSection>
      </div>
    </footer>
  );
};

// Footer Section Component
const FooterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
    <p className="text-sm text-amber-50 font-semibold">{title}</p>
    {children}
  </div>
);

// Footer Link Component
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="hover:text-orange-400 transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Footer;
