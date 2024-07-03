import GetInTouch from "./pages/GetInTouch";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

function App() {
  const [openHobbyMenu, setOpenHobbyMenu] = useState<boolean>(false);

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
        <div className="block md:hidden fixed top-3/4 right-0 select-none cursor-pointer duration-100 bg-gray-300 hover:bg-gray-200 p-1 rounded-l-lg">
          <IoIosArrowBack onClick={() => setOpenHobbyMenu(!openHobbyMenu)} className="size-5" />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
