import { useState } from "react";
import { Link } from "react-router-dom";

import ChevronRight from "../components/icons/ChevronRight";
import styles from "../styles/Explorer.module.css";
import ProjectFolder from "./ProjectFolder";

const explorerItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "html_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "css_icon.svg",
  },
 
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => (
            <Link to={item.path} key={item.name} className={styles.file}>
              <img
                src={`/${item.icon}`}
                alt={item.name}
                height={18}
                width={18}
              />{" "}
              <p className={styles.filename}>{item.name}</p>
            </Link>
          ))}
          <ProjectFolder />
          <Link to="/skills" key="skills" className={styles.file}>
              <img
                src="/markdown_icon.svg"
                alt="skills"
                height={18}
                width={18}
              />{" "}
              <p className={styles.filename}>skills.md</p>
            </Link>


          {/* {
    name: "skills.md",
    path: "/skills",
    icon: "markdown_icon.svg",
  }, */}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
