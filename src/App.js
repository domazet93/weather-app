import React, { Component } from "react";
import axios from "./axios/axios-openweather";

import Spinner from "./components/UI/Spinner/Spinner";
import Weather from "./components/Weater/Weather";

class App extends Component {
  state = {
    weather: [],
    wind: {},
    clouds: {},
    isLoaded: false
  };

  componentDidMount() {
  
    axios
      .get("/forecast", {
        params: {
          q: "Dublin,IE",
          cnt: 5,
          APPID: process.env.REACT_APP_API_KEY
        }
      })
      .then(res => {
        let weather = res.data.list.map((e) => e.weather[0])
        this.setState({ weather });
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({ isLoaded: true });
      });
  }

  render() {
    let weather = <Spinner />;
    if (this.state.isLoaded) {
      weather = <Weather weather={this.state.weather}></Weather>
    }

    return <div>{weather}</div>
  }
}

export default App;
