import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES";

export const GET_RATE_EXCHANGE = "GET_RATE_EXCHANGE";

export const BASE_CURRENCY = "USD";

export function fetchCountries() {
    return function (dispatch) {
        axios.get("https://restcountries.eu/rest/v2/all").then(response => {
            dispatch({ type: GET_COUNTRIES, payload: response.data });
        })
    }
}

export function fetchRateExchange(country) {
    return function (dispatch) {
        axios.get(`https://api.exchangeratesapi.io/history?` +
            `start_at=${getLastMounth()}&` +
            `end_at=${formatedDate(new Date())}&` +
            `base=${BASE_CURRENCY}&` +
            `symbols=${country.currencyCode}`)
            .then(response => {
                dispatch({ type: GET_RATE_EXCHANGE, payload: { rates: response.data.rates, ...country } });
            })
    }
}

function formatedDate(date) {
    return date.toISOString().split("T")[0];
  }

function getLastMounth(){
    let date = new Date();
    date.setMonth(date.getMonth() - 1)
    return formatedDate(date);
}