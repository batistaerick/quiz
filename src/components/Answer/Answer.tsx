import styles from "../../styles/Answer.module.css";

import { FC } from "react";
import AnswerModel from "../../models/answer";

interface AnswerProps {
  answer: AnswerModel;
  index: number;
  letter: string;
  letterBackground: string;
  providedAnswer: (index: number) => void;
}

const Answer: FC<AnswerProps> = ({
  answer,
  index,
  letter,
  letterBackground,
  providedAnswer,
}) => {
  const answerRevealed = answer.revealed ? styles.answerRevealed : "";

  const onClick = () => {
    providedAnswer(index);
  };

  return (
    <div className={styles.answer} onClick={onClick}>
      <div className={`${answerRevealed} ${styles.answerContent}`}>
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
        <div className={styles.back}>
          {answer.correct ? (
            <div className={styles.correct}>
              <div>Right Answer :D</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          ) : (
            <div className={styles.wrong}>
              <div>Wrong answer D:</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Answer;
