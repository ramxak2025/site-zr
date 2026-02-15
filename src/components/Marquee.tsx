export default function Marquee() {
  const text = "УСТАНОВКА ГБО \u00A0\u00A0•\u00A0\u00A0 ЭКОНОМИЯ 50% \u00A0\u00A0•\u00A0\u00A0 ГАРАНТИЯ 2 ГОДА \u00A0\u00A0•\u00A0\u00A0 ОТ 23 000 ₽ \u00A0\u00A0•\u00A0\u00A0 УСТАНОВКА ЗА 1 ДЕНЬ \u00A0\u00A0•\u00A0\u00A0 ИТАЛЬЯНСКОЕ ОБОРУДОВАНИЕ \u00A0\u00A0•\u00A0\u00A0 ";

  return (
    <div className="border-y border-primary/20 bg-primary/[0.03] overflow-hidden py-3.5 select-none">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="text-xs font-bold text-primary/60 tracking-[0.2em] uppercase"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
