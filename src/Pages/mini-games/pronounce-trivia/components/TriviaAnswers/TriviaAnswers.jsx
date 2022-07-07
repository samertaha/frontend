import "./TriviaAnswers.css";
import RightAnswerCard from "../RightAnswerCard/RightAnswerCard";
import WrongAnswerCard from "../WrongAnswerCard/WrongAnswerCard";
import { useEffect, useState } from "react";

const TriviaAnswers = ({
  rightAnswer,
  wrongAnswers,
  setWordsIndex,
  setCorrectAnswers,
  setIsHebrewWord,
  setIsCorrect,
  clicked,
  setClicked,
  order,
  pos,
  setIsCorrectTracker,
}) => {
  const [rand, setRand] = useState(null);

  useEffect(() => {
    setRand(Math.floor(Math.random() * (wrongAnswers.length + 1)));
  }, [wrongAnswers, rightAnswer]);

  const formatAnswers = (wrongAnswers, rightAnswer, pos) => {
    const answersJsxFormat = wrongAnswers.map((wrongAnswer) => {
      return (
        <WrongAnswerCard
          key={wrongAnswer}
          answer={wrongAnswer}
          setWordsIndex={setWordsIndex}
          setIsHebrewWord={setIsHebrewWord}
          clicked={clicked}
          setClicked={setClicked}
          setIsCorrect={setIsCorrect}
          setIsCorrectTracker={setIsCorrectTracker}
        />
      );
    });

    const rightAnswerJsx = (
      <RightAnswerCard
        key={rightAnswer}
        answer={rightAnswer}
        setWordsIndex={setWordsIndex}
        setCorrectAnswers={setCorrectAnswers}
        setIsHebrewWord={setIsHebrewWord}
        clicked={clicked}
        setClicked={setClicked}
        setIsCorrect={setIsCorrect}
        setIsCorrectTracker={setIsCorrectTracker}
      />
    );

    answersJsxFormat.splice(pos, 0, rightAnswerJsx);

    return answersJsxFormat;
  };

  return (
    <div className={`trivia-answers ${pos}`} style={{ order: `${order}` }}>
      {formatAnswers(wrongAnswers, rightAnswer, rand)}
    </div>
  );
};
export default TriviaAnswers;
