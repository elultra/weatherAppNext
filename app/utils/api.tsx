import axios from "axios";

export const getWeathers = (country?: string) => {
    return axios.get(
        `https://weather-app-backend-eta.vercel.app/v1/weathers/${country}`
    );
};

export const getGeoLocation = (country?: string) => {
    return axios.get(
        `https://weather-app-backend-eta.vercel.app/v1/${country}`
    );
};
