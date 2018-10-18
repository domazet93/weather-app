import React, { Component } from "react";
import axios from "./axios/axios-openweather";

import Spinner from "./components/UI/Spinner/Spinner";

import Weather from "./components/Weater/Weather";
import FilterContainer from "./components/Weater/FilterContainer/FilterContainer";

class App extends Component {
  state = {
    weather: [],
    wind: {},
    clouds: {},
    isLoading: false,
    queryParams: {
      q: "Dublin,IE",
      cnt: 5
    }
  };

  componentDidMount() {
    this.getWeatherData(this.state.queryParams);
  }

  getWeatherData = queryParams => {
    this.setState({ isLoading: false }, () => {
      axios
        .get("/forecast", {
          params: {
            ...queryParams,
            APPID: process.env.REACT_APP_API_KEY
          }
        })
        .then(res => {
          let weather = res.data.list.map(e => e.weather[0]);
          this.setState({ weather });
        })
        .catch(err => console.log(err))
        .finally(() => {
          this.setState({ isLoading: true });
        });
    });
  };

  render() {
    let weather = <Spinner />;
    if (this.state.isLoading) {
      weather = <Weather weather={this.state.weather} />;
    }

    return (
      <div>
        <FilterContainer onFilterSubmit={this.getWeatherData} />
        {weather}
      </div>
    );
  }
}

export default App;
