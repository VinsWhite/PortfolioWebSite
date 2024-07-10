import { useState, useEffect } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";
import smoothScroll from "../assets/functions/smoothScroll";

export default function ScrollToTopComp() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    smoothScroll();
  }

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FaArrowTurnUp 
      onClick={handleClick}
      className={`fixed bottom-10 right-10 text-secondary bg-white p-1 text-2xl rounded-md cursor-pointer transition-opacity duration-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
    />
  )
}
