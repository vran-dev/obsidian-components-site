import Carousel, { type CarouselItem } from "../Carousel";

interface DataViewUseCasesProps {
  className?: string;
}

const useCases: CarouselItem[] = [
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
  return <Carousel items={useCases} className={className} dotsLabel="场景切换" />;
}
