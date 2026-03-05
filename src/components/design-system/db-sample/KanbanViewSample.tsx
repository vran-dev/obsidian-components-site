import { dbSampleRecords, type DbStatus } from "./mockData";

const columns: DbStatus[] = ["待规划", "进行中", "已发布"];

export default function KanbanViewSample() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {columns.map((status, index) => {
        const items = dbSampleRecords.filter((record) => record.status === status).slice(0, (index === 1 ? 4 : 2)); // 进行中展示3条，其他状态展示2条
        return (
          <div
            key={status}
            className="rounded-lg border border-[var(--cp-border)] p-1.5"
          >
            <p className="mb-1 text-[10px] text-[var(--cp-text-secondary)]">
              {status} · {items.length}
            </p>
            <div className="flex flex-col gap-1.5">
              {items.map((item) => (
                <article
                  key={item.id}
                  className={`rounded-md border border-[var(--cp-border)] bg-[var(--cp-surface-1)] px-1.5 py-1`}
                >
                  <p className="truncate text-[10px] text-[var(--cp-text-primary)]">{item.title}</p>
                  <p className="text-[9px] text-[var(--cp-text-secondary)]">
                    {item.priority}
                  </p>
                  <p className="text-[9px] text-[var(--cp-text-secondary)]">
                    {item.owner}
                  </p>
                  <p className="text-[9px] text-[var(--cp-text-secondary)]">
                    {item.start}
                  </p>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
