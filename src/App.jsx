import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthRoute";
import AppRoutes from "./routes/AppRoutes";
import "@ant-design/v5-patch-for-react-19";
import "./index.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
