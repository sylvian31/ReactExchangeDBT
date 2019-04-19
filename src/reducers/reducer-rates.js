import { GET_RATE_EXCHANGE } from '../actions/index';

const initialState = {
    rates: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RATE_EXCHANGE:
            return {
                ...state,
                rates: [
                    action.payload,
                    ...state.rates
                ]
            }
        default: return state
    }
}
