import React from "react";
import { useContext, useState } from "react";
import { CartDetails } from "./App";
import {
  Form,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import "./PaymentGateway.css";

function PaymentGateway() {

  const [selectedOption, setSelectedOption] = useState(null);

  const { cartDetail } = useContext(CartDetails);
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
      <div className="d-flex justify-content-center">
        <Form className="form-layout">
          <fieldset>
            <FormLabel as="legend">Select Payment Option:</FormLabel>
            <Form.Group>
              <Form.Check
                name="paymentOption"
                type="radio"
                id={`gpay`}
                label={`GPay`}
                value='gpay'
                onChange={(e)=>{
                  setSelectedOption(e.target.value)
                }}
              />
              {selectedOption === "gpay" && (
              <FormControl
                type="text"
                placeholder="Enter GPay ID"
                maxLength={16}
              />
            )}
            </Form.Group>
            <Form.Group>
              <Form.Check
                name="paymentOption"
                type="radio"
                id={`phonepay`}
                label={`PhonePay`}
                value="phonepay"
                onChange={(e)=>{
                  setSelectedOption(e.target.value)
                }}
              />
              {selectedOption === "phonepay" && (
              <FormControl
                type="text"
                placeholder="Enter PhonePay ID"
                maxLength={16}
              />
            )}
            </Form.Group>
            <Form.Group>
              <Form.Check
                name="paymentOption"
                type="radio"
                id={`cod`}
                label={`Cash-on-delivery`}
                value='cod'
                onChange={(e)=>{
                  setSelectedOption(e.target.value)
                }}
              />
            </Form.Group>
          </fieldset>
        </Form>
      </div>

      <div>Total : {computeTotal()}</div>
      <div>
        <Button>Order</Button>
      </div>
    </>
  );
}
export default PaymentGateway;