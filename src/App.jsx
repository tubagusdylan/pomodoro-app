import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Music } from "./pages/Music";
import { Navbar } from "./components/Navbar";
import { Tracking } from "./pages/Tracking";

function App() {
  return (
    <div className="relative bg-slate-200">
      <BrowserRouter>
        <div className="w-full lg:w-[600px] mx-auto fixed bottom-0 left-0 lg:left-1/2 lg:-translate-x-1/2">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/track" element={<Tracking />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
