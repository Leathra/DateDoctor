import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ITEM_CREATE_REQ } from '../actions';

const propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

class HomeView extends Component {
  state = {
    currentItem: this.props.items[0],
  }


  // This is taking Firstname input and storing it as //
  // Firstname value //
  onfirstNameChange = (event) => {
    const currentFName = {
      firstName: event.target.value,
    };
    // taking Firstname input and storing as Firstname //
    this.setState({ currentFName });
  }
  // This is taking Lastname input and storing it as //
  // Lastname value //
  onlNameChange = (event) => {
    const currentlastName = {
      lastName: event.target.value,
    };
    // taking Lastname input and storing as Lastname //
    this.setState({ currentlastName });
  }
  // This is taking email input and storing it as email value //
  onEmailChange = (event) => {
    const currentEmail = {
      email: event.target.value,
    };
    // taking email input and storing as email //
    this.setState({ currentEmail });
  }
  // This is taking password input and storing it as password value //
  onPasswordChange = (event) => {
    const currentPassword = {
      password: event.target.value,
    };
    // taking password input and storing as password //
    this.setState({ currentPassword });
  }
  // This is taking password check input and storing it //
  // as password value //
  onPasswordCheckChange = (event) => {
    const currentPasswordCheck = {
      passwordcheck: event.target.value,
    };
    // taking password check input and storing as password check //
    this.setState({ currentPasswordCheck });
  }
  // This is starting our dispatch //
  onUserCreate = (currentUser) => {
    this.props.dispatch({
      type: ITEM_CREATE_REQ,
      user: currentUser,
    });
    this.setState({ currentUser:
    { firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordcheck: '' },
    });
  }
  render() {
    return (
      <body>
        <div>
          <h1>Date Doctor</h1>
        </div>
        <div>
          { /* This is calling the on change function */}
          <input
            placeholder="First Name"
            type="text"
            onChange={this.onfirstNameChange}
          />
          <input
            placeholder="Last Name"
            type="text"
            onChange={this.onlNameChange}
          />
          <input
            placeholder="Email"
            type="text"
            onChange={this.onEmailChange}
          />
          <input
            placeholder="password"
            type="password"
            onChange={this.onPasswordChange}
          />
          <input
            placeholder="re-type password"
            type="password"
            onChange={this.onPasswordCheckChange}
          />
          { /* This code is setting onClick to set state */ }
          <button
            onClick={() => console.log(this.state)}
          >
            Register
          </button>
        </div>
      </body>
    );
  }
}

HomeView.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(HomeView);
