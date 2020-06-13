import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav id="colorlib-main-nav" role="navigation">
          <a href="/#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
          <div className="colorlib-table">
            <div className="colorlib-table-cell">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li className="active"><a href="#projects">Projects</a></li>
                    <li className="active"><a href="#experence">Experience</a></li>
                    <li className="active"><a href="#about">About</a></li>
                    <li className="active"><a href="pdfs/SX_Resume.pdf">Resume</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      )
  }
}