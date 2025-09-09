import styles from "../styles/skills.module.css";

import JAVA from "../img/JAVA-cert.jpg"
import bytes from "../img/b4f.jpeg"
import jsSVG from "../components/icons/js.svg";
import sassSVG from "../components/icons/sass.svg";
import htmlSVG from "../components/icons/html-5.svg";
import cssSVG from "../components/icons/css-3.svg";
import reactSVG from "../components/icons/react.svg";
import gitSVG from "../components/icons/git.svg";
import reduxSVG from "../components/icons/redux.svg";
import tailwindSVG from "../components/icons/tailwind.svg";
import figmaSVG from "../components/icons/figma.svg";
import nodeJSSVG from "../components/icons/nodejs.svg";
import expressSVG from "../components/icons/express.svg";
import mongoSVG from "../components/icons/mongo.svg";

function Skills() {
  return (
    <div className={styles.skillsPage}>
      <div className={styles.skillsTitle}>Skills</div>
      <div className={styles.skillsGrid}>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>HTML</div>
          <img className={styles.skillsimg} src={htmlSVG} alt="HTML" />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>CSS</div>
          <img className={styles.skillsimg} src={cssSVG} alt="CSS" />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>Sass</div>
          <img className={styles.skillsimg} src={sassSVG} alt="Sass" />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>JavaScript</div>
          <img className={styles.skillsimg} src={jsSVG} alt="JavaScript" />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>React</div>
          <img className={styles.skillsimg} src={reactSVG} alt="React" />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>Redux</div>
          <img className={styles.skillsimg} src={reduxSVG} alt="Redux" />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>Tailwind</div>
          <img className={styles.skillsimg} src={tailwindSVG} alt="Tailwind" />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>Figma</div>
          <img className={styles.skillsimg} src={figmaSVG} alt="Figma" />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>Git</div>
          <img className={styles.skillsimg} src={gitSVG} alt="Git" />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>Node.js</div>
          <img className={styles.skillsimg} src={nodeJSSVG} alt="Node.js" />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>Express</div>
          <img className={styles.skillsimg} src={expressSVG} alt="Express" />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillLabel}>MongoDB</div>
          <img className={styles.skillsimg} src={mongoSVG} alt="MongoDB" />
        </div>
      </div>

      <div className={styles.skillsTitle}>Certs</div>
      <div className={styles.certsGrid}>
        <div className={styles.certs}>
          <img
            className={styles.certsimg}
            src={JAVA}
            alt="JavaScript Certificate"
          />
        </div>

         <div className={styles.certs}>
          <img
            className={styles.certsimg}
            src={bytes}
            alt="JavaScript Certificate"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
