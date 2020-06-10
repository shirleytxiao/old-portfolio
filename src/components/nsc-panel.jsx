import React, { Component } from 'react'

export default class NSCPanel extends Component {
  render() {
    return (
      <div>

        <div className="nsc-panel nsc-panel-compact nsc-hide">
          <div className="nsc-panel-move" />
          <div className="nsc-panel-tooltip">
            <div className="nsc-panel-tooltip-layout" layout="row" layout-align="start center">CTRL+V to toggle the panel</div>
          </div>
          <div className="nsc-panel-layout" flex layout="row" layout-align="start center">
            <div className="nsc-panel-groups" flex layout="row" layout-align="start start">
              {/* group */}
              <div className="nsc-panel-group" flex="none" layout="row" layout-align="start start">
                <div className="nsc-panel-button separated active">
                  <div className="nsc-panel-select" flex layout="row">
                    <div className="nsc-panel-text nsc-noselect" flex layout="row" layout-align="center center">
                      <span className="nsc-icon nsc-icon-cursor-normal" data-i18n="videoPanelSimpleCursor" data-event="nimbus-editor-active-tools" data-event-param="cursorRing">&nbsp;</span>
                    </div>
                    <div className="nsc-panel-trigger">
                      <span className="nsc-icon nsc-icon-arrow">&nbsp;</span>
                    </div>
                  </div>
                  <div className="nsc-panel-dropdown to-top">
                    <ul flex layout="row" layout-align="start center">
                      <li className="nsc-panel-dropdown-icon" flex layout="row" layout-align="start center">
                        <span className="nsc-icon nsc-icon-cursor-shade" data-i18n="videoPanelFocusMouse" data-event="nimbus-editor-active-tools" data-event-param="cursorShadow">&nbsp;</span>
                      </li>
                      <li className="nsc-panel-dropdown-icon" flex layout="row" layout-align="start center">
                        <span className="nsc-icon nsc-icon-cursor-circle" data-i18n="videoPanelAnimatedCursor" data-event="nimbus-editor-active-tools" data-event-param="cursorRing">&nbsp;</span>
                      </li>
                      {/*<li class="nsc-panel-dropdown-icon " flex layout="row" layout-align="start center">*/}
                      {/*<span class="nsc-icon nsc-icon-cursor-tail"></span>*/}
                      {/*</li>*/}
                      {/*<li class="nsc-panel-dropdown-icon " flex layout="row" layout-align="start center">*/}
                      {/*<span class="nsc-icon nsc-icon-cursor-long"></span>*/}
                      {/*</li>*/}
                      <li className="nsc-panel-dropdown-icon" flex layout="row" layout-align="start center">
                        <span className="nsc-icon nsc-icon-cursor-normal" data-i18n="videoPanelSimpleCursor" data-event="nimbus-editor-active-tools" data-event-param="cursorDefault">&nbsp;</span>
                      </li>
                      {/*<li class="nsc-panel-dropdown-icon" flex layout="row" layout-align="start center">*/}
                      {/*<span class="nsc-icon nsc-icon-cursor-none" data-event="nimbus-editor-active-tools" data-event-param="cursorNone"></span>*/}
                      {/*</li>*/}
                    </ul>
                  </div>
                </div>
              </div>
              {/* /group */}
              {/* group */}
              <div className="nsc-panel-group" flex="none" layout="row" layout-align="start start">
                <button className="nsc-panel-button" type="button">
                  <span className="nsc-icon nsc-icon-pen" data-i18n="videoPanelPen" data-event="nimbus-editor-active-tools" data-event-param="pen">&nbsp;</span>
                </button>
                <button className="nsc-panel-button" type="button">
                  <span className="nsc-icon nsc-icon-arrow-line" data-i18n="videoPanelArrow" data-event="nimbus-editor-active-tools" data-event-param="arrow">&nbsp;</span>
                </button>
                <button className="nsc-panel-button" type="button">
                  <span className="nsc-icon nsc-icon-square" data-i18n="videoPanelSquare" data-event="nimbus-editor-active-tools" data-event-param="square">&nbsp;</span>
                </button>
                <div className="nsc-panel-button separated">
                  <div className="nsc-panel-select" flex layout="row">
                    <div className="nsc-panel-text nsc-noselect" flex layout="row" layout-align="center center">
                      <span className="nsc-icon nsc-icon-attention" data-i18n="videoPanelMark" data-event="nimbus-editor-active-tools" data-event-param="notifRed">&nbsp;</span>
                    </div>
                    <div className="nsc-panel-trigger">
                      <span className="nsc-icon nsc-icon-arrow">&nbsp;</span>
                    </div>
                  </div>
                  <div className="nsc-panel-dropdown to-top">
                    <ul flex layout="row" layout-align="start center">
                      <li className="nsc-panel-dropdown-icon" flex layout="row" layout-align="start center">
                        <span className="nsc-icon nsc-icon-attention" data-i18n="videoPanelMark" data-event="nimbus-editor-active-tools" data-event-param="notifRed">&nbsp;</span>
                      </li>
                      <li className="nsc-panel-dropdown-icon" flex layout="row" layout-align="start center">
                        <span className="nsc-icon nsc-icon-question" data-i18n="videoPanelQuestion" data-event="nimbus-editor-active-tools" data-event-param="notifBlue">&nbsp;</span>
                      </li>
                      <li className="nsc-panel-dropdown-icon" flex layout="row" layout-align="start center">
                        <span className="nsc-icon nsc-icon-done" data-i18n="videoPanelCheckmark" data-event="nimbus-editor-active-tools" data-event-param="notifGreen">&nbsp;</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nsc-panel-button assembled">
                  <div className="nsc-panel-select" flex layout="row">
                    <div className="nsc-panel-text nsc-noselect" flex layout="row" layout-align="center center">
                      <span className="nsc-icon nsc-icon-fill-none nsc-panel-icon-fill">
                        <span className="nsc-panel-icon-fill-inner" id="nsc_panel_button_colors" style={{background: '#00FF00'}} data-event="nimbus-editor-active-color" data-event-param="#00FF00">&nbsp;</span>
                      </span>
                    </div>
                    <div className="nsc-panel-trigger">
                      <span className="nsc-icon nsc-icon-arrow">&nbsp;</span>
                    </div>
                  </div>
                  <div className="nsc-panel-dropdown">
                    <div className="nsc-panel-drop-area">
                      <div className="nsc-panel-colors">
                        {/* picked */}
                        <div className="nsc-colors-picked">
                          <div className="nsc-colors-picked-layout" flex layout="row" layout-align="start start" layout-wrap>
                            <div className="nsc-colors-picked-item">
                              <button className="nsc-colors-picked-button" type="button" data-event="nimbus-editor-active-color" data-event-param="#000000">
                                <span className="nsc-colors-picked-button-inner" style={{background: '#000000'}}>&nbsp;</span>
                              </button>
                            </div>
                            <div className="nsc-colors-picked-item">
                              <button className="nsc-colors-picked-button" type="button" data-event="nimbus-editor-active-color" data-event-param="#0000FF">
                                <span className="nsc-colors-picked-button-inner" style={{background: '#0000FF'}}>&nbsp;</span>
                              </button>
                            </div>
                            <div className="nsc-colors-picked-item">
                              <button className="nsc-colors-picked-button" type="button" data-event="nimbus-editor-active-color" data-event-param="#FF00FF">
                                <span className="nsc-colors-picked-button-inner" style={{background: '#FF00FF'}}>&nbsp;</span>
                              </button>
                            </div>
                            <div className="nsc-colors-picked-item">
                              <button className="nsc-colors-picked-button" type="button" data-event="nimbus-editor-active-color" data-event-param="#00FFFF">
                                <span className="nsc-colors-picked-button-inner" style={{background: '#00FFFF'}}>&nbsp;</span>
                              </button>
                            </div>
                            <div className="nsc-colors-picked-item">
                              <button className="nsc-colors-picked-button" type="button" data-event="nimbus-editor-active-color" data-event-param="#00FF00">
                                <span className="nsc-colors-picked-button-inner" style={{background: '#00FF00'}}>&nbsp;</span>
                              </button>
                            </div>
                            <div className="nsc-colors-picked-item">
                              <button className="nsc-colors-picked-button" type="button" data-event="nimbus-editor-active-color" data-event-param="#FFFF00">
                                <span className="nsc-colors-picked-button-inner" style={{background: '#FFFF00'}}>&nbsp;</span>
                              </button>
                            </div>
                            <div className="nsc-colors-picked-item">
                              <button className="nsc-colors-picked-button" type="button" data-event="nimbus-editor-active-color" data-event-param="#FF0000">
                                <span className="nsc-colors-picked-button-inner" style={{background: '#FF0000'}}>&nbsp;</span>
                              </button>
                            </div>
                            <div className="nsc-colors-picked-item">
                              <button className="nsc-colors-picked-button" type="button" data-event="nimbus-editor-active-color" data-event-param="#FFFFFF">
                                <span className="nsc-colors-picked-button-inner" style={{background: '#FFFFFF'}}>&nbsp;</span>
                              </button>
                            </div>
                            {/*<div class="nsc-colors-picked-item">*/}
                            {/*<button class="nsc-colors-picked-button custom" type="button"> */}
                            {/*<i class="nsc-icon ic-color-custom"></i> */}
                            {/*</button>*/}
                            {/*</div>*/}
                          </div>
                        </div>
                        {/* /picked */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /group */}
              {/* group */}
              <div className="nsc-panel-group" flex="none" layout="row" layout-align="start start">
                <button className="nsc-panel-button nsc-hide" type="button">
                  <span className="nsc-icon nsc-icon-eraser" data-i18n="videoPanelClear" data-event="nimbus-editor-active-tools" data-event-param="clear">&nbsp;</span>
                </button>
                <button className="nsc-panel-button" type="button">
                  <span className="nsc-icon nsc-icon-eraser-all" data-i18n="videoPanelClearAll" data-event="nimbus-editor-active-tools" data-event-param="clearAll">&nbsp;</span>
                </button>
                <button className="nsc-panel-button" type="button">
                  <span className="nsc-icon nsc-icon-webcam" data-i18n="videoPanelCamera" id="nimbus_web_camera_toggle">&nbsp;</span>
                </button>
              </div>
              {/* /group */}
            </div>
            <div className="nsc-panel-actions" flex="none" layout="row" layout-align="start center">
              <button className="nsc-panel-button big" type="button" id="nsc_panel_button_play" style={{display: 'none'}}>
                <span className="nsc-icon nsc-icon-play">&nbsp;</span>
              </button>
              <button className="nsc-panel-button big" type="button" id="nsc_panel_button_pause">
                <span className="nsc-icon nsc-icon-pause">&nbsp;</span>
              </button>
              <button className="nsc-panel-button big" type="button" id="nsc_panel_button_stop">
                <span className="nsc-icon nsc-icon-stop">&nbsp;</span>
              </button>
            </div>
            {/* panel togglers */}
            <div className="nsc-panel-togglers" layout="row" layout-align="start center" flex="none">
              <button className="nsc-panel-toggle-button" type="button">
                <span className="nsc-icon nsc-icon-panel-close" data-i18n="videoPanelHideShowPanel">&nbsp;</span>
              </button>
            </div>
            {/* /panel togglers */}
          </div>
        </div>

      </div>
    )
  }
}
