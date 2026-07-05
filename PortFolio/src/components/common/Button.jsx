export default function Button({
  children,
  href = "#",
  download = false,
  variant = "primary",
  onClick,
}) {
  const styles = {
    primary:
      "bg-[#18181B] text-white hover:bg-[#B98B43] hover:shadow-xl",

    secondary:
      "border border-[#D8C9AF] text-[#18181B] hover:bg-[#18181B] hover:text-white",
  };

  return (
    <a
      href={href}
      download={download}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        px-7
        py-3
        rounded-full
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        ${styles[variant]}
      `}
    >
      {children}
    </a>
  );
}