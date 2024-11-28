import { FC } from "react";
import { Card as AntCard } from "antd";
import { useNavigate } from "react-router-dom";
import { BodyWrapper } from "../../styled-components/styles";
import { NAV_MENUS } from "../../utils/Constants";
import { ContentHeader } from "../../components/layouts/mainLayout/MainLayout";
import "./Home.less";

const { Meta } = AntCard;

interface Props {}

const Home: FC<Props> = () => {
  const navigate = useNavigate();

  return (
    <>
      <ContentHeader title="Welcome, Lungelo Buthelezi" />
      <div className="home-wrapper">
        {NAV_MENUS.map(({ path, icon, title, description }) => {
          return (
            <AntCard
              key={path}
              onClick={() => navigate(path)}
              hoverable
              className="home-antd-card"
            >
              <BodyWrapper>
                <img src={`images/menus/${icon}.png`} alt={path} width={135} />
              </BodyWrapper>
              <Meta title={title} description={description} />
            </AntCard>
          );
        })}
      </div>
    </>
  );
};

export default Home;
