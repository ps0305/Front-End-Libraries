import React from 'react';
import { Provider } from 'react-redux';
import QuoteBox from './quoteBox';
import store from '../Reducer/index';

const App = () => (
    <Provider store={store}>
        <QuoteBox />
    </Provider>
);
    
export default App;