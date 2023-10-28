// ProductList.js
import React from "react";
import Product from "./Product.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles

export default function ProductList(props) {
  console.log(props);

  if (props.products.length > 0) {
    return (
      <div className="row g-4 mt-4">
        {props.products.map((product, i) => (
          <div className="col-md-3">
            <Product
              product={product}
              key={i}
              incrementQuantity={props.incrementQuantity}
              decrementQuantity={props.decrementQuantity}
              removeItem={props.removeItem}
              index={i}
            />
          </div>
        ))}
      </div>
    );
  } else {
    toast.error("No Product Exists", {
      position: "top-left ",
      autoClose: 5000, // Notification will be closed after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
}
