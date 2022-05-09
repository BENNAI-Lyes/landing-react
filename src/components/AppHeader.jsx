import { AntCloudOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, Anchor } from "antd";
import styled from "styled-components";
import React, { useState } from "react";
import { Drawer, Button } from "antd";

const { Header } = Layout;
const { Link } = Anchor;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <Wrapper>
      <div className="container">
        <AntCloudOutlined className="logo" />

        <Anchor targetOffset={65} className="menu">
          <Link href="#Home" title="Home" className="link" />
          <Link href="#About" title="About" className="link" />
          <Link href="#Features" title="Features" className="link" />
          <Link href="#How-it-works" title="How it works" className="link" />
          <Link href="#FAQ" title="FAQ" className="link" />
          <Link href="#Pricing" title="Pricing" className="link" />
          <Link href="#Contact" title="Contact" className="link" />
        </Anchor>
        <div className="hum-menu">
          <Button className="btn" type="primary" onClick={showDrawer}>
            <MenuFoldOutlined />
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            visible={visible}
            width={"200"}
          >
            <Anchor targetOffset={65} className="drawer">
              <Link href="#Home" title="Home" className="link" />
              <Link href="#About" title="About" className="link" />
              <Link href="#Features" title="Features" className="link" />
              <Link
                href="#How-it-works"
                title="How it works"
                className="link"
              />
              <Link href="#FAQ" title="FAQ" className="link" />
              <Link href="#Pricing" title="Pricing" className="link" />
              <Link href="#Contact" title="Contact" className="link" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  background: #fff !important;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
    }

    .link {
      font-weight: bold;
    }

    .ant-anchor-ink-ball {
      display: none;
    }
    .ant-anchor-ink::before {
      width: 0;
    }

    .menu {
      .ant-anchor {
        display: flex;
        flex-direction: row;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }

    .hum-menu {
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
`;

export default AppHeader;
