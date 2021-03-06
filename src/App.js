import React, { Component } from "react";
import axios from "./axios/axios-openweather";

import Spinner from "./components/UI/Spinner/Spinner";
import NoData from "./components/UI/NoData/NoData";

import Weather from "./components/Weater/Weather";
import FilterContainer from "./components/Weater/FilterContainer/FilterContainer";

class App extends Component {
  state = {
    weather: [],
    isLoading: false,
    queryParams: {
      q: ""
    }
  };

  componentDidMount() {
    if(!this.state.queryParams.q) { return; }
    this.getWeatherData();
  }

  getWeatherData = queryParams => {
    this.setState({ isLoading: true, weather: [], queryParams }, () => {
      axios
        .get("/forecast", {
          params: {
            ...queryParams,
            APPID: process.env.REACT_APP_API_KEY
          }
        })
        .then(res => {
          const weather = res.data.list;
          this.setState({ weather });
        })
        .catch(error => null)
        .finally(() => {
          this.setState({ isLoading: false });
        });
    });
  };

  render() {
    let weather = <Spinner />;
    if (!this.state.isLoading) {
      weather = this.state.weather.length ? (
        <Weather weather={this.state.weather} />
      ) : (
        <NoData />
      );
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
