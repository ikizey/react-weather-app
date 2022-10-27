const minPopulation = 120_000;

export const GEODB_REQUEST_OPTIONS = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: { minPopulation: `${minPopulation}` },
    headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_GEO_DB_API_TOKEN}`,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
};
