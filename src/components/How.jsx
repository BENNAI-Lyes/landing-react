import { useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import styled from "styled-components";
import bgImg from "../assets/images/bg-works.jpg";

const How = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Wrapper id="How-it-works">
      <img src={bgImg} alt="background" className="img" />
      <div className="content">
        <div className="smContainer">
          <h3 className="title">How do I Get stander?</h3>
          <p className="text">
            Whether this is the first site you've ever hosted or the
            one-hundredth site, our website hosting services are loaded with
            tools to make your experience as easy as possible.
          </p>
          <Button
            onClick={showModal}
            size="large"
            className="play"
            icon={<PlayCircleOutlined className="icon" />}
          />

          <Modal
            title="Web Hosting"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/fwo3EQBsTeg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Modal>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem 0;

  height: 400px;
  position: relative;

  .img {
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(40%);
  }

  .content {
    position: absolute;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;

    .title {
      font-size: 2.4rem;
      color: #fff !important;
    }

    .text {
      font-weight: bold;
      color: #fff !important;
      padding: 0 4rem;
      @media (max-width: 576px) {
        padding: 0 2rem;
      }
    }

    .play {
      background: transparent;
      border: none;
      margin-top: 2rem;
      cursor: pointer;
      transition: all 0.4s ease;

      .icon {
        color: #fff !important;
        font-size: 3rem;
      }

      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default How;
