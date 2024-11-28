import Title from 'antd/lib/typography/Title';
import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 0 0 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    padding: 0.5em 0 1.5em 0;
  }
`;

export const CardTitle = styled(Title)`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0 !important;
  font-size: 16;
  font-weight: 800;
  margin: 0px 0px;
`;

export const CardDesciption = styled(Title)`
  text-align: center;
  padding: 0 0 0 0.8em;
  font-size: 11pt !important;
  margin-bottom: 0 !important;
  color: rgba(0, 0, 0, 0.87);
  font-weight: normal !important;
`;

export const ActionLink = styled.p`
  color: rgb(225, 93, 42);
`;
