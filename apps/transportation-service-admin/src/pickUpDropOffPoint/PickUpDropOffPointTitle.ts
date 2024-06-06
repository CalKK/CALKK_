import { PickUpDropOffPoint as TPickUpDropOffPoint } from "../api/pickUpDropOffPoint/PickUpDropOffPoint";

export const PICKUPDROPOFFPOINT_TITLE_FIELD = "name";

export const PickUpDropOffPointTitle = (
  record: TPickUpDropOffPoint
): string => {
  return record.name?.toString() || String(record.id);
};
