import { ArrowUpOutlined } from "@ant-design/icons";
import { BackTop } from "antd";
import styled from "styled-components";

const AppFooter = () => {
  return (
    <Wrapper>
      Demo Hosting Website ©2022 Created by <b> Bennai Lyes </b>.
      <BackTop>
        <div className="up">
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  .up {
    color: #fff;
    font-size: 2rem;
    background-color: var(--primary-color);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default AppFooter;
