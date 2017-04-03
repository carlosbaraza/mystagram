import React from 'react';
import './Navbar.css';

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="navbar-header">
                <button type="button">
                  <i className="fa fa-camera"></i>
                </button>
                <a className="navbar-brand" href="#">Mystagram</a>
                <button type="button">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
