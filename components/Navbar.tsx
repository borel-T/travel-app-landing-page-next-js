import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav
      className="flexBetween max-container
    padding-container relative z-30 py-2"
    >
      {/* brand-name */}
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} width={74} height={29} alt="logo" />
      </Link>
      {/* nav-links */}
      <ul className="hidden h-full gap-12 lg:flex mx-auto">
        {NAV_LINKS.map((item, key) => (
          <Link
            key={item.key}
            href={item.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 
            transition-all hover:font-bold"
          >
            {item.label}
          </Link>
        ))}
      </ul>
      {/* login */}
      <div className="lg:flexCenter hidden">
        <Button type="button" title="LOGIN" variant="btn_green" />
      </div>
      {/* hamburger */}
      <button>
        <Image
          src={"/menu.svg"}
          alt="menu"
          height={32}
          width={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </button>
    </nav>
  );
};

export default Navbar;
