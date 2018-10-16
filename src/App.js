import React, { Component } from "react";
import axios from "./axios/axios-openweather";
class App extends Component {
  componentDidMount() {
    axios
      .get("/forecast", {
        params: { 
          q: "München",
          appid: process.env.REACT_APP_API_KEY
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return <p>Hello</p>;
  }
}

export default App;
