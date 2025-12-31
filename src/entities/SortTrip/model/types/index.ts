export enum SortTripEnum {
  PRICE = "price",
  DEPARTURE_TIME = "departureTime",
  ARRIVAL_TIME = "arrivalTime",
}

export interface ISortTripOption {
  label: string;
  value: SortTripEnum;
}
