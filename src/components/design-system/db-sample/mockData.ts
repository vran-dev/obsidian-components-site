export type DbStatus = "待规划" | "进行中" | "已发布";

export interface DbSampleRecord {
  id: string;
  title: string;
  status: DbStatus;
  priority: "P0" | "P1" | "P2";
  owner: string;
  start: string;
  due: string;
  type: "Feature" | "Ops" | "Content";
  cover: string;
}

export const dbSampleRecords: DbSampleRecord[] = [
  {
    id: "task-1",
    title: "发布 AI Agent 工作流",
    status: "进行中",
    priority: "P0",
    owner: "Vran",
    start: "03-02",
    due: "03-09",
    type: "Feature",
    cover: "linear-gradient(135deg, #8f9cff 0%, #6370c7 100%)",
  },
  {
    id: "task-2",
    title: "升级数据库模板库",
    status: "待规划",
    priority: "P1",
    owner: "Moy",
    start: "03-10",
    due: "03-15",
    type: "Content",
    cover: "linear-gradient(135deg, #67d4ff 0%, #3ea2cf 100%)",
  },
  {
    id: "task-3",
    title: "梳理用户案例中心",
    status: "进行中",
    priority: "P1",
    owner: "vran",
    start: "03-12",
    due: "03-21",
    type: "Content",
    cover: "linear-gradient(135deg, #aab8ff 0%, #7284de 100%)",
  },
    {
    id: "task-3-1",
    title: "撰写用户案例中心文档",
    status: "进行中",
    priority: "P1",
    owner: "vran",
    start: "03-12",
    due: "03-21",
    type: "Content",
    cover: "linear-gradient(135deg, #aab8ff 0%, #7284de 100%)",
  },
  {
    id: "task-4",
    title: "上线组件文档 2.0",
    status: "已发布",
    priority: "P0",
    owner: "自权",
    start: "03-01",
    due: "03-04",
    type: "Feature",
    cover: "linear-gradient(135deg, #7a8fd8 0%, #55629f 100%)",
  },
  {
    id: "task-5",
    title: "优化数据同步稳定性",
    status: "待规划",
    priority: "P2",
    owner: "The Fool",
    start: "03-18",
    due: "03-26",
    type: "Ops",
    cover: "linear-gradient(135deg, #6c7b92 0%, #465263 100%)",
  },
];
