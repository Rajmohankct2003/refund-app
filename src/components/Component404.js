import React, { Component } from "react";

//component to display error message when user gives wrong path in the url
export default class Component404 extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h1 className="center">Oops!!! error page not found</h1>
        <h3 className="center">
          Requested url
          <span>{this.props.location.pathname}</span>{" "}
          was not found
        </h3>
      </React.Fragment>
    );
  }
}
