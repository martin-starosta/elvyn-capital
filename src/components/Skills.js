

import ddiligence from "../assets/svg/dd.svg";
import documentation from "../assets/svg/documentation.svg";
import infomemo from "../assets/svg/infomemo.svg";
import fin_mod from "../assets/svg/modeling.svg";
import selecting from "../assets/svg/selecting2.svg";
import structuremem from "../assets/svg/structurememo.svg";
import cps from "../assets/svg/managemen.svg";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Our services</h2>
                        <p>Our services are designed to help your business at every stage of its development and with every step on its financing journey, stretching from lender selection process to helping you complete the whole process until the investment arives at your bank account.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={documentation} alt="Image" />
                                <h5>Transaction documentation</h5>
                            </div>
                            <div className="item">
                                <img src={selecting} alt="Image" />
                                <h5>Investor selection</h5>
                            </div>
                            <div className="item">
                                <img src={ddiligence} alt="Image" />
                                <h5>Due Diligence</h5>
                            </div>
                            <div className="item">
                                <img src={fin_mod} alt="Image" />
                                <h5>Financial Modeling</h5>
                            </div>
                            <div className="item">
                                <img src={infomemo} alt="Image" />
                                <h5>Information memorandum</h5>
                            </div>
                            <div className="item">
                                <img src={structuremem} alt="Image" />
                                <h5>Structure memorandum</h5>
                            </div>
                            <div className="item">
                                <img src={cps} alt="Image" />
                                <h5>CP management</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
