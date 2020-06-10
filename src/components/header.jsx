import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>

        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="colorlib-navbar-brand">
                  <a className="colorlib-logo" href="index.html"><span>No</span><span>ah</span></a>
                </div>
                <a href="/#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
              </div>
            </div>
          </div>
        </header>

      </div>
    )
  }
}