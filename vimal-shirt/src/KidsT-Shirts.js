import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button, Card, CardBody } from "react-bootstrap";
import "./Kids.css";

function KidsTShits() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-column gap-5 p-5">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" />
          <img
            data-variants=""
            class="spf-product-card__image spf-product-card__image-main lazyautosizes ls-is-cached lazyloaded"
            src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T_PRINT_77_PINK_01_1_360x493.jpg?v=1712733414"
            data-sizes="auto"
            data-aspectratio="0.75"
            data-parent-fit="contain"
            alt=""
          ></img>
          <CardBody>
            <Card.Title>
              <a href="#" className="link-dark text-decoration-none">
                Pink Regular T-shirts For Kids
              </a>
            </Card.Title>
            <p className="price-kids">Rs.199</p>
            <div className="d-flex justify-content-around">
              <Button className="btn btn-light border border-2">2-3Y</Button>
              <Button className="btn btn-light border border-2">3-4Y</Button>
              <Button className="btn btn-light border border-2">4-5Y</Button>
              <Button className="btn btn-light border border-2">5-6Y</Button>
              <Button className="btn btn-light border border-2">6-7Y</Button>
              <Button className="btn btn-light border border-2">7-8Y</Button>
            </div>
            <div className="d-flex mt-3 justify-content-around">
              <Button className="btn btn-light border border-2">8-9Y</Button>
              <Button className="btn btn-light border border-2">9-10Y</Button>
              <Button className="btn btn-light border border-2">10-11Y</Button>
              <Button className="btn btn-light border border-2">11-12Y</Button>
              <Button className="btn btn-light border border-2">12-13Y</Button>
            </div>
            <div className="d-flex mt-3 gap-2">
              <Button className="btn btn-light border border-2">13-14Y</Button>
              <Button className="btn btn-light border border-2">14-15Y</Button>
              <Button className="btn btn-light border border-2">15-16Y</Button>
            </div>
          </CardBody>
          <CardBody>
            <div className="box-pink"></div>
            <Button variant="primary">Add to Cart</Button>
          </CardBody>
        </Card>
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" />
          <img
            data-variants=""
            class="spf-product-card__image spf-product-card__image-main lazyautosizes ls-is-cached lazyloaded"
            src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T_PRINT_76_RUST_01_1_360x493.jpg?v=1712733401"
            data-sizes="auto"
            data-aspectratio="0.75"
            data-parent-fit="contain"
            alt=""
          ></img>
          <CardBody>
            <Card.Title>
              <a href="#" className="link-dark text-decoration-none">
                Rust Regular Fit Cotton blended T-shirts For Kids
              </a>
            </Card.Title>
            <p className="price-kids">Rs.199</p>
            <div className="d-flex justify-content-around">
              <Button className="btn btn-light border border-2">2-3Y</Button>
              <Button className="btn btn-light border border-2">3-4Y</Button>
              <Button className="btn btn-light border border-2">4-5Y</Button>
              <Button className="btn btn-light border border-2">5-6Y</Button>
              <Button className="btn btn-light border border-2">6-7Y</Button>
              <Button className="btn btn-light border border-2">7-8Y</Button>
            </div>
            <div className="d-flex mt-3 justify-content-around">
              <Button className="btn btn-light border border-2">8-9Y</Button>
              <Button className="btn btn-light border border-2">9-10Y</Button>
              <Button className="btn btn-light border border-2">10-11Y</Button>
              <Button className="btn btn-light border border-2">11-12Y</Button>
              <Button className="btn btn-light border border-2">12-13Y</Button>
            </div>
            <div className="d-flex mt-3 gap-2">
              <Button className="btn btn-light border border-2">13-14Y</Button>
              <Button className="btn btn-light border border-2">14-15Y</Button>
              <Button className="btn btn-light border border-2">15-16Y</Button>
            </div>
          </CardBody>
          <CardBody>
            <div className="box-orange"></div>
            <Button variant="primary">Add to Cart</Button>
          </CardBody>
        </Card>
        {/* <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" />
          <img
            data-variants=""
            class="spf-product-card__image spf-product-card__image-main lazyautosizes ls-is-cached lazyloaded"
            src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T_PRINT_77_PINK_01_1_360x493.jpg?v=1712733414"
            data-sizes="auto"
            data-aspectratio="0.75"
            data-parent-fit="contain"
            alt=""
          ></img>
          <CardBody>
            <Card.Title>
              <a href="#" className="link-dark text-decoration-none">
              Pink Regular Fit Cotton blended T-shirts For Kids
              </a>
            </Card.Title>
            <p className="price-kids">Rs.199</p>
            <div className="d-flex justify-content-around">
                <Button className="btn btn-light border border-2">2-3Y</Button>
                <Button className="btn btn-light border border-2">3-4Y</Button>
                <Button className="btn btn-light border border-2">4-5Y</Button>
                <Button className="btn btn-light border border-2">5-6Y</Button>
                <Button className="btn btn-light border border-2">6-7Y</Button>
                <Button className="btn btn-light border border-2">7-8Y</Button>
            </div>
            <div className="d-flex mt-3 justify-content-around">
                <Button className="btn btn-light border border-2">8-9Y</Button>
                <Button className="btn btn-light border border-2">9-10Y</Button>
                <Button className="btn btn-light border border-2">10-11Y</Button>
                <Button className="btn btn-light border border-2">11-12Y</Button>
                <Button className="btn btn-light border border-2">12-13Y</Button>
            </div>
            <div className="d-flex mt-3 gap-2">
                <Button className="btn btn-light border border-2">13-14Y</Button>
                <Button className="btn btn-light border border-2">14-15Y</Button>
                <Button className="btn btn-light border border-2">15-16Y</Button>
            </div>
          </CardBody>
          <CardBody>
          <div className="box-pink"></div>
          <Button variant="primary">Add to Cart</Button>
          </CardBody>
        </Card> */}
      </div>
      <Footer />
    </>
  );
}
export default KidsTShits;
