import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="card">
      <img
        src={props.product.image}
        className="card-image"
        alt={props.product.name}
      />
      <div className="card-content">
        <h5 className="card-title card-name">{props.product.name}</h5>
        <p className="card-price">
          ₹{props.product.price} <span>per Kg</span>
        </p>
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
        <div className="product">
          <span className="pr">Total Amount : </span>
          {props.product.quantity * props.product.price}
        </div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={() => props.removeItem(props.index)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
