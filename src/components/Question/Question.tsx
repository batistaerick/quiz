import styles from "../../styles/Question.module.css";

import { FC } from "react";
import QuestionModel from "../../models/question";
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
  providedResponse: (index: number) => void;
  timeOver: () => void;
}

const Question: FC<QuestionProps> = ({
  question,
  providedResponse,
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
        key={`${question.id}-${index}`}
        providedAnswer={providedResponse}
      />
    ));

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      <Timer
        key={question.id}
        duration={responseTime ?? 10}
        timeOver={timeOver}
      />
      {answerRender()}
    </div>
  );
};

export default Question;
