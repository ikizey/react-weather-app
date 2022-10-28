export const ow_config = (longitude, latitude) => ({
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
        lat: `${latitude}`, //required
        lon: `${longitude}`, //required
        appid: process.env.REACT_APP_OPEN_WEATHER_API_TOKEN,
        units: "metric", //optional
    },
});
