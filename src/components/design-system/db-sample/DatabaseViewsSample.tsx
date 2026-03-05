import clsx from "clsx";
import { useMemo, useState } from "react";
import CalendarViewSample from "./CalendarViewSample";
import GanttViewSample from "./GanttViewSample";
import GalleryViewSample from "./GalleryViewSample";
import KanbanViewSample from "./KanbanViewSample";
import TableViewSample from "./TableViewSample";

interface DatabaseViewsSampleProps {
  className?: string;
}

type ViewId = "table" | "gallery" | "kanban" | "calendar" | "gantt";

export default function DatabaseViewsSample({ className }: DatabaseViewsSampleProps) {
  const [activeView, setActiveView] = useState<ViewId>("table");

  const views = useMemo(
    () =>
      [
        { id: "table" as const, label: "表格视图", node: <TableViewSample /> },
        { id: "gallery" as const, label: "画廊视图", node: <GalleryViewSample /> },
        { id: "kanban" as const, label: "Kanban 视图", node: <KanbanViewSample /> },
        { id: "calendar" as const, label: "日历视图", node: <CalendarViewSample /> },
        { id: "gantt" as const, label: "甘特视图", node: <GanttViewSample /> },
      ] satisfies Array<{ id: ViewId; label: string; node: JSX.Element }>,
    []
  );

  const currentView = views.find((item) => item.id === activeView) ?? views[0];

  return (
    <div className={clsx("cp-db-sample-shell", className)}>
      <div className="cp-db-sample-tabs" role="tablist" aria-label="数据库视图切换">
        {views.map((view) => (
          <button
            key={view.id}
            type="button"
            role="tab"
            aria-selected={activeView === view.id}
            className={clsx(
              "cp-db-sample-tab",
              activeView === view.id && "cp-db-sample-tab--active"
            )}
            onClick={() => {
              setActiveView(view.id);
            }}
          >
            {view.label}
          </button>
        ))}
      </div>
      <div className="cp-db-sample-stage">{currentView.node}</div>
    </div>
  );
}
