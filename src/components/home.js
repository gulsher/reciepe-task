import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center jumbotron">
        <div className = "container ">
        <h1 className="text-danger font-weight-bold align-middle">
          Welcome to Online Shopping Store
        </h1>
        <NavLink to="/store" className="btn btn-lg btn-primary mt-5" > Click here to go to store </NavLink>
      </div>
      </div> 
    </>
  );
};

export default Home;
