import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import CreateBoard from "./pages/CreateBoard";
import UploadImages from "./pages/UploadImages";
import SaveBoard from "./pages/SaveBoard";
import PlayBoard from "./pages/PlayBoard";
import Footer from "./components/Footer";

import "./Styles/_global.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<CreateBoard />} />
        <Route path="/upload" element={<UploadImages />} />
        <Route path="/save" element={<SaveBoard />} />
        <Route path="/play" element={<PlayBoard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
