import { useCopy } from "../../../i18n";

export default function TableViewSample() {
  const copy = useCopy();
  const rows = copy.home.featureBento.records.slice(0, 4);
  const { tableHeaders, statuses } = copy.home.featureBento.databaseViews;

  const statusClassMap = {
    planned: "bg-[rgba(108,123,146,0.2)] ",
    inProgress: "bg-[rgba(143,156,255,0.2)] ",
    released: "bg-[rgba(82,209,153,0.2)] ",
  } as const;

  const priorityClassMap = {
    P0: "text-[#f2b6b6]",
    P1: "text-[#d8ddff]",
    P2: "text-[var(--cp-text-secondary)]",
  } as const;

  return (
    <div className="cp-db-table">
      <div className="cp-db-table-row cp-db-table-row--header">
        <span>{tableHeaders.name}</span>
        <span>{tableHeaders.status}</span>
        <span>{tableHeaders.priority}</span>
        <span>{tableHeaders.owner}</span>
        <span>{tableHeaders.due}</span>
      </div>
      <div className="cp-db-table-body">
        {rows.map((item) => (
          <div key={item.id} className="cp-db-table-row">
            <span className="cp-db-table-title">{item.title}</span>
            <span>
              <span className={`inline-flex rounded px-1.5 py-0.5 ${statusClassMap[item.status]}`}>
                {statuses[item.status]}
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
