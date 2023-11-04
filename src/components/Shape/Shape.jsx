import React from "react";
import './Shape.scss'
function Shape(props) {
    const classes = 'shape ' + props.className
  return <div className={classes}>{props.children}</div>;
}
export default Shape;