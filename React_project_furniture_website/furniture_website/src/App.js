import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Blog from "./Blog";
import Stories from "./Stories";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-color">
        <Container fluid>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120px"
              height="55px"
              color="#F39293"
              fill="#F39293"
              viewBox="0 0 134 52"
            >
              <g fill="#F39293" clip-path="url(#a)">
                <path d="M31.7 24.9v3.7h14.7c.9 0 1.6-.7 1.6-1.6V14.8c0-.5-.2-.9-.6-1.2L38 7.4c-.5-.4-1.3-.5-1.9-.1l-9.4 6.4c-.4.3-.6.8-.6 1.3v20.3H10.9v-9l7.3-4.6 5.8 3.9v-4.5l-5-3.4c-.6-.4-1.4-.4-1.9.1L7.8 24c-.4.3-.6.8-.6 1.2v12.1c0 .9.7 1.6 1.6 1.6h19.1c1 0 1.8-.8 1.8-1.8v-21l7.3-4.9 7.3 4.6v9H31.7v.1ZM89.4 42.2c-1.4 0-2.2-.8-2.3-2.2h8.3v-1c0-3.5-2.2-5.6-6.1-5.6-3.5 0-6 2.2-6 5.8 0 3.5 2.3 5.9 6.1 5.9 3.5 0 5.7-1.7 6-4.2h-3.8c-.2.8-1 1.3-2.2 1.3Zm-.1-6c1.3 0 2.2.7 2.3 1.9H87c.1-1.2 1-1.9 2.3-1.9ZM98.7 33.4v.2h-2.1V37h2.1v4.5h-2.1v3.3h9.1v-3.3h-3.2V37h3.2v-3.3h-3.2v-.1c0-1.2.5-1.7 1.5-1.7h2.4v-3.3h-1.9c-3.9 0-5.8 1.7-5.8 4.8ZM122.8 41.5V37h3.7v-3.3h-3.7v-3.2l-3.8 1.2v2h-2.7V37h2.7v5.9c0 1.3.7 1.9 1.9 1.9h6v-3.3h-4.1ZM68.2 41.5v-3.1c0-3.6-2.6-5-5.7-5s-5.7 1.5-5.8 4.5h3.6c0-1 .7-1.6 2.1-1.6 1.5 0 2.1.5 2.1 1.6l-3.5.4c-3.4.4-4.6 1.5-4.6 3.5 0 1.2.6 3.3 4.1 3.3 1.9 0 3-.5 3.8-1.1v.9H69.5v-3.3h-1.3v-.1Zm-6.6.6c-.7 0-1.4-.2-1.4-.9 0-.6.6-.7 1.6-.9l2.7-.4c-.1 1.3-1.4 2.2-2.9 2.2Z"></path>
                <path d="M50.6 41.8 48 33.6h-3.9l-2.6 8.2-1.5-8.2h-3.9l2.2 11.2h6.1l1.7-5.2 1.6 5.2H53.9L56 33.6h-3.8l-1.6 8.2ZM83.8 33.6h-4.6L75 37.9v-7.4c0-1.3-.8-2-2.1-2H69.5v3.6h1.7v12.7H75v-4.6l4.2 4.6h4.6L78.4 39l5.4-5.4ZM114.1 35.5c0-1.2-.7-1.9-1.9-1.9h-4.3V37h2.7v4.5h-3.1v3.3h9.8v-3.3h-3.2v-6ZM112.1 32.7c1.4 0 2.3-.6 2.3-1.9 0-1.3-.9-1.9-2.3-1.9s-2.2.6-2.2 1.9c0 1.3.8 1.9 2.2 1.9Z"></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#F39293" d="M7 7h120v38H7z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Become Dealer</Nav.Link>
              <Nav.Link href="#action2">Store</Nav.Link>
              <Nav.Link href="#action3">Bulk Orders</Nav.Link>
              <div className="location">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Enter Pincode</span>
              </div>
              <FontAwesomeIcon icon={faPhone} />
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faCartShopping} />
              <Button variant="outline-success">SingIn</Button>
              <Button variant="outline-success">LogIn</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Link to={"/mattress"}>Mattress</Link>
        <Routes>
          <Route path="/mattress" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
      <Stories/>
      <Blog/>
      <div className="footer">
        <div className="about">
          <h1>
            <u>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120px"
                height="55px"
                color="#F39293"
                fill="#F39293"
                viewBox="0 0 134 52"
              >
                <g fill="#F39293" clip-path="url(#a)">
                  <path d="M31.7 24.9v3.7h14.7c.9 0 1.6-.7 1.6-1.6V14.8c0-.5-.2-.9-.6-1.2L38 7.4c-.5-.4-1.3-.5-1.9-.1l-9.4 6.4c-.4.3-.6.8-.6 1.3v20.3H10.9v-9l7.3-4.6 5.8 3.9v-4.5l-5-3.4c-.6-.4-1.4-.4-1.9.1L7.8 24c-.4.3-.6.8-.6 1.2v12.1c0 .9.7 1.6 1.6 1.6h19.1c1 0 1.8-.8 1.8-1.8v-21l7.3-4.9 7.3 4.6v9H31.7v.1ZM89.4 42.2c-1.4 0-2.2-.8-2.3-2.2h8.3v-1c0-3.5-2.2-5.6-6.1-5.6-3.5 0-6 2.2-6 5.8 0 3.5 2.3 5.9 6.1 5.9 3.5 0 5.7-1.7 6-4.2h-3.8c-.2.8-1 1.3-2.2 1.3Zm-.1-6c1.3 0 2.2.7 2.3 1.9H87c.1-1.2 1-1.9 2.3-1.9ZM98.7 33.4v.2h-2.1V37h2.1v4.5h-2.1v3.3h9.1v-3.3h-3.2V37h3.2v-3.3h-3.2v-.1c0-1.2.5-1.7 1.5-1.7h2.4v-3.3h-1.9c-3.9 0-5.8 1.7-5.8 4.8ZM122.8 41.5V37h3.7v-3.3h-3.7v-3.2l-3.8 1.2v2h-2.7V37h2.7v5.9c0 1.3.7 1.9 1.9 1.9h6v-3.3h-4.1ZM68.2 41.5v-3.1c0-3.6-2.6-5-5.7-5s-5.7 1.5-5.8 4.5h3.6c0-1 .7-1.6 2.1-1.6 1.5 0 2.1.5 2.1 1.6l-3.5.4c-3.4.4-4.6 1.5-4.6 3.5 0 1.2.6 3.3 4.1 3.3 1.9 0 3-.5 3.8-1.1v.9H69.5v-3.3h-1.3v-.1Zm-6.6.6c-.7 0-1.4-.2-1.4-.9 0-.6.6-.7 1.6-.9l2.7-.4c-.1 1.3-1.4 2.2-2.9 2.2Z"></path>
                  <path d="M50.6 41.8 48 33.6h-3.9l-2.6 8.2-1.5-8.2h-3.9l2.2 11.2h6.1l1.7-5.2 1.6 5.2H53.9L56 33.6h-3.8l-1.6 8.2ZM83.8 33.6h-4.6L75 37.9v-7.4c0-1.3-.8-2-2.1-2H69.5v3.6h1.7v12.7H75v-4.6l4.2 4.6h4.6L78.4 39l5.4-5.4ZM114.1 35.5c0-1.2-.7-1.9-1.9-1.9h-4.3V37h2.7v4.5h-3.1v3.3h9.8v-3.3h-3.2v-6ZM112.1 32.7c1.4 0 2.3-.6 2.3-1.9 0-1.3-.9-1.9-2.3-1.9s-2.2.6-2.2 1.9c0 1.3.8 1.9 2.2 1.9Z"></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#F39293" d="M7 7h120v38H7z"></path>
                  </clipPath>
                </defs>
              </svg>
            </u>
          </h1>
          <p>Careers</p>
          <p>Become Dealer</p>
          <p>Investor Relation</p>
          <p>Business Order</p>
          <p>Media Queries</p>
          <p>Media Coverage</p>
          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#808080" />
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#808080" />
            <FontAwesomeIcon icon={faTwitter} size="2x" color="#808080" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#808080" />
          </div>
        </div>
        <div className="compaines">
          <p>Compaignes</p>
          <p>Work From Home Quies</p>
          <p>Sleep Survery</p>
          <p>Sleep Intership</p>
          <p>Dream Home Survery</p>
          <hr />
          <p>All Products</p>
          <p>Offers</p>
        </div>
        <div className="policies">
          <p>Policies</p>
          <p>FAQs</p>
          <p>Shipping & Locations</p>
          <p>Payment,Returns & Refunds</p>
          <p>Warranty</p>
          <hr />
          <p>Terms Of Services</p>
          <p>Privacy Policy</p>
        </div>
        <div className="help">
          <p>Help</p>
          <p>Contact us at +919883333123</p>
          <p>We are here to help you every day between</p>
          <p>9:30 AM to 7:30 PM</p>
          <br />
          <br />
          <p>Registered Office, Manufacturer &</p>
          <p>Packer</p>
          <p>Wakefit Innovations Pvt. Ltd. Address: 3rd</p>
          <p>Floor, Umiya Emporium, 97-99,Adugodi,</p>
          <p>Tavarekere, Opposite forum Mall,Hosur</p>
          <p>Road, Bangalore 560029, India</p>
          <p>Corporate Identity Number:</p>
          <p>U52590KA2016PTC086582</p>
        </div>
      </div>
    </div>
  );
}

export default App;
