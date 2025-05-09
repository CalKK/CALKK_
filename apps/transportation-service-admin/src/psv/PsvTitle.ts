import { Psv as TPsv } from "../api/psv/Psv";

export const PSV_TITLE_FIELD = "name";

export const PsvTitle = (record: TPsv): string => {
  return record.name?.toString() || String(record.id);
};
