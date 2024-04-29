import React, { useContext } from "react";
import { CartDetails } from "./App";
import Button from "react-bootstrap/Button";

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
    }else{
      const updatedCartDetail = cartDetail.filter((product) => product.id !== id);
      setCartDetail(updatedCartDetail);
    }
  };

  const computeTotal = () => {
    let sum = 0;
    for(const product of cartDetail){
      sum += (product.quantity * product.price);
    }
    return sum;
  }

  return (
    <>
      <div>
        <h1>Cart</h1>
      </div>
      {
        cartDetail.map((product, index) => (
          <div key={index}>
            {`${product.name} - ${product.size} - Rs. ${product.price} - Quantity: ${product.quantity}`}
            <span>
              <Button
                className="ms-2"
                onClick={() => {
                  addQuantityHandler(product.id);
                }}
              >
                Add
              </Button>
            </span>
            <span>
              <Button
                className="ms-2"
                onClick={() => {
                  removeQuantityHandler(product.id);
                }}
              >
                Remove
              </Button>
            </span>
          </div>
        ))}
        <div>Sum: {computeTotal()}</div>
    </>
  );
}
export default Cart;
