import API from "@/shared/api";
import type { ICity } from "../types";

class HomeServices {
  async getCity() {
    return await API.get<ICity[]>("/api/v1/City");
  }
}

export const homeService = new HomeServices();
