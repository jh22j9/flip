import { Route, Routes } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";
import Header from "./components/Header";
import Main from "./pages/Main";
import CreateBoard from "./pages/CreateBoard";
import UpdateBoard from "./pages/UpdateBoard";
import SaveBoard from "./pages/SaveBoard";
import PlayBoard from "./pages/PlayBoard";
import Footer from "./components/Footer";

import "./Styles/_global.scss";

function App() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  return (
    <>
      {pathname === "/play" ? <></> : <Header navigate={navigate} />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<CreateBoard />} />
        <Route path="/update" element={<UpdateBoard />} />
        <Route path="/save" element={<SaveBoard />} />
        <Route path="/play" element={<PlayBoard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
