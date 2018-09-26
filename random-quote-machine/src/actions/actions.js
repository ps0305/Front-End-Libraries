//import randomColor from 'randomcolor';
import {
    //QUOTE_FETCHING,
    QUOTE_FETCH_SUCCESS,
    QUOTE_FETCH_ERROR
} from '../actionTypes/actionTypes'

const fetchSuccess = ({ quote:text,author,cat:category }) => ({
    type:QUOTE_FETCH_SUCCESS,
   /* payload: {
        background: randomColor(),
        quote: { text,author,category}
    }*/
})

const fetchError = ({message}) => ({
    type:QUOTE_FETCH_ERROR,
    payload: {
        background: 'red',
        error: `Something went wrong: ${message}`
    }
});

const getQuote = () => async dispatch => {
    const API_URL = "https://gist.githubusercontent.com/ps0305/19cc96b267ede04c774972b8b524f179/raw/e3868e1a4cff8d7e989da314babb91f302918f09/quotes.json";

    try {
       // dispatch(fetchingQuote());

        const quote = await (await(API_URL)).json();
        dispatch(fetchSuccess(quote));
    }
    catch (error) {
        dispatch(fetchError(error));
    }
}

export default getQuote;