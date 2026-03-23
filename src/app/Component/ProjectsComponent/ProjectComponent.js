import SectionHeadingComponent from "../SectionHeadingComponent/SectionHeadingComponent";
import styles from "./Project.module.css";

export default function ProjectComponent() {
  return (
    <div className={styles.project_component}>
      <SectionHeadingComponent
        name={"/ PROJECT"}
        number={"N.02"}
        mbottom={"100px"}
        mtop={"50px"}
      />

      <div className={styles.gallary}>
        <div className={styles.year}>(19-25)</div>
        <div className={styles.images}>
          <div className={styles.image}>
            <img className={styles.img} src="/images/project_main_image.webp" />
            <div className={styles.project_detail}>
              <div className="name">Runo</div>
              <div className="project_year">/2025</div>
            </div>
          </div>
          <div className={styles.image}>
            <img
              className={styles.img}
              src="/images/project_main_image2.webp"
            />
            <div className={styles.project_detail}>
              <div className="name">Biofix</div>
              <div className="project_year">/2025</div>
            </div>
          </div>
          <div className={styles.image}>
            <img
              className={styles.img}
              src="/images/project_main_image3.webp"
            />
            <div className={styles.project_detail}>
              <div className="name">Sukim</div>
              <div className="project_year">/2025</div>
            </div>
          </div>
          <div className={styles.image}>
            <img
              className={styles.img}
              src="/images/project_main_image4.webp"
            />
            <div className={styles.project_detail}>
              <div className="name">Arca</div>
              <div className="project_year">/2025</div>
            </div>
          </div>
        </div>
        <div className={styles.explore}>
          <div className="text">Explore All</div>
          <div className="button">
            <img src="/images/next.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
