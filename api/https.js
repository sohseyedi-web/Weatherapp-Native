import axios from "axios";
import { API_KEY } from "@env";

const BASE_URL = "https://api.weatherapi.com/v1";

// fetchWeatherForecast function
export async function fetchWeatherForecast(value, days) {
  return await axios
    .get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${value}&days=${days}&aqi=no&alerts=no`
    )
    .then((response) => response.data)
    .catch((err) => console.log(`Error fetch`, err));
}

// fetchLocations function

export async function fetchLocations(value) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search.json?key=${API_KEY}&q=${value}`
    );

    return data;
  } catch (error) {
    console.log(`Error location`, err);
  }
}
