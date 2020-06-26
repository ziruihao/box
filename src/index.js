import React from 'react';

export default class Box extends React.Component {
  render() {
    let style = {};
    if (props.style) {
      style = { ...props.style };
    }
    if (props.row) {
      style.flexDirection = 'row';
    } else if (props.col) {
      style.flexDirection = 'col';
    }
    if (props.justify) {
      switch (props.justify) {
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
    if (props.align) {
      switch (props.align) {
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
    if (props.self) {
      switch (props.self) {
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
    if (props.wrap) {
      style.flexWrap = 'wrap';
    }
    if (props.flex) style.flex = props.flex;
    if (props.width) style.width = props.width;
    if (props.height) style.height = props.height;
    if (props.pad) {
      if (Array.isArray(props.pad)) {
        switch (props.pad.length) {
          case 1:
            style.padding = props.pad[0];
            break;
          case 2:
            style.paddingVertical = props.pad[0];
            style.paddingHorizontal = props.pad[1];
            break;
          case 4:
            style.paddingTop = props.pad[0];
            style.paddingBottom = props.pad[1];
            style.paddingLeft = props.pad[2];
            style.paddingRight = props.pad[3];
            break;
        }
      } else {
        style.padding = props.pad;
      }
    }
    return (
      <div id={props.id ? props.id : null} className={props.className ? props.className : null} style={style}>
        {props.children}
      </div>
    );
  };
}