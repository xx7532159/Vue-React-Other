import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Hammer from 'react-hammerjs';
import { getDeepObjectData, computeSchTypeColor } from '@/Js/utils';
import Style from '../calendar.scss';

class DayBox extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     clickClassName: ''
  //   };
  // }
  render() {
    const date = this.props.date, schData = this.props.schData;
    const year = date.getFullYear(), month = date.getMonth() + 1;
    const curDaySchData = getDeepObjectData([year, month, this.props.day], schData) || [];
    let clickActive = '';
    if(this.props.isActiveRow === true && this.props.activeBoxIndex === this.props.boxKey) {
      clickActive = Style['cd-day-box-click-active'];
    }
    const className = (curDaySchData.length > 0 ? (Style['cd-day-box-active'] + ' ') : '') + clickActive;
    return (
    <Hammer onTap={this.onTap}>
      <div className={className}>
        <div>{this.props.day}</div>
        {curDaySchData.map((val, index) => {
          return <div key={index} styleName="cd-day-box-sch" style={{backgroundColor: computeSchTypeColor(val.type)}}>{val.theme}</div>;
        })}
      </div>
    </Hammer>
    );
  }
  onTap= () => {
    const day = this.props.day;
    if(day !== '') {
      // this.setState({
      //   clickClassName: Style['cd-day-box-click-active']
      // });
      const boxKey = this.props.activeBoxIndex === this.props.boxKey ? undefined : this.props.boxKey;
      this.props.onTap(day, boxKey);
    }
  }
}

export default CSSModules(DayBox, Style);
