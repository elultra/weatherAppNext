export interface WeatherData {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: string;
}

export interface countryData {
    country: string;
}

export interface cardHeaderProps {
    data: WeatherData[];
    countryData: countryData;
}
function CardHeader({ data, countryData }: cardHeaderProps) {
    const { main, wind, weather } = data[0];
    return (
        <div className="py-10 px-16 flex justify-between bg-[#003366] rounded-t-lg xs:flex-col md:flex-row">
            <div>
                <h1 className="text-6xl text-white font-semibold pb-6">
                    {`${Math.round(main.temp)} °C`}
                </h1>
                <p className="text-lg text-white capitalize">
                    {weather[0].description}
                </p>
                <div className="gap-8 w-full mx-auto flex jusity-center items-center text-white pt-5">
                    <div>
                        <p className="uppercase font-semibold pb-1">humidity</p>
                        <p>{`${main.humidity} %`}</p>
                    </div>
                    <hr className="h-[40px] bg-white w-[1px]" />
                    <div>
                        <h2 className="uppercase font-semibold pb-1">
                            wind speed
                        </h2>
                        <p>{`${wind.speed} m/s`}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center self-start">
                <p className="text-white text-3xl font-bold tracking-wider xs:pt-6 md:pt-0">
                    {countryData.country}
                </p>
                <hr className="w-full h-[2px] bg-white mt-0.5" />
            </div>
        </div>
    );
}

export default CardHeader;
