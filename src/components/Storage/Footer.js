import { useNavigate } from "react-router-dom";
import React from "react";

const Footer = (props) => {
  const navigate = useNavigate(); // Renamed to 'navigate' for clarity

  return (
    <div className="row fixed-bottom">
      <button
        className="btn btn-danger col-2"
        onClick={() => {
          props.resetCart();
        }}
      >
        Reset
      </button>
      <div className="col-8 bg-dark text-white text-center">
        Overall Amount : {props.totalAmount}
      </div>
      <button
        className="btn btn-primary col-2"
        onClick={() => {
          navigate("/");
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Footer;
