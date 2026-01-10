// ✅ Reusable Component: Sun icon (orange semicircle) for greeting card

export function SunIcon() {
  return (
    <div className="w-[50px] h-[25px] relative overflow-hidden">
      <div className="absolute left-0 top-0 w-[50px] h-[50px]">
        <div className="w-full h-full rounded-full bg-[#FF9500]" />
      </div>
    </div>
  );
}
