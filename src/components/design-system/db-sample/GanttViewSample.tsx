import { dbSampleRecords } from "./mockData";

const TRACK_DAYS = 31;
const milestones = [1, 8, 15, 22, 29];

function toDay(value: string) {
  return Number(value.split("-")[1]);
}

export default function GanttViewSample() {
  const rows = dbSampleRecords.slice(0, 4).map((item) => {
    const startDay = toDay(item.start);
    const endDay = toDay(item.due);
    const left = ((startDay - 1) / TRACK_DAYS) * 100;
    const width = Math.max(((endDay - startDay + 1) / TRACK_DAYS) * 100, 7);
    return { ...item, left, width };
  });

  return (
    <div className="rounded-lg border border-[var(--cp-border)] bg-[rgba(17,18,20,0.36)] p-2">
      <div className="mb-2 grid grid-cols-5 gap-1">
        {milestones.map((day) => (
          <span key={day} className="text-center text-[9px] text-[var(--cp-text-secondary)]">
            03-{String(day).padStart(2, "0")}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        {rows.map((item) => (
          <div key={item.id} className="grid grid-cols-[92px,1fr] items-center gap-2">
            <span className="truncate text-[10px] text-[var(--cp-text-secondary)]">{item.title}</span>
            <div className="relative h-5 rounded border border-[var(--cp-border)] bg-[var(--cp-surface-1)]">
              {milestones.map((day) => (
                <span
                  key={`${item.id}-${day}`}
                  className="absolute top-0 bottom-0 w-px bg-[rgba(58,64,73,0.45)]"
                  style={{ left: `${((day - 1) / TRACK_DAYS) * 100}%` }}
                />
              ))}
              <span
                className="absolute top-[3px] bottom-[3px] rounded bg-[var(--cp-brand)]"
                style={{ left: `${item.left}%`, width: `${item.width}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
