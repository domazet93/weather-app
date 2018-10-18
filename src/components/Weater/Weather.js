import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Weather.module.scss";

const weather = props => {
  console.log(classes);
  let weather = props.weather.map((e, index) => (
    <div className={classes.Card} key={index}>
      <Card
        key={index}
        title={e.main}
        image={`http://openweathermap.org/img/w/${e.icon}.png`}
        desc={e.description}
      />
    </div>
  ));

  return <div className={classes.Weather}>{weather}</div>;
};

export default weather;
