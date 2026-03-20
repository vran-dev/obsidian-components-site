import { getCopy } from "../../../i18n";

export type DbStatus = "planned" | "inProgress" | "released";

export interface DbSampleRecord {
  id: string;
  title: string;
  status: DbStatus;
  priority: "P0" | "P1" | "P2";
  owner: string;
  start: string;
  due: string;
  type: string;
  cover: string;
}

export const getDbSampleRecords = (locale: string): DbSampleRecord[] => getCopy(locale).home.featureBento.records;
