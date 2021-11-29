import { Route, Routes } from "react-router-dom";
import CreateBoard from "./pages/CreateBoard";
import Main from "./pages/Main";
import UploadImages from "./pages/UploadImages";
import SaveBoard from "./pages/SaveBoard";
import PlayBoard from "./pages/PlayBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<CreateBoard />} />
        <Route path="/upload" element={<UploadImages />} />
        <Route path="/save" element={<SaveBoard />} />
        <Route path="/play" element={<PlayBoard />} />
      </Routes>
    </>
  );
}

export default App;
