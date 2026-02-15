export default function Marquee() {
  const text = "УСТАНОВКА ГБО  \u2022  ЭКОНОМИЯ 50%  \u2022  ГАРАНТИЯ 2 ГОДА  \u2022  ОТ 23 000 \u20BD  \u2022  УСТАНОВКА ЗА 1 ДЕНЬ  \u2022  ИТАЛЬЯНСКОЕ ОБОРУДОВАНИЕ  \u2022  ";

  return (
    <div className="border-y border-border/60 bg-surface-alt overflow-hidden py-4 select-none">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="text-xs font-semibold text-text-muted/60 tracking-[0.2em] uppercase"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
