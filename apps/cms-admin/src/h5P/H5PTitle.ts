import { H5P as TH5P } from "../api/h5P/H5P";

export const H5P_TITLE_FIELD = "title";

export const H5PTitle = (record: TH5P): string => {
  return record.title?.toString() || String(record.id);
};
