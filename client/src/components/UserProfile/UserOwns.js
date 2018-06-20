import React, { Component } from 'react';

export default class UserOwns extends Component {
  render() {
    return (
      <div className="user-owns-container">
        <div className="user-owns-title">
          <h3>Your Owned Books</h3>
        </div>
        <div className="user-owns-image-container">
          <div className="user-owns-image-item">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51mH3zO0b2L._SX379_BO1,204,203,200_.jpg"
              alt="test"
            />
            <div className="owned-title">Book Name</div>
          </div>
          <div className="user-owns-image-item">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51mH3zO0b2L._SX379_BO1,204,203,200_.jpg"
              alt="test"
            />
            <div className="owned-title">Book Name</div>
          </div>
          <div className="user-owns-image-item">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51mH3zO0b2L._SX379_BO1,204,203,200_.jpg"
              alt="test"
            />
            <div className="owned-title">Book Name</div>
          </div>
          <div className="user-owns-image-item">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51mH3zO0b2L._SX379_BO1,204,203,200_.jpg"
              alt="test"
            />
            <div className="owned-title">Book Name</div>
          </div>
        </div>
      </div>
    );
  }
}
