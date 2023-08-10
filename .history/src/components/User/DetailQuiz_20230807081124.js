import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  useEffect = () => {
    console.log(`quizId`, quizId);
  };
  console.log(`check-params`, params);
  return (
    <div>
      <h1>DetailQuiz</h1>
    </div>
  );
};
export default DetailQuiz;
