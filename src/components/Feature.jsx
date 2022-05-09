import { Card, Col, Row } from "antd";
import React from "react";

import Meta from "antd/lib/card/Meta";
import styled from "styled-components";

const Feature = () => {
  const cards = [
    {
      id: 1,
      title: "The Speed. We got it",
      img: "https://images.unsplash.com/photo-1530809355496-bac53698afe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80",
      desc: "You can get more speed with Hostinger. Approved by industry experts.",
    },
    {
      id: 2,
      title: "Complexity. We’ve removed it",
      img: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      desc: "Try our custom-built hPanel. It’s intuitive, fast and better than cPanel.",
    },
    {
      id: 3,
      title: "WordPress. We love it",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80",
      desc: "And you should too. With LiteSpeed caching, HTTP/2, HTTP/3 (Quic) and IPv6.",
    },
    {
      id: 4,
      title: "Your back. We have it",
      img: "https://images.unsplash.com/photo-1579356687668-cbdd5a551c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      desc: "Our tech support team is here to help you 24/7/365.",
    },
    {
      id: 5,
      title: "Hosting elsewhere? Migrate for free",
      img: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      desc: "Use our automated migration tool for WordPress or have our migration team do the job for you.",
    },
    {
      id: 6,
      title: "Hosting elsewhere? Migrate for free",
      img: "https://images.unsplash.com/photo-1573166584647-2c1366f9b219?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      desc: "Use our automated migration tool for WordPress or have our migration team do the job for you.",
    },
  ];
  return (
    <Wrapper id="Features">
      <div className="title">
        <div className="smContainer">
          <h2>
            Key <span>Features</span> and Benefits
          </h2>
          <p className="subTitle">
            From the business owner to the individual who desires full
            functionality on a small budget, Bluehost provides your complete web
            hosting solution.
          </p>
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {cards.map((card) => (
          <Col xs={24} sm={12} md={12} key={card.id}>
            <Card
              hoverable
              cover={<img alt="example" src={card.img} className="card-img" />}
            >
              <Meta title={card.title} description={card.desc} />
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
      @media (max-width: 576px) {
        font-size: 1.8rem;
      }
      span {
        color: var(--primary-color);
      }
    }
    .subTitle {
      margin-bottom: 2rem;
      padding: 0 2rem;
      @media (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
  }

  .card-img {
    height: 250px;
    object-fit: cover;
  }
`;

export default Feature;
