import { useState, useEffect } from "react";
import styles from "../styles/about.module.css";
import Htmltext from "../components/Htmltext";

function About() {
  const [isWideScreen, setIsWideScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1600 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const htmlCodeBefore = `
<span class="${styles.doctype}">&lt;!DOCTYPE html&gt;</span>
<span class="${styles.tag}">&lt;html</span> <span class="${styles["attr-name"]}">lang</span>=<span class="${styles["attr-value"]}">&quot;pt&quot;</span><span class="${styles.tag}">&gt;</span>
<span class="${styles.tag}">&lt;body&gt;</span>
    <span class="${styles.tag}">&lt;title&gt;</span><span class="${styles.plain}">Reginaldo Alzira</span><span class="${styles.tag}">&lt;/title&gt;</span>
    <span class="${styles.tag}">&lt;main&gt;</span>
`;

  const htmlCodeAfter = `
    <span class="${styles.tag}">&lt;/main&gt;</span>
<span class="${styles.tag}">&lt;/body&gt;</span>
<span class="${styles.tag}">&lt;/html&gt;</span>
`;

  return (
    <div>
      {isWideScreen ? (
        <Htmltext />
      ) : (
        <pre className={styles.pre}>
          <code>
            {htmlCodeBefore
              .trim()
              .split("\n")
              .map((line, index) => (
                <div key={index} className={styles.lineContainer}>
                  <span className={styles.lineNumber}>{index + 1}</span>
                  <span
                    className={styles.code}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                </div>
              ))}
            <div className={styles.lineContainer}>
              <span className={styles.lineNumber}>7</span>
              <span className={styles.tag}>&lt;p&gt;</span>
              <span className={styles.plain}>
                Olá! Eu sou o <strong>Reginaldo Alzira</strong>, desenvolvedor
                fullstack em formação, natural de Moçambique. Atualmente curso o último
                ano da Licenciatura em Desenvolvimento de Software na Universidade São
                Tomás de Moçambique e já atuei como front-end developer em projetos reais
                com React.js, Next.js e TailwindCSS.
              </span>
              <span className={styles.tag}>&lt;/p&gt;</span>
            </div>
            <div className={styles.lineContainer}>
              <span className={styles.lineNumber}>8</span>
              <span className={styles.tag}>&lt;p&gt;</span>
              <span className={styles.plain}>
                Tenho experiência na construção de aplicações web responsivas,
                integração de APIs RESTful e uso de bases de dados como MySQL,
                PostgreSQL e MongoDB. Meu objetivo é consolidar minha carreira
                como desenvolvedor fullstack, contribuindo em projetos de alto
                impacto e crescendo continuamente na área de tecnologia.
              </span>
              <span className={styles.tag}>&lt;/p&gt;</span>
            </div>
            {htmlCodeAfter
              .trim()
              .split("\n")
              .map((line, index) => (
                <div key={index + 9} className={styles.lineContainer}>
                  <span className={styles.lineNumber}>{index + 9}</span>
                  <span
                    className={styles.code}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                </div>
              ))}
          </code>
        </pre>
      )}
    </div>
  );
}

export default About;
