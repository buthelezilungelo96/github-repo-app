import { Button, Result } from "antd";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you are looking for was not found."
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate("/home");
          }}
        >
          Back Home
        </Button>
      }
    />
  );
};

export default PageNotFound;
