import randomColor from 'randomcolor';
import {
    QUOTE_FETCHING,
    QUOTE_FETCH_SUCCESS,
    QUOTE_FETCH_ERROR
} from './actionTypes/actionTypes'

const fetchSuccess = ({ quote:text,author,cat:category }) => ({
    type:QUOTE_FETCH_SUCCESS,
    payload: {
        background: randomColor(),
        quote: { text,author,category}
    }
})

const fetchError = ({message}) => ({
    type:QUOTE_FETCH_ERROR,
    payload: {
        background: 'red',
        error: `Something went wrong: ${message}`
    }
});

const getQuote = () => async dispatch => {
    const API_URL = "Some url";

    try {
        dispatch(fetchingQuote());

        const quote await (aw)
    }
}