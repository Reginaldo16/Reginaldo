import styles from "../styles/Projects.module.css";


//import countryApi from "../img/countryApi.png";
// import jsSVG from "../components/icons/js.svg";
// import sassSVG from "../components/icons/sass.svg";
// import htmlSVG from "../components/icons/html-5.svg";
// import cssSVG from "../components/icons/css-3.svg";
// import reactSVG from "../components/icons/react.svg";
// import reduxSVG from "../components/icons/redux.svg";
// import tailwindSVG from "../components/icons/tailwind.svg";
// import nodejsSVG from "../components/icons/nodejs.svg";
// import expressSVG from "../components/icons/express.svg";
// import mongoSVG from "../components/icons/mongo.svg";

// import img2 from "../img/quidtracker.png";
// import wmc from "../img/wmc.png";
// import pfa from "../img/pfa.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className={styles.container}>
      
      {/* <Link to="/QuidTracker" className={styles.projects}>
        <div className={styles.title}>🏆 Quid Tracker 🏆</div>
        <div className={styles.box}>
          <img className={styles.projectsImg} src={img2} alt="project img" />
        </div>
        <div className={styles.skillsGrid}>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={htmlSVG} alt="" />
          </div>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={cssSVG} alt="" />
          </div>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={tailwindSVG} alt="" />
          </div>

          <div className={styles.skills}>
            <img className={styles.skillsimg} src={jsSVG} alt="" />
          </div>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={reactSVG} alt="" />
          </div>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={reduxSVG} alt="" />
          </div>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={nodejsSVG} alt="" />
          </div>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={expressSVG} alt="" />
          </div>

          <div className={styles.skills}>
            <img className={styles.skillsimg} src={mongoSVG} alt="" />
          </div>
        </div>
      </Link> */}

   
    </div>
  );
}

export default Projects;
