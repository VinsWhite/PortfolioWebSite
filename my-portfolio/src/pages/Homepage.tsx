import HeroComp from "../components/home/HeroComp";
import IntroductionComp from "../components/home/IntroductionComp";
import LanguagesComp from "../components/home/LanguagesComp";
import SkillsComp from "../components/home/SkillsComp";
import ProjectsComp from "../components/home/ProjectsComp";

// To do: scroll bar custom

export default function Homepage() {
    return (
      <>
        <div className="bg-primary grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 px-5 py-20 overflow-x-hidden select-none">
          <HeroComp />
          <IntroductionComp />
        </div>
        <div className="bg-almostWhite px-5 py-10 select-none">
          <SkillsComp />
          <LanguagesComp />
        </div>
        <ProjectsComp />
      </>
    )
  }
  