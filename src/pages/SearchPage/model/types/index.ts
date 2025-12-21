interface TripRoute {
  arrivalTime: string;
  departureTime: string;
  distanceKm: number;
  duration: string;
  fromCity: string;
  fromStation: string;
  toCity: string;
  toStation: string;
}

interface IBus {
  brand: string;
  model: string;
  seatsCount: number;
  seatType: string;
  seatSchemeName: string;
}

export interface ITrip {
  tripId: string;
  route: TripRoute;
  bus: IBus;
  price: number;
}
