import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./Auction.module.css"; // Import your CSS module
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/Auction";

export const Auction = () => {
  const navigate = useNavigate();

  const [farmerDetails, setFarmerDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    farmName: "",
    farmerIDCard: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, farmerDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Form submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/Storage");
      console.log("Data sent to server:", response.data);
    } catch (error) {
      console.error("Error sending data to server:", error);

      toast.error("Error submitting form. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmerDetails((prevFarmerDetails) => ({
      ...prevFarmerDetails,
      [name]: value,
    }));
  };

  return (
    <div className={classes.background_container}>
      <div className={classes.container}>
        <h1 className={classes.form_title}>Register Here</h1>
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Farmer Name"
            value={farmerDetails.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Farmer Email"
            value={farmerDetails.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Farmer Address"
            value={farmerDetails.address}
            onChange={handleChange}
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder="Farmer Phone Number"
            value={farmerDetails.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="farmName"
            placeholder="Farm Name"
            value={farmerDetails.farmName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="farmerIDCard"
            placeholder="Farmer ID-Card Number"
            value={farmerDetails.farmerIDCard}
            onChange={handleChange}
            required
          />
          <button className={classes.button} type="submit">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
