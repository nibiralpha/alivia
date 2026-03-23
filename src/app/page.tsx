import HeroComponent from "./Component/HeroComponent/HeroComponent.js";
import AboutComponent from "./Component/AboutComponent/AboutComponent.js";
import ProjectComponent from "./Component/ProjectsComponent/ProjectComponent.js";

export default function Home() {
  return (
    <div className="bg">
      <HeroComponent />
      <AboutComponent />
      <ProjectComponent />
    </div>
  );
}
