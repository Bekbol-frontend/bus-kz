import { type ISortTripOption, SortTripEnum } from "../types";

export const sortOptionItems: ISortTripOption[] = [
  {
    label: "По цене, сначала дешевые",
    value: SortTripEnum.PRICE,
  },
  {
    label: "Время отправления",
    value: SortTripEnum.DEPARTURE_TIME,
  },
  {
    label: "Время прибытия",
    value: SortTripEnum.ARRIVAL_TIME,
  },
];
