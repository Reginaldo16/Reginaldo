import Tab from "./Tab";
import styles from "../styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />

      <Tab icon="/markdown_icon.svg" filename="skills.md" path="/skills" />
      <Tab
        icon="/react_icon.svg"
        filename="Projecto1.jsx"
        path="#"
      />

      <Tab
        icon="/react_icon.svg"
        filename="Projecto2.jsx"
        path="#"
      />

      <Tab
        icon="/react_icon.svg"
        filename="Projecto3.jsx"
        path="#"
      />

      <Tab icon="/react_icon.svg" filename="Projecto4.jsx" path="#" />
    </div>
  );
};

export default Tabsbar;
