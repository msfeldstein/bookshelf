import fetch from 'isomorphic-fetch'

export const REQUEST_BOOKS = 'REQUEST_BOOKS'
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const SELECT_USER = 'SELECT_USER'

export function selectUser(user) {
  return {
    type: SELECT_USER,
    user: {
      username: user
    }
  }
}
function requestBooks(user) {
  return {
    type: REQUEST_BOOKS,
    user: user
  }
}

export function receiveBooks(user, json) {
  return {
    type: RECEIVE_BOOKS,
    user: user,
    books: json,
    receivedAt: Date.now()
  }
}

export function fetchBooks(user) {
  return function(dispatch) {
    dispatch(requestBooks(user))
    
    return fetch(`/api/books/${user}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveBooks(user, json))
      })
  }
}
