import React, { useState } from "react";
import "./AddItems.css";

const AddItems = (props) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [productImage, setProductImage] = useState(null);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductQuantityChange = (e) => {
    setProductQuantity(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const blobUrl = URL.createObjectURL(file); // Create a blob URL for the image file
        setProductImage(blobUrl); // Set productImage state with the blob URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", parseFloat(productPrice));
    formData.append("quantity", parseInt(productQuantity));
    formData.append("image", productImage);

    props.addItem(formData);
    setProductName("");
    setProductPrice(0);
    setProductQuantity(0);
    setProductImage(null);
  };
  return (
    <>
      <form className="row g-3 form">
        <div className="mb-3 col-md-3">
          <label htmlFor="inputName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="productName"
            value={productName}
            onChange={handleProductNameChange}
            required
          />
        </div>
        <div className="mb-3 col-md-2">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            value={productPrice}
            onChange={handleProductPriceChange}
            required
          />
        </div>
        <div className="mb-3 col-md-2">
          <label htmlFor="price" className="form-label">
            Quantity
          </label>

          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            value={productQuantity}
            onChange={handleProductQuantityChange}
            required
          />
        </div>
        <div className="mb-3 col-md-3">
          <label htmlFor="image" className="form-label">
            Product Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-3 col-md-2">
          <button
            type="submit"
            className="sub btn-primary"
            onClick={handleAddItem}
          >
            Add Item
          </button>
        </div>
      </form>
    </>
  );
};

export default AddItems;
