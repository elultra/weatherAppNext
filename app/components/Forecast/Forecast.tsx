import React, { memo } from "react";
import WeatherIcon from "./WeatherIcon";
import moment from "moment";
interface ForecastProps {
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
    };
    dt: number;
    dt_txt: string;
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
}

function Forecast({ data }: any) {
    return (
        <div className="flex text-white w-full py-16 overflow-x-auto text-center xs:flex-col lg:flex-row">
            {data.map(({ dt, dt_txt, weather, main }: ForecastProps) => {
                const { temp } = main;
                const formatDate = moment(dt_txt).format("L");
                const formatDay = moment(dt_txt).format("dddd");
                return (
                    <div
                        className="w-1/5 rounded shadow px-[12px] py-[10px] bg-white/10 mx-1 flex-col justify-center xs:flex-row xs:w-full xs:my-2 xs:gap-1 lg:flex-col lg:w-1/5 h-[320px]"
                        key={dt}
                    >
                        <p className="font-bold text-lg pt-5 xs:my-auto xs:px-2">
                            {formatDate}
                        </p>
                        <p className="font-bold text-lg pt-2 pb-8 xs: my-auto">
                            {formatDay}
                        </p>
                        <div className="w-3/5 h-auto mx-auto flex justify-center xs:w-2/5">
                            <WeatherIcon icon={weather[0].icon} />
                        </div>
                        <p className="xs:self-center pt-2 font-bold xs:px-2 pb-8">
                            {weather[0].description}
                        </p>
                        <p className="pb-5 text-2xl font-bold xs:my-auto xs:px-2">
                            {Math.round(temp)}&#8451;
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default memo(Forecast);
