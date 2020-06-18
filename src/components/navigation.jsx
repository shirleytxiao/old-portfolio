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
                    <li className="active"><a href="https://www.facebook.com/shirleytxiao/">Facebook</a></li>
                    <li className="active"><a href="https://www.linkedin.com/in/s-xiao/">LinkedIn</a></li>
                    <li className="active"><a href="https://www.instagram.com/shrrley/">Instagram</a></li>
                    <li className="active"><a href="http://github.com/stxiao23">Github</a></li>
                    <li className="active"><a href="https://dribbble.com/stxiao">Dribbble</a></li>
                    <li className="active"><a href="mailto:stxiao@berkeley.edu">Email</a></li>
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