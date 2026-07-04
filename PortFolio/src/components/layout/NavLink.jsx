import { Link } from "react-scroll";

export default function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-90}
      duration={600}
      activeClass="active-link"
      className="
      group
      relative
      cursor-pointer
      px-2
      py-2
      text-[16px]
      font-medium
      text-[#444]
      transition-all
      duration-300
      hover:text-[#B98B43]
      "
    >
      <span>{children}</span>

      <span
        className="
        absolute
        left-0
        -bottom-1
        h-[2px]
        w-0
        bg-[#B98B43]
        transition-all
        duration-300
        group-hover:w-full
        "
      ></span>
    </Link>
  );
}