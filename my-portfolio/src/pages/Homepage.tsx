import HeroComp from "../components/home/HeroComp";
import IntroductionComp from "../components/home/IntroductionComp";
import LanguagesComp from "../components/home/LanguagesComp";
import SkillsComp from "../components/home/SkillsComp";
import ProjectsComp from "../components/home/ProjectsComp";
import { useEffect, useState } from "react";
import scrollToTop from "../assets/functions/scrollToTop";
import Lottie from 'lottie-react';
import computerAnimation from '../assets/animations/computerAnimation.json'

// To do: scroll bar custom

export default function Homepage() {

  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    scrollToTop();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  
  

    return (
      <>
        <div className="fixed top-0 left-0 h-1 bg-secondary z-50" style={{ width: `${scrollProgress}%` }}></div>
        <div className="relative bg-primary grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 px-5 py-20 overflow-x-hidden select-none">
          <HeroComp />
          <IntroductionComp />
          <Lottie className="w-64 hidden md:block absolute top-10 right-2" animationData={computerAnimation} />
        </div>
        <div className="bg-almostWhite px-5 py-10 select-none">
          <SkillsComp />
          <LanguagesComp />
        </div>
        <ProjectsComp />
      </>
    )
  }
  