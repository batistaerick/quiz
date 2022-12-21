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

  return (
    <div className={styles.answer} onClick={handleClick}>
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
        <div className={styles.back}></div>
      </div>
    </div>
  );
};

export default Answer;
