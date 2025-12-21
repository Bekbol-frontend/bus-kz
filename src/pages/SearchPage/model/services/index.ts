import API from "@/shared/api";
import type { ITrip } from "../types";

export async function getTripSearch(from: string, to: string, date: string) {
  return await API.get<ITrip[]>("api/v1/Trip/search", {
    params: {
      from,
      to,
      date,
    },
  });
}
