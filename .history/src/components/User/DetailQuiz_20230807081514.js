import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDataQuiz } from "../../services/apiServices";
const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  useEffect(() => {
    console.log(`quizId`, quizId);
    fetchQuestion();
  }, [quizId]);
  const fetchQuestion = async () => {
    const res = await getDataQuiz(quizId);
    console.log(`res`, res);
  };

  console.log(`check-params`, params);
  return (
    <div>
      <h1>DetailQuiz</h1>
    </div>
  );
};
export default DetailQuiz;
