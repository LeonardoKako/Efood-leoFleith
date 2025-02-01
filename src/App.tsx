import { BrowserRouter } from "react-router-dom";

import { GlobalCss } from "./style";
import Rotas from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
