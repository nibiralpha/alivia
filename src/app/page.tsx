import HeroComponent from "./Component/HeroComponent/HeroComponent.js";
import AboutComponent from "./Component/AboutComponent/AboutComponent.js";

export default function Home() {
  return (
    <div className="bg">
      <HeroComponent />
      <AboutComponent />
    </div>
  );
}
