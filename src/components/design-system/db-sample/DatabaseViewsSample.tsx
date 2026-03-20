import clsx from "clsx";
import { useMemo, useState } from "react";
import CalendarViewSample from "./CalendarViewSample";
import GanttViewSample from "./GanttViewSample";
import GalleryViewSample from "./GalleryViewSample";
import KanbanViewSample from "./KanbanViewSample";
import TableViewSample from "./TableViewSample";
import { useCopy } from "../../../i18n";

interface DatabaseViewsSampleProps {
  className?: string;
}

type ViewId = "table" | "gallery" | "kanban" | "calendar" | "gantt";

export default function DatabaseViewsSample({ className }: DatabaseViewsSampleProps) {
  const copy = useCopy();
  const [activeView, setActiveView] = useState<ViewId>("table");
  const { databaseViews } = copy.home.featureBento;

  const views = useMemo(
    () =>
      [
        { id: "table" as const, label: databaseViews.tabs.table, node: <TableViewSample /> },
        { id: "gallery" as const, label: databaseViews.tabs.gallery, node: <GalleryViewSample /> },
        { id: "kanban" as const, label: databaseViews.tabs.kanban, node: <KanbanViewSample /> },
        { id: "calendar" as const, label: databaseViews.tabs.calendar, node: <CalendarViewSample /> },
        { id: "gantt" as const, label: databaseViews.tabs.gantt, node: <GanttViewSample /> },
      ] satisfies Array<{ id: ViewId; label: string; node: JSX.Element }>,
    [databaseViews.tabs.calendar, databaseViews.tabs.gallery, databaseViews.tabs.gantt, databaseViews.tabs.kanban, databaseViews.tabs.table]
  );

  const currentView = views.find((item) => item.id === activeView) ?? views[0];

  return (
    <div className={clsx("cp-db-sample-shell", className)}>
      <div className="cp-db-sample-tabs" role="tablist" aria-label={databaseViews.tabsAriaLabel}>
        {views.map((view) => (
          <button
            key={view.id}
            type="button"
            role="tab"
            aria-selected={activeView === view.id}
            className={clsx("cp-db-sample-tab", activeView === view.id && "cp-db-sample-tab--active")}
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
