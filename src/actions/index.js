// axios allows us to make AJAX requests from the browser without having to
// import a large library such as jquery
import axios from 'axios'

// Token for API and configuration to set TOKEN in HEADER whenever request is made
const AUTH_TOKEN = 'eImfjtJxjXkeSGYVwZSvqDxnikJpVpRK'
axios.defaults.baseURL = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00040232&startdate=2017-03-01&enddate=2017-05-29';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// using the backticks with URL allows us to inject a variable with string interpolation
const ROOT_URL = `https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00040232&startdate=2017-03-01&enddate=2017-05-29`;

// API Call Template 
// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}


export const FETCH_WEATHER = 'FETCH_WEATHER';

// whenever someone calls a fetchWeather action, they're going to pass a city name
export function fetchWeather() {
	const request = axios.get(ROOT_URL);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}