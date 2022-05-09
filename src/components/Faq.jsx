import styled from "styled-components";
import { Button, Collapse } from "antd";
import { CaretRightOutlined, MailOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const Faq = () => {
  const panels = [
    {
      id: 1,
      header:
        "DOES MY HOSTING CHOICE DEPEND ON MY COMPUTER'S OS (MAC, WINDOWS, LINUX)?",
      text: "You may be relieved to learn that It actually doesn't matter what your computer's operating system is. You can use our hosting whether your computer's operating system is Windows, Linux, Mac or another option. Your hosting account's operating system is NOT dependent on your computer's operating system. ",
    },
    {
      id: 2,
      header:
        "I'VE NEVER HOSTED A SITE OR USED A2 HOSTING. HOW DO I GET STARTED?",
      text: " Whether this is the first site you've ever hosted or the one-hundredth site, our website hosting services are loaded with tools to make your experience as easy as possible.Your first step to get started with A2 Hosting is to choose your hosting solution and your domain name. If this is your first site or if you are a beginner, we recommend our Shared Hosting solutions.",
    },
    {
      id: 3,
      header: "HOW IS A2 HOSTING SO MUCH FASTER THAN COMPETING SOLUTIONS?",
      text: " We won't give away all the ingredients to our special speed recipe, but we'll show you a few reasons why we're faster than competing hosts. All of our speed optimized solutions make up our SwiftServer platform. Our SwiftServers are available on each of our hosting solutions. ",
    },
    {
      id: 4,
      header: "WHAT IF I STILL HAVE HOSTING QUESTIONS",
      text: "Do you still have a question about our web hosting services? We have an answer! Just visit our Contact page for assistance now!                                                   ",
    },
    {
      id: 5,
      header: "WHY IS A2 HOSTING THE BEST PLACE FOR WORDPRESS HOSTING?",
      text: "Not only does A2 Hosting make it easy to get your WordPress site up and running, but we've loaded your account with features that make it easy to manage your account. ",
    },
    {
      id: 6,
      header: "WHICH WEBSITE HOSTING SERVICE OR PACKAGE SHOULD I CHOOSE?",
      text: "You may be looking through our selection of hosting services and packages while wondering which one you should sign up for. That's understandable! To make your decision easier, it's important to remember:                                                          Our hosting packages are fully-scalable! That means that as your site grows, we have a hosting solution that can grow with you. We offer seamless migrations so when your site is ready for that more powerful hosting package, our team can easily move your site into that other website hosting solution.                                                                              ",
    },
    {
      id: 7,
      header:
        "BESIDES FAST SERVERS, WHAT MAKES YOU THE BEST PLACE FOR HOSTING WEBSITES?",
      text: "It's obvious that A2 Hosting cares about your website's speed. That's why our goal is to offer the industry's fastest hosting service.",
    },
  ];

  return (
    <Wrapper id="FAQ">
      <div className="title">
        <div className="smContainer">
          <h2>
            Frequently <span>Asked</span> Questions
          </h2>
          <p>
            Do you have questions about A2 Hosting's services? We have the
            answers to some of the most commonly asked questions about our
            customers below.
          </p>
        </div>
      </div>
      <Collapse
        bordered={true}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="site-collapse-custom-collapse"
      >
        {panels.map((panel) => (
          <Panel
            header={panel.header}
            key={panel.id}
            className="site-collapse-custom-panel"
          >
            <p>{panel.text}</p>
          </Panel>
        ))}
      </Collapse>
      <div className="quick">
        <div className="smContainer">
          <h3>Want quick support?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            velit necessitatibus praesentium aliquid eos in neque recusandae,
            incidunt esse dolore voluptatum nesciunt quod soluta consequuntur
            voluptatibus ab excepturi nobis! Porro!
          </p>
          <Button type="primary" size="large" icon={<MailOutlined />}>
            Email your question
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem 0;

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    color: #fff !important;
  }
  .site-collapse-custom-panel {
    background: var(--primary-color);
    color: #fff !important;
  }

  .title {
    text-align: center;
    h2 {
      font-size: 2.4rem;
      @media (max-width: 576px) {
        font-size: 2rem;
      }
      span {
        color: var(--primary-color);
      }
    }
    p {
      margin-bottom: 2rem;
      @media (max-width: 576px) {
        font-size: 0.8rem;
        padding: 0 1rem;
      }
    }
  }
  .quick {
    margin: 2rem 0;
    h3 {
      font-size: 1.8rem;
    }
    p {
      font-weight: 600;
    }
  }
`;

export default Faq;
