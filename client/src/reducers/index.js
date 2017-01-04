import { combineReducers } from 'redux'
import { REQUEST_BOOKS, RECEIVE_BOOKS, SELECT_USER } from '../actions/books'

function selectedUser(state = 'defaultuser', action) {
  switch (action.type) {
    case SELECT_USER:
      return action.user
    default:
      return state
  }
}

function books(state = {
  isFetching: false,
  books: []
}, action) {
  switch(action.type) {
    case REQUEST_BOOKS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_BOOKS:
    return Object.assign({}, state, {
      isFetching: false,
      books: action.books,
      lastUpdated: action.receivedAt
    })
    default:
      return state
  }
}

function booksByUser(state = {}, action) {
  switch(action.type) {
    case REQUEST_BOOKS:
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        [action.user]: books(state[action.user], action)
      })
    default:
      return state
  }
}
const rootReducer = combineReducers({
  selectedUser,
  booksByUser
})
export default rootReducer