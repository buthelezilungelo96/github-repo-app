import { ConfigProvider } from "antd";
import { Theme } from "./theme/Theme";
import "./App.less";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ConfigProvider theme={Theme}>
      <AppRoutes />
    </ConfigProvider>
  );
}

export default App;
