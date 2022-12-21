import { FC } from "react";
import QuestionModel from "../../models/questionModel";

import styles from "../../styles/Question.module.css";
import Answer from "../Answer/Answer";
import Statement from "../Statement/Statement";

const letter = [
  { value: "A", color: "#F2C866" },
  { value: "B", color: "#F266BA" },
  { value: "C", color: "#85D4F2" },
  { value: "D", color: "#BCE596" },
];

interface QuestionProps {
  question: QuestionModel;
  onResponse: (index: number) => void;
}

const Question: FC<QuestionProps> = ({ question, onResponse }) => {
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
      {answerRender()}
    </div>
  );
};

export default Question;
