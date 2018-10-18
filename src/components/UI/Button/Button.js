import React from "react";
import classes from "./Button.module.scss";

const button = props => (
  <button
    type="button"
    disabled={props.isDisabled}
    className={[classes.Button, classes[props.type]].join(" ")}
    onClick={props.clicked}>
    {props.children}
  </button>
);

export default button;
