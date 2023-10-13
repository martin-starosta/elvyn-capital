import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import lkdn from "../assets/icons/linkedin.png";
import faceb from "../assets/icons/facebook.png";
import insta from "../assets/icons/instagram.png";

export const Contact = () => {

  const companyDetails = {
    name: "Elvyn Capital s.r.o.",
    address1: "Bílkova 863/17", 
    address2: "Prague 1 - Old Town",
    address3: "Czech Republic",
    email: "office@elvyncapital.com"
  };

  const emailAddress = companyDetails.email.split("").map((char, index) => (
    <span key={index} style={{ display: "inline-block", transform: "translateY(-50%)", verticalAlign: "middle" }}>
      {char}
    </span>
  ));

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact Us</h2>
                <p>
                  {companyDetails.name}
                </p>
                <p>
                  {companyDetails.address1}
                </p>
                <p>
                  {companyDetails.address2}
                </p>
                <p>
                  {companyDetails.address3}
                </p>
                <p>
                  {companyDetails.phone}
                </p>
                <p>
                  {emailAddress}
                </p>
                <a href="https://www.linkedin.com/company/70470766/admin/feed/posts/">
                  <img src={lkdn} class="social" alt="LinkedIn logo"></img>
                </a>
                <a href="https://www.facebook.com/elvyncapital">
                  <img src={faceb} class="social" alt="Facebook logo"></img>
                </a>
                <a href="https://www.instagram.com/elvyn_capital">
                  <img src={insta} class="social" alt="Instagram logo"></img>
                </a>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
