import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        Books I've read lately
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.selectedUser && state.selectedUser.username
  }
}
export default connect(mapStateToProps, null)(Header);
