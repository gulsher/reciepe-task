import React, { Component } from "react";
import Cards from "./cards/cards";
export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    };
  }

  componentDidMount() {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          details: data
        })
      );
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {this.state.details.map(item => {
              return <Cards name={item.name} img={item.img} price={item.price} discount={item.discount} 
                stdDel={item["standard delivery"]} expDel={item["express delivery"]}
              />;
            })}
          </div>
        </div>
      </>
    );
  }
}
