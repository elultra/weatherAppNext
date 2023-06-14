import React, { useState, useEffect } from "react";
import CardHeader from "./CardHeader";
import "./loadingAnimation.css";
import Forecast from "../Forecast/Forecast";
import SocialMedia from "../SocialMedia/SocialMedia";
import { getWeathers } from "../../utils/api";

const Card = ({ country: selectedCountry }: any) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [countryData, setCountryData] = useState<any>({
        country: selectedCountry,
    });
    const [data, setData] = useState([]);
    useEffect(() => {
        const getWeatherData = async () => {
            try {
                setLoading(true);
                const { data } = await getWeathers(selectedCountry);
                const displayCountry = data?.slice?.(-1)?.[0];
                const forecastData = data?.slice?.(0, -1);
                setCountryData(displayCountry);
                setData(forecastData);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getWeatherData();
    }, [selectedCountry]);
    return (
        <>
            {data.length > 0 && !loading ? (
                <>
                    <CardHeader data={data} countryData={countryData} />
                    <div className="flex justify-between rounded-b-xl shadow-lg w-full overflow-hidden xs:flex-col lg:flex-row px-4">
                        <SocialMedia />
                        <Forecast data={data} />
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center pt-20">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                </div>
            )}
        </>
    );
};

export default Card;
