export default function BrowserFrame({ image }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E8DDCB] shadow-lg">
      {/* Browser Header */}
      <div className="flex items-center gap-2 bg-[#ECE5D6] px-4 py-3">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {/* Screenshot */}
      <img
        src={image}
        alt="Project"
        className="w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}