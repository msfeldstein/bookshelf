import React, { Component } from 'react'
import { connect } from 'react-redux'
import Book from './Book'
import './BookGrid.css'

class BookGrid extends Component {
  render() {
    return (
      <div className="BookGrid">
        {this.props.books.map(book =>
          <Book
            key={book.id}
            {...book}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  var books = []
  if (state.booksByUser[state.selectedUser.username])
    books = state.booksByUser[state.selectedUser.username].books
  return {
    user: state.user,
    books: books
  }
}

export default connect(mapStateToProps, null)(BookGrid);
