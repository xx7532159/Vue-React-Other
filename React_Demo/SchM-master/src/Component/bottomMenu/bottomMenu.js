import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
// import Hammer from 'react-hammerjs';
import Style from './bottomMenu.scss';

class BottomMenu extends Component {
  render() {
    return (
      <div styleName="bottom-menu">
        <div styleName="bottom-menu-icon">
          <div styleName="bottom-menu-sch"></div>
          <span>日程</span>
        </div>
        <div>
          <Link to="/newSchedule"><div styleName="bottom-menu-add"></div></Link>
        </div>
        <div styleName="bottom-menu-icon">
          <div styleName="bottom-menu-info"></div>
          <span>消息</span>
        </div>
      </div>
    );
  }
}

export default CSSModules(BottomMenu, Style, {allowMultiple: true});
