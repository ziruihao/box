import React from 'react';

export default class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let style = { display: 'flex' };
    if (this.props.style) {
      style = { ...this.props.style };
    }
    if (this.props.row) {
      style.flexDirection = 'row';
    } else if (this.props.col) {
      style.flexDirection = 'column';
    }
    if (this.props.justify) {
      switch (this.props.justify) {
        case 'start':
          style.justifyContent = 'flex-start';
          break;
        case 'end':
          style.justifyContent = 'flex-end';
          break;
        case 'center':
          style.justifyContent = 'center';
          break;
        case 'between':
          style.justifyContent = 'space-between';
          break;
        case 'around':
          style.justifyContent = 'space-around';
          break;
      }
    }
    if (this.props.align) {
      switch (this.props.align) {
        case 'start':
          style.alignItems = 'flex-start';
          break;
        case 'end':
          style.alignItems = 'flex-end';
          break;
        case 'center':
          style.alignItems = 'center';
          break;
        case 'stretch':
          style.alignItems = 'stretch';
          break;
      }
    }
    if (this.props.self) {
      switch (this.props.self) {
        case 'start':
          style.alignSelf = 'flex-start';
          break;
        case 'end':
          style.alignSelf = 'flex-end';
          break;
        case 'center':
          style.alignSelf = 'center';
          break;
        case 'stretch':
          style.alignSelf = 'stretch';
          break;
      }
    }
    if (this.props.wrap) {
      style.flexWrap = 'wrap';
    }
    if (this.props.flex) style.flex = this.props.flex;
    if (this.props.width) style.width = this.props.width;
    if (this.props.height) style.height = this.props.height;
    if (this.props.pad) {
      if (Array.isArray(this.props.pad)) {
        switch (this.props.pad.length) {
          case 1:
            style.padding = this.props.pad[0];
            break;
          case 2:
            style.paddingVertical = this.props.pad[0];
            style.paddingHorizontal = this.props.pad[1];
            break;
          case 4:
            style.paddingTop = this.props.pad[0];
            style.paddingBottom = this.props.pad[1];
            style.paddingLeft = this.props.pad[2];
            style.paddingRight = this.props.pad[3];
            break;
        }
      } else {
        style.padding = this.props.pad;
      }
    }
    return (
      <div id={this.props.id ? this.props.id : null} className={this.props.className ? this.props.className : null} style={style}>
        {this.props.children}
      </div>
    );
  };
}