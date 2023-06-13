import axios from "axios";

export const getWeathers = (country?: string) => {
    return axios.get(
        `https://weather-app-backend-lkgk1no7h-ericyui66-outlookcom.vercel.app/api/v1/weathers/${country}`
    );
};

export const getGeoLocation = () => {
    return axios.get(
        "https://weather-app-backend-lkgk1no7h-ericyui66-outlookcom.vercel.app/api/v1/weathers"
    );
};
