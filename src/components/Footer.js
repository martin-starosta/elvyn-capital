import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";

export const Footer = () => {
  const companyDetails = {
    name: "Elvyn Capital s.r.o.",
    address1: "Bílkova 863/17", 
    address2: "Prague 1 - Old Town, Czech Republic",
    ICO: "09601929",
    VAT: "CZ"
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
       
          <Col size={60} sm={12} className="text-center text-sm-center flexina">
            <p>
              {companyDetails.name} <br/>
              {companyDetails.address1} <br/>
              {companyDetails.address2}
            </p>
            <p>
              Company ID: {companyDetails.ICO} <br/>
 
              VAT No: <br/> {companyDetails.VAT}-{companyDetails.ICO}
            </p>
            <p>
              <a href="#">Terms of Use</a><br/>
              <a href="#">Privacy Policy</a>
            </p>
            <p>
            Illustration by <a class="link_pro" href="https://freeicons.io/office-illustrations/account-imac-warehouse-illustration-291">Athul Mc</a>
             on <a href="https://freeicons.io">freeicons.io</a>
            </p>
            <p>Originanal design &copy; JudyGab 2023. All Rights Reserved</p>
            <p>Modified design &copy; 2023. Elvyn Capital s.r.o. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
