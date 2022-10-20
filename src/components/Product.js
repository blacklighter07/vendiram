import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-2">
      <div className="container ">
        <hr />
        <div className="card" style={{ width: 1100, height: 200 }}>
          <div className="row no-gutters">
            <div className="col-sm-5">
              <img
                className="card-img"
                src="https://source.unsplash.com/random/300x150/?chips,candy,lollipop,coke"
                alt="Phone"
              />
            </div>
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title">
                  {props.product.name}{" "}
                  <span className="badge bg-secondary">
                    ₹ {props.product.price}
                  </span>
                </h5>
                <div className="col-3">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        props.decrementQuantity(props.index);
                      }}
                    >
                      -
                    </button>
                    <button type="button" className="btn btn-warning">
                      {props.product.quantity}
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => {
                        props.incrementQuantity(props.index);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="col-4 mt-3">
                  <h5><span className="badge bg-secondary">
                    ₹ {props.product.quantity * props.product.price}
                  </span></h5>
                </div>
                <button
                  className="col-8 mt-3 btn btn-danger"
                  onClick={() => {
                    props.removeItem(props.index);
                  }}
                >
                  Remove
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
