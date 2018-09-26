import React, { Component, Fragment } from 'react';
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
    constructor(props){
        super(props)
    }
    componentDidMount() {
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
              quoteBox
              <Header>QuoteMe Machine</Header>
            
            <Footer>
              <p>
                <a href="https://github.com/ps0305">
                  Made with <span>♥</span> by Pankaj Singh
                </a>
              </p>
            </Footer>
            </div>
        );
      }
    }
    
    export default connect(
      state => state,
      { getQuote }
    )(quoteBox);