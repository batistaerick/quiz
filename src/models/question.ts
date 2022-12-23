import { shuffle } from "../functions/arrays";
import AnswerModel from "./answer";

class QuestionModel {
  #id: number;
  #statement: string;
  #answers: AnswerModel[];
  #gotItRight: boolean;

  constructor(
    id: number,
    statement: string,
    answers: AnswerModel[],
    gotItRight: boolean = false
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#answers = answers;
    this.#gotItRight = gotItRight;
  }

  get id(): number {
    return this.#id;
  }

  get statement(): string {
    return this.#statement;
  }

  get answers(): AnswerModel[] {
    return this.#answers;
  }

  get gotItRight(): boolean {
    return this.#gotItRight;
  }

  get unanswered() {
    return !this.answered;
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.revealed) {
        return true;
      }
    }
    return false;
  }

  answerWith(selection: number): QuestionModel {
    const gotItRight = this.#answers[selection]?.correct;
    const answers = this.#answers.map((answer, index) => {
      const selectedAnswer = selection === index;
      const shouldReveal = selectedAnswer || answer.correct;
      return shouldReveal ? answer.reveal() : answer;
    });
    return new QuestionModel(this.id, this.statement, answers, gotItRight);
  }

  shuffleAnswers(): QuestionModel {
    let scrambledAnswers = shuffle(this.#answers);
    return new QuestionModel(
      this.#id,
      this.#statement,
      scrambledAnswers,
      this.#gotItRight
    );
  }

  static fromObject(object: QuestionModel): QuestionModel {
    const answers = object.answers.map((answer) =>
      AnswerModel.fromObject(answer)
    );
    return new QuestionModel(
      object.id,
      object.statement,
      answers,
      object.gotItRight
    );
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      answers: this.#answers.map((answer) => answer.toObject()),
      answered: this.answered,
      gotItRight: this.#gotItRight,
    };
  }
}

export default QuestionModel;
