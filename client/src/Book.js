import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className="Book">
        <div className="Cover">
          <img src={this.props.url} />
        </div>
      </div>
    );
  }
}

export default Book;
