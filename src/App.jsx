import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthRoute";
import AppRoutes from "./routes/AppRoutes";
import "@ant-design/v5-patch-for-react-19";
import "./index.css";
import { ConfigProvider } from "antd";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#EC5176",
              fontSize: 12,
            },
          }}
        >
          <AppRoutes />
        </ConfigProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
