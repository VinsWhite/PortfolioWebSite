import HeroComp from "../components/home/HeroComp";
import IntroductionComp from "../components/home/IntroductionComp";

export default function Homepage() {
    return (
      <>
        <div className="bg-primary grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 px-5 py-20 overflow-x-hidden select-none">
          <HeroComp />
          <IntroductionComp />
        </div>
      </>
    )
  }
  