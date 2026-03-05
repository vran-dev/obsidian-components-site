import { dbSampleRecords } from "./mockData";

const statusClassMap = {
  待规划: "bg-[rgba(108,123,146,0.2)] text-[rgba(206,213,224,0.9)]",
  进行中: "bg-[rgba(143,156,255,0.2)] text-[rgba(219,225,255,0.95)]",
  已发布: "bg-[rgba(82,209,153,0.2)] text-[rgba(205,245,227,0.95)]",
} as const;

const priorityClassMap = {
  P0: "text-[#f2b6b6]",
  P1: "text-[#d8ddff]",
  P2: "text-[var(--cp-text-secondary)]",
} as const;

export default function TableViewSample() {
  const rows = dbSampleRecords.slice(0, 4);

  return (
    <div className="cp-db-table">
      <div className="cp-db-table-row cp-db-table-row--header">
        <span>名称</span>
        <span>状态</span>
        <span>优先级</span>
        <span>负责人</span>
        <span>截止</span>
      </div>
      <div className="cp-db-table-body">
        {rows.map((item) => (
          <div key={item.id} className="cp-db-table-row">
            <span className="cp-db-table-title">{item.title}</span>
            <span>
              <span className={`inline-flex rounded px-1.5 py-0.5 ${statusClassMap[item.status]}`}>
                {item.status}
              </span>
            </span>
            <span className={`font-medium ${priorityClassMap[item.priority]}`}>{item.priority}</span>
            <span className="text-[var(--cp-text-secondary)]">{item.owner}</span>
            <span className="text-[var(--cp-text-secondary)]">{item.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
