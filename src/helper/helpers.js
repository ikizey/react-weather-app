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
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        icon: data.weather[0].icon,
        details: data.weather[0].main,
        description: data.weather[0].description,
    };
};
