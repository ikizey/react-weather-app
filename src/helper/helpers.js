export const responseToGeoLocations = response =>
    response.data.data.map(location => ({
        id: location.id,
        city: location.city,
        country: location.country,
        longitude: location.longitude,
        latitude: location.latitude,
    }));

export const responseToWeather = (response, city) => {
    const data = response.data;
    return {
        city: city.city,
        country: city.country,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        wind: data.wind.speed,
    };
};
