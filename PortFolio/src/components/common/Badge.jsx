export default function Badge({ children }) {
  return (
    <span
      className="
      px-5
      py-2
      rounded-full
      bg-[#F8F6F2]
      border
      border-[#E6D4B5]
      text-sm
      font-medium
      hover:bg-[#B98B43]
      hover:text-white
      duration-300
      cursor-default
      "
    >
      {children}
    </span>
  );
}