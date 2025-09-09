/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const [text1, setText1] = useState("Reginaldo Alzira");
  const [text2, setText2] = useState("FullStack Developer");
  const [isGoing1, setIsGoing1] = useState(false);
  const [isGoing2, setIsGoing2] = useState(false);
  const wordRef1 = useRef(null);
  const wordRef2 = useRef(null);

  const items = Array.from({ length: 5000 }, (_, index) => (
    <div key={index} className={styles.item}></div>
  ));

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomLetter = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[rand(0, alphabet.length - 1)];
  };

  const getRandomWord = (word) => {
    let finalWord = "";
    for (let i = 0; i < word.length; i++) {
      finalWord += word[i] === " " ? " " : getRandomLetter();
    }
    return finalWord;
  };

  const animateText = (setText, initialText, setIsGoing, wordRef, isGoing) => {
    if (isGoing) return;

    setIsGoing(true);
    let count = 0;
    let canChange = false;
    const INITIAL_WORD = initialText;

    // Start with a random word
    let randomWord = getRandomWord(INITIAL_WORD);
    setText(randomWord);

    const interv = setInterval(() => {
      let finalWord = "";
      for (let x = 0; x < INITIAL_WORD.length; x++) {
        if (x <= count && canChange) {
          finalWord += INITIAL_WORD[x];
        } else {
          finalWord += getRandomLetter();
        }
      }
      setText(finalWord);

      if (canChange) {
        count++;
      }

      // Stop changing characters after 1 second (10 iterations at 50ms each)
      if (count >= INITIAL_WORD.length || Date.now() - startTime > 1000) {
        clearInterval(interv);
        setText(INITIAL_WORD);
        setIsGoing(false);
      }

      // Ensure we start changing characters after a brief delay
      if (Date.now() - startTime > 200) {
        canChange = true;
      }
    }, 70);

    const startTime = Date.now(); // Record the start time of the animation
  };
  useEffect(() => {
    const wordElement1 = wordRef1.current;
    const wordElement2 = wordRef2.current;

    wordElement1.addEventListener("mouseenter", () =>
      animateText(setText1, "Reginaldo Alzira", setIsGoing1, wordRef1, isGoing1)
    );
    wordElement2.addEventListener("mouseenter", () =>
      animateText(
        setText2,
        "FullStack Developer",
        setIsGoing2,
        wordRef2,
        isGoing2
      )
    );

    return () => {
      wordElement1.removeEventListener("mouseenter", () =>
        animateText(setText1, "Reginaldo Alzira", setIsGoing1, wordRef1, isGoing1)
      );
      wordElement2.removeEventListener("mouseenter", () =>
        animateText(
          setText2,
          "FullStack Developer",
          setIsGoing2,
          wordRef2,
          isGoing2
        )
      );
    };
  }, [isGoing1, isGoing2]);

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        {items}
        <div className={styles.title}>
          <p className={styles.title1} ref={wordRef1}>
            {text1}
          </p>
          <p className={styles.title2} ref={wordRef2}>
            {text2}
          </p>
          <div className={styles.btnBox}>
            <Link to={"/projects"}>
              <button className={styles.viewButton}>View Projects</button>
            </Link>
            <Link to={"/contact"}>
              <button className={styles.contactButton}>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
