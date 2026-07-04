export default function Card({ children }) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-[#EFE4D2]
      shadow-sm
      hover:shadow-2xl
      hover:border-[#B98B43]
      transition-all
      duration-500
      hover:-translate-y-2
      "
    >
      {children}
    </div>
  );
}