import React from "react";
import classes from "./Card.module.scss";

import CardTitle from "./CardTitle/CardTitle";
import CardDesc from "./CardDesc/CardDesc";
import CardMedia from "./CardMedia/CardMedia";

const card = props => {
  return ( 
    <div className={classes.Card}>
      <CardTitle title={props.title} /> 
      <CardMedia image={props.image} />
      <CardDesc desc={props.desc} />
    </div>
  );
};

export default card;
