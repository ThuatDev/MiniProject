import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDataQuiz } from "../../services/apiServices";
import _ from "lodash";
const questions = [
  {
    question: "Câu hỏi 1?",
    answers: ["Đáp án 1A", "Đáp án 1B", "Đáp án 1C", "Đáp án 1D"],
    correctAnswer: 1,
  },
  {
    question: "Câu hỏi 2?",
    answers: ["Đáp án 2A", "Đáp án 2B", "Đáp án 2C", "Đáp án 2D"],
    correctAnswer: 2,
  },
  // Thêm các câu hỏi và đáp án tiếp theo vào đây
];
const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  useEffect(() => {
    console.log(`quizId`, quizId);
    fetchQuestion();
  }, [quizId]);
  const fetchQuestion = async () => {
    const res = await getDataQuiz(quizId);
    console.log(`check quizz`, res);
    if (res && res.EC == 0) {
      let raw = res.DT;
      //  dùng check của thư viện loadsh
      let data = _.chain(raw)
        .groupBy("id")
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index == 0) {
              questionDescription = item.questionDescription;
              image = item.image;
            }
            answers.push(item.answers || []);
            console.log(`element`, item.answers);
          });
          console.log(`value`, value, `key`, key); // value là 1 mảng các object, key là id của câu hỏi

          return { questionId: key, answers, questionDescription, image };
        })
        .value();
      // console.log(`data`, data);
    }
  };

  console.log(`check-params`, params);
  return (
    <div>
      <h1>DetailQuiz</h1>
    </div>
  );
};
export default DetailQuiz;
