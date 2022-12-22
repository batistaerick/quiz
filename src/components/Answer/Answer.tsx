import { FC } from "react";
import AnswerModel from "../../models/answerModel";

import styles from "../../styles/Answer.module.css";

interface AnswerProps {
  answer: AnswerModel;
  index: number;
  letter: string;
  letterBackground: string;
  onResponse: (index: number) => void;
}

const Answer: FC<AnswerProps> = ({
  answer,
  index,
  letter,
  letterBackground,
  onResponse,
}) => {
  const handleClick = () => {
    onResponse(index);
  };

  const isCorrectAnswer = answer.correct ? (
    <div className={styles.correct}>
      <div>The correct answer is...</div>
      <div className={styles.value}>{answer.value}</div>
    </div>
  ) : (
    <div className={styles.wrong}>
      <div>Wrong answer D:</div>
      <div className={styles.value}>{answer.value}</div>
    </div>
  );

  const isRevealed = answer.revealed ? (
    <div className={styles.back}>{isCorrectAnswer}</div>
  ) : (
    <div className={styles.answerContent}>
      <div className={styles.front}>
        <div
          className={styles.letter}
          style={{
            backgroundColor: letterBackground,
          }}
        >
          {letter}
        </div>
        <div className={styles.value}>{answer.value}</div>
      </div>
    </div>
  );

  return (
    <div className={styles.answer} onClick={handleClick}>
      {isRevealed}
    </div>
  );
};

export default Answer;
