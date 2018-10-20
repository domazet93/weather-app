import React, { Component } from "react";

import classes from "./FilterContainer.module.scss";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

class filterContainer extends Component {
  state = {
    q: ""
  };

  handleQueryChange = event => {
    this.setState({ q: event.target.value });
  };


  render() {
    return (
      <div className={classes.FilterContainer}>
        <div className={classes.InputText}>
          <Input
            label="Enter City"
            type="text"
            changed={this.handleQueryChange}
          />
        </div>
        <div className={classes.Button}>
          <Button
            isDisabled={!this.state.q.length}
            type="Success"
            clicked={() => this.props.onFilterSubmit(this.state)}
          >
            Find
          </Button>
        </div>
      </div>
    );
  }
}
export default filterContainer;
