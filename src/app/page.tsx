import HeroComponent from "./Component/HeroComponent/HeroComponent.js";
import AboutComponent from "./Component/AboutComponent/AboutComponent.js";
import ProjectComponent from "./Component/ProjectsComponent/ProjectComponent.js";
import ExpertiseComponent from "./Component/ExpertiseComponent/ExpertiseComponent.js";
import AwardsComponent from "./Component/AwardsComponent/AwardsComponent.js";
import TesttimonialComponent from "./Component/TestimonialComponent/TesttimonialComponent.js";
import MyJourneyComponent from "./Component/MyJourneyComponent/MyJourneyComponent.js";
import DiscussComponent from "./Component/DiscussComponent/DiscussComponent.js";
import FooterComponent from "./Component/FooterComponent/FooterComponent.js";

export default function Home() {
  return (
    <div className="bg">
      <HeroComponent />
      <AboutComponent />
      <ProjectComponent />
      <ExpertiseComponent />
      <AwardsComponent />
      <TesttimonialComponent />
      {/* <MyJourneyComponent />
      <DiscussComponent />
      <FooterComponent /> */}
    </div>
  );
}
