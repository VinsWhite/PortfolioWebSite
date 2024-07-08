import GetInTouch from "./pages/GetInTouch";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";

function App() {

  return (
    <BrowserRouter>
      <div className="font-mono">
        <NavbarComp />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/getintouch' element={<GetInTouch />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        <FooterComp />
      </div>
    </BrowserRouter>
  )
}

export default App
