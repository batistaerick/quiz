import AnswerModel from "../../models/answer";
import QuestionModel from "../../models/question";

const questions: QuestionModel[] = [
  new QuestionModel(
    1,
    "Which insect transmits Chagas disease?",
    [
      AnswerModel.wrong("Bee"),
      AnswerModel.wrong("Cockroach"),
      AnswerModel.wrong("Flea"),
      AnswerModel.correct("Kissing Bug"),
    ],
    true
  ),
  new QuestionModel(
    2,
    "Which fruit is known in the North and Northeast as 'Jerimum'?",
    [
      AnswerModel.wrong("Cashew"),
      AnswerModel.wrong("Coconut"),
      AnswerModel.wrong("Chayote"),
      AnswerModel.correct("Pumpkin"),
    ],
    true
  ),
  new QuestionModel(
    3,
    "What is the dog collective?",
    [
      AnswerModel.wrong("Herd"),
      AnswerModel.wrong("Wolf Pack"),
      AnswerModel.wrong("Flock"),
      AnswerModel.correct("Pack"),
    ],
    true
  ),
  new QuestionModel(
    4,
    "What triangle has all sides different?",
    [
      AnswerModel.wrong("Equilateral"),
      AnswerModel.wrong("Isosceles"),
      AnswerModel.wrong("Trapeze"),
      AnswerModel.correct("Scalene"),
    ],
    true
  ),
];

export default questions;
