import "./WrongAnswerCard.css";

const WrongAnswerCard = ({
  answer,
  clicked,
  setClicked,
  setIsCorrect,
  setWordsIndex,
  setIsHebrewWord,
  setIsCorrectTracker,
}) => {
  const onAnswerClick = () => {
    if (clicked) return;
    setClicked(true);
    setIsCorrect(false);
    setIsCorrectTracker((prev) => !prev);
    setTimeout(() => {
      setWordsIndex((prev) => prev + 1);
      setIsHebrewWord((prev) => !prev);
    }, 2000);
  };

  return (
    <div className="answer-card" onClick={onAnswerClick}>
      <p>{answer}</p>
    </div>
  );
};
export default WrongAnswerCard;
