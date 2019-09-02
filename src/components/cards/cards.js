import React from "react";
import Select from "react-select";
export default function Cards(props) {
  const { name, img, price, discount, stdDel, expDel } = props;
  let options = [
    {
      value: "500gm Rs 13/-",
      label : "500gm Rs 13/-"
    },
    {
      value: "1kg Rs 26/-",
      label : "1kg Rs 26/-"
    },

  ];
  return (
    <>
      <div className="col-3">
        <div class="card mt-5 text-center">
          <img src={`${img}`} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p className="banner"> discount: {discount} </p>
            <Select options={options}
            placeholder = "500gm Rs 13/-"
            />
            <p class="card-text">
              <span className="price">price: Rs {price} /-</span> <br />
              delivery :<i class="fa fa-truck" aria-hidden="true"></i> {stdDel}{" "}
              <br />
              Express delivery:{" "}
              <i class="fa fa-motorcycle" aria-hidden="true"></i> {expDel}
            </p>
            <input type ="number" placeholder="Qty" className="qty" />
            <button href="#" class="bn">
              <i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
