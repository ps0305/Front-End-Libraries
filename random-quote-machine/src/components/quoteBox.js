import React, { Component, Fragment } from 'react';
import getQuote from '../actions/actions'
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer'
import { connect } from 'react-redux'

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
    refreshQuote = event => {
        event.preventDefault();
        this.props.getQuote();
      };
      renderQuote() {
        const { error, loading, quote } = this.props;
        let jsx = null;
    
        if (loading) {
          jsx = (
            <Quote.Text id="text" loading>
              Loading...
            </Quote.Text>
          );
        } else if (error) {
          jsx = (
            <Quote.Text id="text" error>
              {error}
            </Quote.Text>
          );
        } else {
          jsx = (
            <Fragment>
              <Quote.Text id="text">{quote.text}</Quote.Text>
              <Quote.Author id="author">{quote.author}</Quote.Author>
            </Fragment>
          );
        }
    
        return jsx;
      }
    
      render() {
        const { error, loading, quote } = this.props;
    
        return (
            <div>
            <Header>
              <Header.Logo />
              <Header.Text>QuoteMe Machine</Header.Text>
            </Header>
            <QuoteContainer loading={loading}>
              <Quote>{this.renderQuote()}</Quote>
              <ButtonContainer>
                <ButtonContainer.Button>
                  <a id="new-quote" title="Retrieve a new quote" onClick={this.refreshQuote}>
                  </a>
                </ButtonContainer.Button>
                <ButtonContainer.Button twitter>
                  {!loading && error === '' ? (
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURI(
                        `${quote.author} once said: ${quote.text}`
                      )}&hashtags=${encodeURI(quote.category)}&via=quotememachine`}
                      id="tweet-quote"
                      title={`Tweet this ${quote.author} quote`}
                      target="_blank"
                      rel="noopener"
                    >
                     {/*<FontAwesomeIcon icon={faTwitter} aria-label="Tweet Quote" />*/}
                    </a>
                  ) : (
                    <a id="tweet-quote" className="disabled">
                      <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                    </a>
                  )}
                </ButtonContainer.Button>
              </ButtonContainer>
            </QuoteContainer>
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
    )(QuoteBox);