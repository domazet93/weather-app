import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Weather.module.scss";

const weather = props => {
  let weather = props.weather.map((e, index) => (
    <Card
      key={index}
      title={e.main}
      image={`http://openweathermap.org/img/w/${e.icon}.png`}
      desc={e.description}
    />
  ));

  return <div className={classes.Weather}>{weather}</div>;
};

export default weather;
