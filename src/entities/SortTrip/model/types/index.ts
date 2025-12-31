export enum SortTripEnum {
  PRICE = "price",
  DEPARTURE_TIME = "departureTime",
  ARRIVAL_TIME = "arrivalTime",
  SEATS_COUNT = "seatsCount",
}

export interface ISortTripOption {
  label: string;
  value: SortTripEnum;
}
