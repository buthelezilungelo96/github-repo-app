import React from "react";
import { useNavigate, useLocation } from "react-router";
import { Layout, Menu, Typography } from "antd";
import useWindowDimensions, { ScreenWidth } from "../../../utils/Devices";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./MainLayout.less";
import { MENU_ITEMS } from "../../../utils/Constants";

const { Content, Sider } = Layout;

const items = MENU_ITEMS.map((item) => ({
  key: item.path,
  icon: React.createElement(item.icon),
  label: item.name,
}));

interface MainLayoutProps {
  children: JSX.Element;
  title?: string;
}

interface ContentHeaderProps {
  title: string;
}

const { Title } = Typography;

export const ContentHeader: React.FC<ContentHeaderProps> = ({ title }) => {
  return (
    <Title className="layout-content-header" level={2}>
      {title}
    </Title>
  );
};

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathElements = pathname.split("/");

  const onSelect = (item: any) => {
    navigate(`${item.key}`);
  };

  return (
    <Layout className="main-layout-wrapper">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        className="main-layout-sider"
      >
        <div
          className="logo"
          onClick={() => {
            navigate("/home");
          }}
        >
          <img
            src={
              width >= ScreenWidth.TABLET
                ? "/images/icons/logo.png"
                : "/images/icons/mobile-logo.png"
            }
            alt="Logo"
            width={width >= ScreenWidth.TABLET ? 120 : 28}
          />
        </div>
        <Menu
          className="main-layout-menu"
          mode="inline"
          defaultSelectedKeys={["/home"]}
          items={items}
          onSelect={onSelect}
          selectedKeys={
            pathElements.length === 1
              ? [`/${pathElements[0]}`]
              : [`/${pathElements[1]}`]
          }
        />
      </Sider>
      <Layout>
        <Header />
        <Content className="layout-content">
          <div className="layout-content-container">{props.children}</div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
