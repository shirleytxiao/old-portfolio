import React, { Component } from 'react'

export default class NSCContentCamera extends Component {
  render() {
    return (
      <div>

        <div className="nsc-content-camera nsc-hide">
          <div className="nsc-content-camera-buttons" flex="none" layout="row" layout-align="start start">
            <button className="nsc-content-camera-button" type="button" id="nsc_video_camera_collapse" style={{display: 'none'}}>
              <span className="nsc-icon nsc-icon-panel-collapse" />
            </button>
            <button className="nsc-content-camera-button" type="button" id="nsc_video_camera_expand">
              <span className="nsc-icon nsc-icon-panel-expand" />
            </button>
            <button className="nsc-content-camera-button" type="button" id="nsc_video_camera_close">
              <span className="nsc-icon nsc-icon-panel-close" />
            </button>
          </div>
          <div className="nsc-content-camera-container">
            <div className="nsc-content-camera-shadow" />
          </div>
        </div>

      </div>
    )
  }
}
