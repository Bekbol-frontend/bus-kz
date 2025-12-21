interface TripRoute {
  fromCity: string;
  toCity: string;
  fromStation: string;
  toStation: string;
  departureTime: string;
  duration: string;
  distanceKm: number;
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
