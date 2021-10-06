import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { flattenMessages } from "./utils/locale";
import locale from "./locale";

import "./styles/index.less";

function App() {
  return (
    <IntlProvider locale="en-US" messages={flattenMessages(locale["en-US"])}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </IntlProvider>
  );
}

render(<App />, document.getElementById("root"));
