import React, { Component } from "react";
import axios from "./axios/axios-openweather";

import Spinner from "./components/UI/Spinner/Spinner";

class App extends Component {
  state = {
    forecastList: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get("/find", {
        params: {
          q: "Dublin",
          appid: process.env.REACT_APP_API_KEY
        }
      })
      .then(res => {
        this.setState({ forecastList: res.data.list });
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({ isLoaded: true });
      });
  }

  render() {
    let data = <Spinner />;
    if (this.state.isLoaded) {
      data = "Loaded";
    }

    return <div>{data}</div>;
  }
}

export default App;
