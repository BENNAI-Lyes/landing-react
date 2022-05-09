import { Carousel, Row, Col, Button } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import styled from "styled-components";

import img1 from "../assets/images/hero-1.svg";
import img2 from "../assets/images/hero-2.svg";
import img3 from "../assets/images/hero-3.svg";
import img4 from "../assets/images/hero-4.svg";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Bring Your  Idea To Life.",
      content:
        "I'm BENNAI Lyes, a full-stack web developer. I built this nice and clean Landing page just for my portfolio. The main idea is to show you my creativity in building landing pages. Let's build your online presence and land new subscribers and sales. I used React.js Just enjoy it !!!",
      img: img1,
    },
    {
      id: 2,
      title: "Hosting for Your Purpose",
      content:
        "Your website hosting provider has a huge impact on your page load speed and ultimately your bottom line. Faster sites have better SEO rankings, lower bounce rates, and higher conversion rates. Whether you have a brand new blog or a high-traffic business site; if you've never run a website before or are a professional developer, we've got you covered with a high-performance solution you can depend on!. ",
      img: img2,
    },
    {
      id: 3,
      title: "Get Started Fast & Easily With A2 Hosting!",
      content:
        "You can easily build a new site with the A2 SiteBuilder, point-and-click install your favorite CMS system (such as WordPress), or even migrate your existing website to A2 for FREE! No matter what your technical level, A2 has the tools to build you a beautiful new website quickly and easily.",
      img: img3,
    },
    {
      id: 4,
      title: "The Website Hosting Service You've Been Searching For!",
      content:
        "At A2 Hosting, we've designed a hosting service that we would want to use ourselves. From blazing fast page speeds to knowledgeable support to user-friendly solutions to ultra-reliable service, we think you'll want to use our hosting as well!",
      img: img4,
    },
  ];

  return (
    <Wrapper id="Home">
      <Carousel>
        {slides.map((slide) => (
          <div className="heroContent" key={slide.id}>
            <Row gutter={[40, 40]} key={slide.id} className="row">
              <Col xs={24} sm={24} md={12} className="left">
                <h1> {slide.title} </h1>
                <p> {slide.content} </p>
                <div>
                  <Button type="primary" size="large">
                    Learn More
                  </Button>
                  <Button size="large" icon={<VideoCameraOutlined />}>
                    Watch a Demo
                  </Button>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} className="right">
                <img src={slide.img} alt="web hosting" />
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 65px);
  position: relative;
  top: 65px;
  padding: 5rem 0;

  @media (min-width: 1200px) {
    padding: 5rem 0;
  }

  .ant-carousel .slick-dots li button {
    background: #1890ff !important;
    margin-top: 1rem;
  }

  .heroContent {
    height: 100%;

    .row {
      .left {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          font-weight: bold;
          font-size: 2rem;

          @media (min-width: 768px) {
            font-size: 1.7rem;
          }

          @media (max-width: 576px) {
            font-size: 1.5rem;
          }
          @media (max-width: 480px) {
            font-size: 1.2rem;
          }
        }
        div {
          display: flex;
          gap: 1rem;
        }
      }
      .right {
        @media (max-width: 768px) {
          margin: auto;
        }
      }
    }
  }
`;

export default Hero;
