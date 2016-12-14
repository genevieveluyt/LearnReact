import axios from 'axios';

const API_KEY = '1ee5aadb57e5f2461727315bd04828a1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ca`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}