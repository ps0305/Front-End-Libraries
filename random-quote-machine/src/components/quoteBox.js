import React, { Component } from 'react';
import getQuote from '../actions/actions'
import PropTypes from 'prop-types';

class Quote extends React.Component {
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

    render(){
        return(
           <Header/>
           
        )
    }
}

export default Quote;
