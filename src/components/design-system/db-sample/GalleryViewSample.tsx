import { dbSampleRecords } from "./mockData";

export default function GalleryViewSample() {
  const cards = dbSampleRecords.slice(0, 6);

  return (
    <div className="grid grid-cols-3 gap-2">
      {cards.map((item) => (
        <article
          key={item.id}
          className="overflow-hidden rounded-lg border border-[var(--cp-border)]"
        >
          <div className="h-20" style={{ background: item.cover }} />
          <div className="flex flex-col gap-1 px-2 py-1.5">
            <p className="truncate text-[11px] text-[var(--cp-text-primary)]">{item.title}</p>
            <div className="flex items-center justify-between text-[10px] text-[var(--cp-text-secondary)]">
              <span>type</span>
              <span>{item.type}</span>
            </div>
             <div className="flex items-center justify-between text-[10px] text-[var(--cp-text-secondary)]">
              <span>owner</span>
              <span>{item.owner}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
