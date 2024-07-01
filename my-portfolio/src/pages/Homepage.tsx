import HeroComp from "../components/home/HeroComp";
import IntroductionComp from "../components/home/IntroductionComp";

export default function Homepage() {
    return (
      <>
        <div className="bg-primary grid grid-cols-2 gap-4 p-4 container">
          <HeroComp />
          <IntroductionComp />
        </div>
      </>
    )
  }
  