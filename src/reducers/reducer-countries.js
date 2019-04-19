import { GET_COUNTRIES } from '../actions/index';
import { supportedCurrencyCode } from '../supportedCurrencies'

const initialState = {
    countries: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: getCountriesInfoFilter(action.payload)
            };
    }
    return state;
}


function getCountriesInfoFilter(countries) {
    return countries.map(countrie => {
        return {
            name: countrie.name,
            currencyCode: countrie.currencies[0].code,
            flag: countrie.flag,
            code: countrie.alpha3Code
        };
    }).filter(countrie => {
        return supportedCurrencyCode.indexOf(countrie.currencyCode) > -1;
    });
} 