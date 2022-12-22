import styles from "../../styles/Question.module.css";

import { FC } from "react";
import QuestionModel from "../../models/questionModel";
import Answer from "../Answer/Answer";
import Statement from "../Statement/Statement";
import Timer from "../Timer/Timer";

const letter = [
  { value: "A", color: "#F2C866" },
  { value: "B", color: "#F266BA" },
  { value: "C", color: "#85D4F2" },
  { value: "D", color: "#BCE596" },
];

interface QuestionProps {
  question: QuestionModel;
  responseTime?: number;
  onResponse: (index: number) => void;
  timeOver: () => void;
}

const Question: FC<QuestionProps> = ({
  question,
  onResponse,
  timeOver,
  responseTime,
}) => {
  const answerRender = () =>
    question.answers.map((answer, index) => (
      <Answer
        answer={answer}
        index={index}
        letter={letter[index].value}
        letterBackground={letter[index].color}
        key={index}
        onResponse={onResponse}
      />
    ));

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      <Timer duration={responseTime ?? 10} timeOver={timeOver} />
      {answerRender()}
    </div>
  );
};

export default Question;
