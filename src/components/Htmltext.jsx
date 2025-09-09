import styles from "../styles/about.module.css";

function Htmltext() {
  const htmlCode = `
<span class="${styles.doctype}">&lt;!DOCTYPE html&gt;</span>
<span class="${styles.tag}">&lt;html</span> 
<span class="${styles["attr-name"]}">lang</span>=<span class="${styles["attr-value"]}">&quot;en&quot;</span>
<span class="${styles.tag}">&gt;</span>
<span class="${styles.tag}">&lt;body&gt;</span>
  <span class="${styles.tag}">&lt;title&gt;</span>
  <span class="${styles.plain}">Reginaldo Alzira</span>
  <span class="${styles.tag}">&lt;/title&gt;</span>
  
  <span class="${styles.tag}">&lt;main&gt;</span>
    <span class="${styles.tag}">&lt;p&gt;</span>
    <span class="${styles.plain}">
      Olá! Eu sou o <strong>Reginaldo Alzira</strong>, desenvolvedor
      fullstack em formação, natural de Moçambique. Atualmente curso o último
      ano da Licenciatura em Desenvolvimento de Software na Universidade São
      Tomás de Moçambique e já atuei como front-end developer em projetos reais
      com React.js, Next.js e TailwindCSS.
    </span>
    <span class="${styles.tag}">&lt;/p&gt;</span>

    <span class="${styles.tag}">&lt;p&gt;</span>
    <span class="${styles.plain}">
      Tenho experiência na construção de aplicações web responsivas,
      integração de APIs RESTful e uso de bases de dados como MySQL,
      PostgreSQL e MongoDB. Meu objetivo é consolidar minha carreira
      como desenvolvedor fullstack, contribuindo em projetos de alto
      impacto e crescendo continuamente na área de tecnologia.
    </span>
    <span class="${styles.tag}">&lt;/p&gt;</span>
  <span class="${styles.tag}">&lt;/main&gt;</span>
<span class="${styles.tag}">&lt;/body&gt;</span>
<span class="${styles.tag}">&lt;/html&gt;</span>
`;

  return (
    <div>
      <pre className={styles.pre}>
        <code>
          {htmlCode
            .trim()
            .split("\n")
            .map((line, index) => (
              <div key={index} className={styles.lineContainer}>
                <span className={styles.lineNumber}>{index + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: line }} />
              </div>
            ))}
        </code>
      </pre>
    </div>
  );
}

export default Htmltext;
