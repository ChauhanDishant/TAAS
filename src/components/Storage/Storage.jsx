import React, { useState } from "react";
import { Navbars } from "./navbar"; // Import your Navbar component
import ProductList from "./ProductList";
import Footer from "./Footer";
import AddItems from "./AddItems";

export const Storage = () => {
  const productList = [
    {
      price: 40,
      name: "Carrots",
      quantity: 0,
      image:
        "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2017/07/coloredCarrots-022521-LD-770x533-1.jpg",
    },
    {
      price: 55,
      name: "Tomatoes",
      quantity: 0,
      image:
        "https://www.foodrepublic.com/img/gallery/13-things-you-didnt-know-about-tomatoes/intro-1684521109.jpg",
    },
    {
      price: 35,
      name: "Spinach",
      quantity: 0,
      image:
        "https://gabbarfarms.com/cdn/shop/products/Spinach_1000x.jpg?v=1620713074",
    },
    {
      price: 20,
      name: "Potatoes",
      quantity: 0,
      image:
        "https://m.media-amazon.com/images/I/313dtY-LOEL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      price: 40,
      name: "Bell Peppers",
      quantity: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJRkdpi9Z49hycSx9iWEFC3P_35PXvd8CAQ&usqp=CAU",
    },
    {
      price: 80,
      name: "Cucumbers",
      quantity: 0,
      image:
        "https://www.mashed.com/img/gallery/how-to-keep-cucumbers-fresh/intro-1638303291.jpg",
    },
    {
      price: 25,
      name: "Broccoli",
      quantity: 0,
      image:
        "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2021/07/383439-grt-Broccoli-Benefits-732x549-thumbnail-732x549.jpg",
    },
    {
      price: 30,
      name: "Lettuce",
      quantity: 0,
      image: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg",
    },
  ];

  const [products, setProducts] = useState(productList);
  const [price, setPrice] = useState(productList);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;

    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;

    setTotalAmount(newTotalAmount);
    setProducts(newProductList);
  };

  const resetCart = () => {
    let newProductList = [...products];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProducts(newProductList);

    setTotalAmount(0);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...products];
    newProductList[index].quantity--;
    let newTotalAmount = totalAmount - newProductList[index].price;

    if (newTotalAmount < 0) {
      newTotalAmount = 0;
    }

    if (newProductList[index].quantity < 0) {
      newProductList[index].quantity = 0;
    }

    setTotalAmount(newTotalAmount);
    setProducts(newProductList);
  };

  const removeItem = (index) => {
    let newProductList = [...products];
    let newTotalAmount =
      totalAmount -
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);

    setProducts(newProductList);
    setTotalAmount(newTotalAmount < 0 ? 0 : newTotalAmount);
  };

  const addItem = (name, price, quantity) => {
    let newProductList = [...products];
    let newItem = {
      name: name,
      price: price,
      quantity: quantity,
      image: "path/to/default.jpg", // Provide the default image path for new products
    };
    newProductList.push(newItem);
    setProducts(newProductList);
  };

  return (
    <>
      <Navbars />
      <main className="container mt-2">
        <AddItems addItem={addItem} />
        <ProductList
          products={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetCart={resetCart} />
    </>
  );
};
