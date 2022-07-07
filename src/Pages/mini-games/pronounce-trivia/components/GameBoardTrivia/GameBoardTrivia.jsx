import { useEffect, useState } from "react";
import { arabicWords } from "../../wordsData/arabicWords.js";
import { hebrewWords } from "../../wordsData/hebrewWords";
import SpinningLogo from "../../../../../styled-components/SpinningLogo/SpinningLogo";
import TriviaAnswers from "../TriviaAnswers/TriviaAnswers";
import TriviaQuestion from "../TriviaQuestion/TriviaQuestion";
import gotchya from "../../../../../api/gotchyaApi.js";
import "./GameBoardTrivia.css";

const GameBoardTrivia = (props) => {
  const [words, setWords] = useState([]);
  const [arabicWrongAnswers, setArabicWrongAnswers] = useState([]);
  const [hebrewWrongAnswers, setHebrewWrongAnswers] = useState([]);
  const [wordsIndex, setWordsIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isHebrewWord, setIsHebrewWord] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [spinningLogoClass, setSpinningLogoClass] = useState("spin");
  const [boardClassName, setBoardClassName] = useState("");
  const [isCorerctTracker, setIsCorrectTracker] = useState(false);

  const chooseThreeWrongAnswers = (wrongAnswersList, words, lang) => {
    const chosenWords = [];
    for (let i = 0; chosenWords.length < 3; i++) {
      const rand = Math.floor(Math.random() * wrongAnswersList.length);
      if (words.every((word) => word[lang] !== wrongAnswersList[rand])) {
        chosenWords.push(wrongAnswersList[rand]);
      }
    }
    return chosenWords;
  };

  const chooseEightRandomWords = (words) => {
    const indices = [];
    const randomWords = [];
    for (let i = 0; randomWords.length < 8; i++) {
      const rand = Math.floor(Math.random() * words.length);
      if (indices.indexOf(rand) === -1) {
        indices.push(rand);
        randomWords.push(words[rand]);
      }
    }

    return randomWords;
  };

  useEffect(() => {
    const getWords = async () => {
      try {
        const { data: words } = await gotchya.get("/wordBank");
        const randomWords = chooseEightRandomWords(words);
        setWords(randomWords);
        const heWords = chooseThreeWrongAnswers(
          hebrewWords,
          randomWords,
          "hebrew"
        );
        const arWords = chooseThreeWrongAnswers(
          arabicWords,
          randomWords,
          "arabic"
        );
        setArabicWrongAnswers(arWords);
        setHebrewWrongAnswers(heWords);
      } catch (e) {
        console.log(e);
      }
    };
    getWords();
  }, []);

  useEffect(() => {
    setClicked(false);
    setTimeout(() => {}, 1000);
    setBoardClassName("switchPlaces");
    setTimeout(() => {
      setBoardClassName("");
    }, 2000);

    if (wordsIndex > 7) {
      props.isDone(true);
    }
  }, [wordsIndex]);

  useEffect(() => {
    if (isCorrect) setSpinningLogoClass("green");
    if (isCorrect === false) setSpinningLogoClass("red");

    setTimeout(() => {
      setSpinningLogoClass("spin");
    }, 2000);
  }, [isCorrect, isCorerctTracker]);

  return (
    <>
      {words.length > 0 && wordsIndex < 8 && (
        <div className={`trivia-game-board ${boardClassName}`}>
          <TriviaQuestion
            order={isHebrewWord ? 2 : 0}
            pos={isHebrewWord ? "" : "arabic"}
            word={
              isHebrewWord ? words[wordsIndex].hebrew : words[wordsIndex].arabic
            }
            pronun={
              isHebrewWord
                ? words[wordsIndex].Hspelling
                : words[wordsIndex].Aspelling
            }
          />

          <TriviaAnswers
            order={isHebrewWord ? 0 : 2}
            pos={isHebrewWord ? "arabic" : ""}
            rightAnswer={
              isHebrewWord ? words[wordsIndex].arabic : words[wordsIndex].hebrew
            }
            wrongAnswers={
              isHebrewWord ? arabicWrongAnswers : hebrewWrongAnswers
            }
            setWordsIndex={setWordsIndex}
            setCorrectAnswers={setCorrectAnswers}
            setIsHebrewWord={setIsHebrewWord}
            setIsCorrect={setIsCorrect}
            clicked={clicked}
            setClicked={setClicked}
            setIsCorrectTracker={setIsCorrectTracker}
          />
        </div>
      )}
      <SpinningLogo spinningLogoClass={spinningLogoClass} />
    </>
  );
};
export default GameBoardTrivia;
