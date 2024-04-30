import React from "react";
import { Button } from "react-bootstrap";

function Payment() {
  const computeTotal = () => {
    let sum = 0;
    for (const product of cartDetail) {
      sum += product.quantity * product.price;
    }
    return sum;
  };
  return (
    <>
      <h1>Payment</h1>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Gpay
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Phonepay
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Cash on Delivery
        </label>
      </div>
      <div>Total : {computeTotal()}</div>
      <div><Button>Order</Button></div>
    </>
  );
}
export default Payment;
