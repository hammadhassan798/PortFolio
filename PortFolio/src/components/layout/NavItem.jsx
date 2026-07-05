import { Link } from "react-scroll";

export default function NavItem({ children, to, onClick }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-100}
      duration={700}
      activeClass="text-[#B98B43]"
      onClick={onClick}
      className="
        relative
        group
        cursor-pointer
        font-medium
        tracking-wide
        text-[15px]
        transition-all
        duration-300
        hover:text-[#B98B43]
      "
    >
      {children}

      <span
        className="
          absolute
          left-1/2
          -bottom-2
          h-[2px]
          w-0
          rounded-full
          bg-[#B98B43]
          transition-all
          duration-300
          -translate-x-1/2
          group-hover:w-full
        "
      />
    </Link>
  );
}