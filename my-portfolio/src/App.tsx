import GetInTouch from "./pages/GetInTouch";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";

function App() {
  const [openHobbyMenu, setOpenHobbyMenu] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="font-mono">
      <div className="fixed top-0 left-0 h-1 bg-secondary z-50" style={{ width: `${scrollProgress}%` }}></div>
        <NavbarComp />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/getintouch' element={<GetInTouch />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        <FooterComp />
        <div className="block lg:hidden fixed top-3/4 right-0 select-none cursor-pointer duration-100 bg-gray-300 hover:bg-gray-200 p-1 rounded-l-lg">
          <IoIosArrowBack onClick={() => setOpenHobbyMenu(!openHobbyMenu)} className="size-5" />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
