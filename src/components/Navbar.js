import React from "react";
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
        <a
          className="navbar-brand ms-4"
          href="https://source.unsplash.com/random/?vending,candy"
        >
          Vendiram
        </a>
      </div>
      <div className="justify-content-md-end col-2">
        <button
          className="btn btn-warning col-4 me-md-4"
          onClick={() => {
            props.resetQuantity();
          }}
        >
          Reset
        </button>
        <div className="col-3 mx-auto  text-white fixed-top">
          <span className="badge bg-info col-12">
            <h5>Total = ₹ {props.totalAmt}</h5>
          </span>
        </div>
      </div>
    </nav>
  );
}
