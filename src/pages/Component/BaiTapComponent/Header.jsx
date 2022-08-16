import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="py-5">
          <div className="container px-5">
            <div className="p-5 bg-light rounded-3 text-center">
              <div className="m-5">
                <h1 className="display-5 text-bold">A warm welcome!</h1>
                <p className="fs-4">
                Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
                </p>
                <a href="#" className="btn btn-primary btn-lg">Call to action</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
