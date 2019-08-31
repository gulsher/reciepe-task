import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center jumbotron">
        <h1 className="pt-5 text-danger font-weight-bold">
          Welcome to Online Shopping Store
        </h1>
        <NavLink to="/store" className="btn btn-primary" > Click here to go to store </NavLink>
      </div>
    </>
  );
};

export default Home;
