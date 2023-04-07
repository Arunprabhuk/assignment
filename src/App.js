import "./App.css";
import SideNav from "./page/sideNav";
import MainContainer from "./component/MainContainer";
import SecondContainer from "./component/SecondContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideNav />

      <Routes>
        <Route element={<SecondContainer />} path="/badReputation" />
        <Route element={<MainContainer />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
