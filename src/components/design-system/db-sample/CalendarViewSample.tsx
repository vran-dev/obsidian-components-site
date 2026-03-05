import { dbSampleRecords } from "./mockData";

const weekdays = ["一", "二", "三", "四", "五", "六", "日"];
const startOffset = 5;
const totalDays = 31;
const cells = Array.from({ length: 35 }, (_, index) => index - startOffset + 1);

const eventMap = dbSampleRecords.reduce<Record<number, number>>((acc, item) => {
  const dueDay = Number(item.due.split("-")[1]);
  if (!Number.isNaN(dueDay)) {
    acc[dueDay] = (acc[dueDay] ?? 0) + 1;
  }
  return acc;
}, {});

export default function CalendarViewSample() {
  return (
    <div className="rounded-lg border border-[var(--cp-border)] p-2">
      <div className="mb-1 grid grid-cols-7 gap-1">
        {weekdays.map((day) => (
          <span key={day} className="text-center text-[9px] text-[var(--cp-text-secondary)]">
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, index) => {
          const validDay = day >= 1 && day <= totalDays;
          const level = validDay ? eventMap[day] ?? 0 : 0;
          return (
            <div
              key={`${day}-${index}`}
              className="flex h-5 items-center justify-center rounded border border-[var(--cp-border)] bg-[var(--cp-surface-1)]"
            >
              {validDay ? (
                <span className="relative text-[9px] text-[var(--cp-text-primary)]">
                  {day}
                  {level > 0 ? (
                    <span className="absolute -right-1 -top-1 block h-1.5 w-1.5 rounded-full bg-[var(--cp-brand)]" />
                  ) : null}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
