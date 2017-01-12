import React, { Component } from 'react';
import { connect } from 'react-redux'
import {selectBook} from './actions/books'

class Book extends Component {
  render() {
    return (
      <div className="Book">
        <div className="Cover" onClick={() => this.props.selectBook(this.props)}>
          <img src={this.props.url} />
        </div>
      </div>
    );
  }
}

export default connect((state)=>state, {
  selectBook
})(Book);
