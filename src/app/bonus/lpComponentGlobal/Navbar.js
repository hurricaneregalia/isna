import Image from "next/image";
import Link from "next/link";

export default function Navbar({ brandName = "BrandName", navBarBg = "bg-base-100", navBarCssStyle }) {
  return (
    <div className={`navbar ${navBarBg} shadow-md text-center ${navBarCssStyle}`}>
      <div className="mx-auto">
        <Link href="/" className="text-xl font-bold flex gap-1 items-center capitalize">
          <Image src="/images/uploads/site-identity/logo-dark.svg" alt="logo" width={20} height={20} className="w-5 h-5" />
          {brandName}
        </Link>
      </div>
    </div>
  );
}
