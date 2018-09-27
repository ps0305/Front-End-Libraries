import React from 'react';
import getQuote from '../actions/actions'
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer'
import { connect } from 'react-redux'

class quoteBox extends React.Component {
  
    static propTypes = {
        error: PropTypes.string,
        getQuote: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        quote: PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
    }).isRequired
    }
   
    componentDidMount() {
      console.log(getQuote());
        this.props.getQuote();
    }
    refreshQuote = event => {
        event.preventDefault();
        this.props.getQuote();
      };
    
    
      render() {
        const { error, loading, quote } = this.props;
    
        return (
          <div>
            quote
          </div>
        )}
}
    
    export default connect(
      state => state,
      { getQuote }
    )(quoteBox);