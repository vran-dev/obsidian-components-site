import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface DataViewUseCasesProps {
  className?: string;
}

const useCases = [
  {
    title: "看板",
    description: "看板非常适合用来管理项目，能直观的看到每个任务的状态和优先级",
    image: "./img/feature/project-management-kanban.png",
  },
  {
    title: "甘特图",
    description: "甘特图可以帮助你直观地看到项目的时间线和任务进度，便于管理和协调。",
    image: "./img/feature/project-management-gantt.png",
  },
  {
    title: "画廊",
    description: "画廊视图可以把数据以卡片的形式展示出来，适合用来做知识库、案例库等内容展示。",
    image: "./img/feature/books.png",
  }
];

export default function DataViewUseCases({ className }: DataViewUseCasesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentCase = useCases[activeIndex];

  const jumpTo = (index: number) => {
    const length = useCases.length;
    const nextIndex = (index + length) % length;
    setActiveIndex(nextIndex);
  };

  return (
    <div className={clsx("cp-db-use-cases", className)}>

      <article className="cp-db-carousel-card">
        <div className="cp-db-carousel-media">
          <img src={currentCase.image} alt={currentCase.title} className="cp-db-carousel-cover" />
          <div className="cp-db-use-cases-controls cp-db-use-cases-controls--overlay">
            <button
              type="button"
              aria-label="上一条场景"
              className="cp-db-use-cases-control"
              onClick={() => jumpTo(activeIndex - 1)}
            >
              <ChevronLeft size={14} />
            </button>
            <button
              type="button"
              aria-label="下一条场景"
              className="cp-db-use-cases-control"
              onClick={() => jumpTo(activeIndex + 1)}
            >
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="cp-db-carousel-dots" role="tablist" aria-label="场景切换">
            {useCases.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                className={clsx("cp-db-carousel-dot", index === activeIndex && "cp-db-carousel-dot--active")}
                onClick={() => jumpTo(index)}
              />
            ))}
          </div>
        </div>
        <div className="cp-db-carousel-info">
          <p className="cp-db-carousel-name">{currentCase.title}</p>
          <p className="cp-db-carousel-desc">{currentCase.description}</p>
        </div>
      </article>
    </div>
  );
}
