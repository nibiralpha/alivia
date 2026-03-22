import "./Hero.css";

export default function HeroComponent() {
  return (
    <div className="t_container">
      <div className="menu_container">
        <div className="logo">Alivia</div>
        <div className="menu">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      
      <div className="about_text_container">
        <div className="about_text">
          <div className="left_side">
            <div className="left_side_text">Branding / Deisng / UI/UX / Strategy /</div>
          </div>
          <div className="right_side">
            <img className="right_side_img" src="/images/world.svg" />
            <div className="right_side_text">Based in Amsterdam the Dutch capital</div>
          </div>
        </div>
      </div>

      <div className="alivia_text_container">
        <div className="alivia_left_text">Hi, I am</div>
        <div className="alivia_text">Alivia</div>
        <div className="alivia_right_text">Daiana</div>
      </div>
    </div>
  );
}
