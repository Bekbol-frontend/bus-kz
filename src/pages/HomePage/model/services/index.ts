import API from "@/shared/api";

class HomeServices {
    async getCity() {
        return await API.get("/api/v1/City")
    }
}

export const homeService = new HomeServices()