import {
    QUOTE_FETCHING,
    QUOTE_FETCH_SUCCESS,
    QUOTE_FETCH_ERROR
} from '../actionTypes/actionTypes'

export default ( state = {} ,{ type, payload}) => {
    switch(acctions.type) {
        case QUOTE_FETCHING:
        return {
            ...state, ...{loading: true, error:''}
        };
        case QUOTE_FETCH_SUCCESS:
        return {
            loading: false,
            error:'',
            quote: payload.quote
        };
        case QUOTE_FETCH_ERROR:
        return {
            ...state,
            ...{
                loading: false,
                error: payload.error
            }
        };
        default:
        return state;
    }
};