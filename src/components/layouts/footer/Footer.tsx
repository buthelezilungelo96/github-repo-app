import { Layout } from "antd";
import "./Footer.less";

const { Footer: AntFooter } = Layout;

const Footer = () => (
  <AntFooter className="footer-wrapper">
    LB Studios ©{new Date().getFullYear()} Created by Lungelo
  </AntFooter>
);

export default Footer;
