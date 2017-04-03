import React from 'react';
import './BottomBar.css';

export class BottomBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default bottom-bar">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <button type="button">
                <i className="fa fa-home"></i>
              </button>
              <button type="button">
                <i className="fa fa-search"></i>
              </button>
              <button type="button">
                <i className="fa fa-plus-square"></i>
              </button>
              <button type="button">
                <i className="fa fa-heart"></i>
              </button>
              <button type="button">
                <i className="fa fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
