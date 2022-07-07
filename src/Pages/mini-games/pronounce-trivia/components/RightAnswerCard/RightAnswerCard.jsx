import { useEffect, useState } from "react";
import "./RightAnswerCard.css";

const RightAnswerCard = ({
  answer,
  setCorrectAnswers,
  clicked,
  setClicked,
  setIsCorrect,
  setWordsIndex,
  setIsHebrewWord,
  setIsCorrectTracker,
}) => {
  const [bg, setBg] = useState("");
  useEffect(() => {
    setBg("");
    if (clicked) {
      setBg("sBC");
    }
  }, [clicked]);
  const onAnswerClick = () => {
    if (clicked) return;
    setClicked(true);
    setIsCorrect(true);
    setIsCorrectTracker((prev) => !prev);
    setTimeout(() => {
      setCorrectAnswers((prev) => prev + 1);
      setIsHebrewWord((prev) => !prev);
      setWordsIndex((prev) => prev + 1);
    }, 2000);
  };

  return (
    <div className={`answer-card ${bg}`} onClick={onAnswerClick}>
      <p>{answer}</p>
    </div>
  );
};
export default RightAnswerCard;
