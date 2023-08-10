import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDataQuiz } from "../../services/apiServices";
import _ from "lodash";
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
        .map((value, key) => ({
          questionId: key,
          answers: value.map((item) => ({
            answerId: item.answerId,
            answerContent: item.answerContent,
            isCorrect: item.isCorrect,
          })),
        }))
        .value();
      console.log(`data`, data);
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
