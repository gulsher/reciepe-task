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
                    <b>price:</b> Rs {price} discount: {discount}
                  </p>
                  <p>delivery:{stdDel}</p>
                  <p>Express delivery: {expDel}</p>
                  <button href="#" class="bn">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
        </>
    )
}
