export default function Marquee() {
  const items = [
    "УСТАНОВКА ГБО", "ЭКОНОМИЯ 50%", "ГАРАНТИЯ 2 ГОДА",
    "ОТ 23 000 ₽", "ЗА 1 ДЕНЬ", "ИТАЛЬЯНСКОЕ ОБОРУДОВАНИЕ",
  ];

  return (
    <div className="bg-surface border-y border-border overflow-hidden py-4 select-none">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-sm font-bold text-text-secondary tracking-[0.25em] uppercase">
            {items.map((item, j) => (
              <span key={j}>
                {item}
                <span className="inline-block mx-4 text-primary">&#9679;</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
