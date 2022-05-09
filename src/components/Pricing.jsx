import styled from "styled-components";
import { Button, Card, Col, Row } from "antd";
import { SendOutlined } from "@ant-design/icons";

const Pricing = () => {
  const data = [
    {
      title: "PREMIUM",
      price: "59.99 $",
      space: "5 GB of space",
      users: "5 user",
      support: "27/7 support",
      safe: "Safe, reliable backup",
      access: "Access from anywhere",
    },
    {
      title: "ENTERPRISE",
      price: "99.99 $",
      space: "Unlimited space",
      users: "15 user",
      support: "27/7 support",
      safe: "Safe, reliable backup",
      access: "Access from anywhere",
    },
  ];
  return (
    <Wrapper id="Pricing">
      <div className="container">
        <div className="smContainer">
          <h2>
            Choose a <span>plan</span> to fit your needs
          </h2>
          <p>Everything you may need for a successful online project</p>
        </div>
      </div>
      <div className="site-card-wrapper lists">
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={24} lg={8}>
            <Card title="BASIC" bordered={true} className="card">
              <p className="price">29.99 $</p>
              <p>1 GB of space</p>
              <p>1 user</p>
              <p>27/7 support</p>
              <p>Safe, reliable backup</p>
              <p>Access from anywhere</p>
              <Button type="primary" size="large" icon={<SendOutlined />}>
                Get Started
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <Card title="PREMIUM" bordered={true} className="card premium">
              <p className="price">59.99 $</p>
              <p>5 GB of space</p>
              <p>5 user</p>
              <p>27/7 support</p>
              <p>Safe, reliable backup</p>
              <p>Access from anywhere</p>
              <Button type="primary" size="large" icon={<SendOutlined />}>
                Get Started
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <Card title="ENTERPRISE" bordered={true} className="card">
              <p className="price">99.99 $</p>
              <p>Unlimited space</p>
              <p>15 user</p>
              <p>27/7 support</p>
              <p>Safe, reliable backup</p>
              <p>Access from anywhere</p>
              <Button type="primary" size="large" icon={<SendOutlined />}>
                Get Started
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem 0;
  background: #fff;

  .smContainer {
    h2 {
      font-weight: 600;
      font-size: 2rem;
      @media (max-width: 768px) {
        font-size: 1.7rem;
      }
      @media (max-width: 480px) {
        font-size: 1.2rem;
      }
      span {
        color: var(--primary-color);
      }
    }
    p {
      font-weight: 600;
      @media (max-width: 480px) {
        font-weight: 600;
        font-size: 0.7rem;
      }
    }
  }

  .lists {
    margin: 3rem;

    @media (max-width: 768px) {
      margin: 1rem 2rem;
    }
    .card {
      text-align: center;
      font-size: 1.1rem;

      .ant-card-head-title {
        font-weight: bold;
      }

      .price {
        font-size: 1.7rem;
        margin-bottom: 0.5rem;
      }
    }
    .card.premium {
      transform: scale(1.1);

      @media (max-width: 768px) {
        transform: scale(1) !important;
      }
    }
  }
`;

export default Pricing;
