import axios from "axios";
import i18n from "../config/i18n";

const baseURL = import.meta.env.VITE_BASE_URL

const API = axios.create({
    baseURL
})

API.interceptors.request.use(
    function (config) {
        config.headers['lang'] = i18n.language;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default API