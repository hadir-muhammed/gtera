import { render } from "react-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import "./index.css";

function App() {
  return <AppRoutes />;
}

render(<App />, document.getElementById("root"));
