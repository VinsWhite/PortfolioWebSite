import GetInTouch from "./pages/GetInTouch";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import ScrollToTopComp from "./components/ScrollToTopComp";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {

  return (
    <BrowserRouter>
      <div className="font-mono">
        <NavbarComp />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/getintouch' element={<GetInTouch />} />
            <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        <FooterComp />
        <ScrollToTopComp />
      </div>
    </BrowserRouter>
  )
}

export default App
