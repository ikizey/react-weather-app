export const ow_config = (longitude, latitude) => ({
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
        lat: `${longitude}`, //required
        lon: `${latitude}`, //required
        appid: process.env.REACT_APP_OPEN_WEATHER_API_TOKEN,
        units: "metric", //optional
    },
});
