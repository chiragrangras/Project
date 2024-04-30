import React, { useContext } from "react";
import { CartDetails } from "./App";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import Header from "./Header";

function Cart() {
  const { cartDetail, setCartDetail } = useContext(CartDetails);

  const addQuantityHandler = (id) => {
    const foundProduct = cartDetail.find((product) => product.id === id);
    foundProduct.quantity++;
    setCartDetail([...cartDetail]);
  };

  const removeQuantityHandler = (id) => {
    const foundProduct = cartDetail.find((product) => product.id === id);
    if (foundProduct.quantity > 1) {
      foundProduct.quantity--;
      setCartDetail([...cartDetail]);
    } else {
      const updatedCartDetail = cartDetail.filter(
        (product) => product.id !== id
      );
      setCartDetail(updatedCartDetail);
    }
  };

  const computeTotal = () => {
    let sum = 0;
    for (const product of cartDetail) {
      sum += product.quantity * product.price;
    }
    return sum;
  };

  return (
    <>
      <Header />
      <div className="cart">
        <div>
          <h1>Cart items</h1>
        </div>
        <div className="line"/>
        {cartDetail.map((product, index) => (
          <div key={index}>
            {`${product.name} - ${product.size} - Rs. ${product.price} - Quantity: ${product.quantity}`}
            <span>
              <Button
                className="ms-2 mt-2"
                onClick={() => {
                  addQuantityHandler(product.id);
                }}
              >
                Add
              </Button>
            </span>
            <span>
              <Button
                className="ms-2 mt-2"
                onClick={() => {
                  removeQuantityHandler(product.id);
                }}
              >
                Remove
              </Button>
            </span>
          </div>
        ))}
        <div className="ms-2 mt-2">Total Price: {computeTotal()}</div>
        <div><Button className="ms-2 mt-2">Payment</Button></div>
      </div>
      <Footer />
    </>
  );
}
export default Cart;