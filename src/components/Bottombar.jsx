import ErrorIcon from "./icons/ErrorIcon";
import WarningIcon from "./icons/WarningIcon";
import BellIcon from "./icons/BellIcon";
import CheckIcon from "./icons/CheckIcon";

import SourceControlIcon from "./icons/SourceControlIcon";
import styles from "../styles/Bottombar.module.css";
import Reacticon from "./icons/Reacticon";

const Bottombar = () => {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <a
          href="#"
          target="_blank"
          className={styles.section}
        >
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <WarningIcon className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <Reacticon className={styles.icon} />
          <p>Powered by React.js</p>
        </div>
        <div className={styles.section}>
          <CheckIcon className={styles.icon} />
          <p>Prettier</p>
        </div>
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
