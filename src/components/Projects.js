import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import bonds from "../assets/img/bonds.png";
import convertible from "../assets/img/convertible.jpg";
import customise from "../assets/img/customise.jpg";
import esop from "../assets/img/esop.jpg";
import mezzanine from "../assets/img/mezzanine.jpg";
import seasoned from "../assets/img/seasoned.jpg";
import seed from "../assets/img/seed.jpg";
import senior from "../assets/img/senior.jpg";
import startup from "../assets/img/startup.jpg";

import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const equity = 
  [
      {
        title: "Pre-Seed Equity Rounds",
        description: "First big step on the field of funding",
        imgUrl: startup,
      },
      {
        title: "Seed Equity Rounds",
        description: "A pivotal step on a journey from a start-up to a scale-up",
        imgUrl: seed,
      },
      {
        title: "Seasoned Equity Rounds",
        description: "Funding option availble to companies that have earned investors' confidence ",
        imgUrl: seasoned,
      }
    ]

  const debt = 
  [
    {
      title: "Senior Credit Agreements",
      description: "Ideal funding solution for established companies",
      imgUrl: senior,
    },
    {
      title: "Mezzanine Credit Agreements",
      description: "Additional source of funding for established companies",
      imgUrl: mezzanine,
    },
    {
      title: "Bonds & other debt securities",
      description: "Ideal for attracting higher number of investors",
      imgUrl: bonds,
    }
  ];

  const hybrid = 
  [
    {
      title: "Convertible Loan Agreements",
      description: "Convenient compromise between risk & reward",
      imgUrl: convertible,
    },
    {
      title: "ESOPs",
      description: "Employee share option plans, great way of attracting talent and reducing costs.",
      imgUrl: esop,
    },
    {
      title: "Custom-made solutions",
      description: "Solutions respecting the specificities of your business and current situation",
      imgUrl: customise,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Areas of expertise</h2>
                <p>Financing is our passion, we will help you select the form of financing that best suits the specificities of your business.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Equity</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Debt</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Hybrid</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          equity.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>We advise companies stretching from start-ups to well established business, as well as investors, in relation to share issuance and investment into other equitz funds.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          debt.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>We assist borrowers and lenders in relation to raising debt via bilateral, club or syndicated credit agreements and bond issuances.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          hybrid.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>We advise our clients in relation to convertible loans and other convertible (hybrid) instruments, with emphasis on convertble loan agreements and other D2E instruments. </p>
                      <p>We also assist our clients with set up and operation of ESOP programs </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
