import { Card, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

import support from "../assets/images/support.png";
import open from "../assets/images/open-source.png";
import customer from "../assets/images/customer-feedback.png";
import vision from "../assets/images/vision.png";
import wordpress from "../assets/images/wordpress.png";
import websites from "../assets/images/web-link.png";

const About = () => {
  const cards = [
    {
      id: 1,
      icon: vision,
      title: "Our vision and mission",
      text: "We believe in a world where people have the freedom to choose how their digital content is shared, and we foster their success by providing an open web platform of choice.",
    },
    {
      id: 2,
      icon: open,

      title: "Open source is in our DNA",
      text: "We support WordPress, a powerful open source content management system for the web. We help to make WordPress better with code, community contributions, and expert-level support.",
    },
    {
      id: 3,
      icon: support,
      title: "Real support 24/7/365",
      text: "Our award-winning in-house support staff is available to you all day, every day, via live chat, email, and social media. email, and social media. email, and social media.",
    },
    {
      id: 4,
      icon: customer,

      title: "Over 400k+ happy customers",
      text: "Since the dorm room back in 1997, our customer count has grown to over 400,000, spanning throughout more than 100 countries. That's nuts, right?",
    },
    {
      id: 5,
      icon: websites,

      title: "1.5 million + websites",
      text: "DreamHost proudly hosts over 1.5 million websites, WordPress blogs, and applications for designers, developers, small businesses, and more. email, and social media. email, and social media.",
    },
    {
      id: 6,
      icon: wordpress,

      title: "750k+ WordPress installations",
      text: "We’ve been hosting WordPress websites and blogs since the beginning. Our friendly in-house WordPress experts are here to help you do amazing things!",
    },
  ];
  return (
    <Wrapper id="About">
      <div className="title">
        <div className="smContainer">
          <h2>
            We <span>help people </span> own their digital presence.
          </h2>
          <div>
            <p className="subTitle">
              It's not just wishful thinking. It's our noble cause — an idea
              that drives everything we do.
            </p>
          </div>
          <p className="text">
            When you put your dreams online—your words, your photos, your
            creations—you shouldn't have to worry about your service provider
            mining that data for marketing purposes.
          </p>
        </div>
      </div>

      <Row gutter={[12, 12]}>
        {cards.map((card) => (
          <Col xs={24} sm={24} md={12} lg={8} key={card.id}>
            <Card className="card">
              <img src={card.icon} alt="card icon" className="img" />
              <p className="title">{card.title}</p>
              <p className="text">{card.text}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem 0;

  .title {
    text-align: center;
    h2 {
      font-size: 2.4rem;
      @media (max-width: 768px) {
        font-size: 2rem;
      }
      @media (max-width: 576px) {
        font-size: 1.4rem;
      }
      @media (max-width: 480px) {
        font-size: 1.1rem;
      }
      span {
        color: var(--primary-color);
      }
    }
    .subTitle {
      font-weight: bold;
      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
      @media (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
    .text {
      margin-bottom: 2rem;
      padding: 0 3rem;
      @media (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
  }

  .card {
    text-align: center;
    .img {
      width: 70px;
      margin-bottom: 1rem;
    }
    .title {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`;

export default About;
