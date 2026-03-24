import HeroComponent from "./Component/HeroComponent/HeroComponent.js";
import AboutComponent from "./Component/AboutComponent/AboutComponent.js";
import ProjectComponent from "./Component/ProjectsComponent/ProjectComponent.js";
import ExpertiseComponent from "./Component/ExpertiseComponent/ExpertiseComponent.js";
import AwardsComponent from "./Component/AwardsComponent/AwardsComponent.js";

export default function Home() {
  return (
    <div className="bg">
      <HeroComponent />
      <AboutComponent />
      <ProjectComponent />
      <ExpertiseComponent />
      <AwardsComponent />
    </div>
  );
}
