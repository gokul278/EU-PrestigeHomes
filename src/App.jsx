import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import "./App.css";
import ScrollToTop from "./Pages/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
