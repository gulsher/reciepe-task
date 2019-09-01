import React from 'react'

export default function Cards(props) {
  const  {name , img , price, discount ,stdDel ,expDel} = props;
    return (
        <>
            <div className="col-3">
              <div class="card mt-5 text-center">
                <img src={`${img}`} class="card-img-top"  />
                <div class="card-body">
                  <h5 class="card-title">{name}</h5>
                  <p class="card-text">
                    price: {price} discount: {discount}
                  </p>
                  <p>delivery:{stdDel}</p>
                  <p>Express delivery: {expDel}</p>
                  <a href="#" class="btn btn-primary">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
        </>
    )
}
