import React, { Component } from 'react'

export default class NSCVideoEditor extends Component {
  render() {
    return (
      <div>

        <div className="nsc-video-editor nsc-hide events" style={{width: '707px', height: '12241px'}}><canvas width={707} height={12241} style={{width: '707px', height: '12241px', position: 'absolute', top: '0px', left: '0px', zIndex: 0}} /><canvas width={707} height={12241} style={{width: '707px', height: '12241px', position: 'absolute', top: '0px', left: '0px', zIndex: 1}} /><canvas width={707} height={12241} style={{width: '707px', height: '12241px', position: 'absolute', top: '0px', left: '0px', zIndex: 2}} /></div>

      </div>
    )
  }
}
