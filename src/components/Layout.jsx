/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Titlebar from "./Titlebar";
import Sidebar from "./SideBar";
import Explorer from "./Explorer";
import Bottombar from "./Bottombar";
import Tabsbar from "./Tabsbar";
import styles from "../styles/Layout.module.css";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      const mainContent = document.querySelector("#main-editor"); // Target your main content
      if (mainContent) {
          mainContent.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll the container
      }
  }, [pathname]);

  return null; // This component doesn't render anything
}


const Layout = ({ children }) => {
    return (
        <>
       
            <Titlebar />
            <div className={styles.main}>

                <Sidebar />
                <Explorer />
                <div style={{ width: "100%" }} className={styles.box}>
                    
                    <Tabsbar />
                    <ScrollToTop /> {/* Ensure ScrollToTop is rendered here */}
                    <main id="main-editor" className={styles.content}>
                        {children}
                    </main>
                </div>
            </div>
            <Bottombar />
        
        </>
    );
};

export default Layout;
