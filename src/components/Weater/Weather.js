import React from "react";

import Card from "../UI/Card/Card";

import classes from "./Weather.module.scss";
import moment from "moment";

const weather = props => {
  let forecast5Days = {};

  let days = new Set(props.weather.map(e => moment.unix(e.dt).day()));
  for (let day of days.values()) {
    forecast5Days[day] = [];
  }
  props.weather.forEach(e => forecast5Days[moment.unix(e.dt).day()].push(e.dt));

  let noon = 12;
  for (let day in forecast5Days) {
    forecast5Days[day] = forecast5Days[day].reduce((prev, curr) => {
      return Math.abs(moment.unix(curr).hour() - noon) <
        Math.abs(moment.unix(prev).hour() - noon)
        ? curr
        : prev;
    });
  }

  let dailyWeatherList = props.weather.filter(e =>
    Object.values(forecast5Days).includes(e.dt)
  );
  let weather = dailyWeatherList.map((e, index) => {
    let time = moment.unix(e.dt).format("dddd");

    return (
      <div className={classes.Card} key={index}>
        <Card
          key={index}
          title={time}
          image={`http://openweathermap.org/img/w/${e.weather[0].icon}.png`}
          desc={e.weather[0].icon}
        />
      </div>
    );
  });
  return <div className={classes.Weather}>{weather}</div>;
};

export default weather;
