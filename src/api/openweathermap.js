export const OPEN_WEATHER_REQUEST_OPTIONS = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
        lat: "44.34", //latitude, required
        lon: "10.99", //longitude, required
        appid: process.env.REACT_APP_OPEN_WEATHER_API_TOKEN,
        units: "metric", //
    },
};
