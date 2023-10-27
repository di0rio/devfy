import { Outlet } from "react-router-dom";

import "./App.css";
import Home from "../routes/Home/Home";

function App() {

  return (
    <div>
      <div>
        <Home />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
