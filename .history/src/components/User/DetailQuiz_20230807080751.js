import { useParams } from "react-router-dom";

const DetailQuiz = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>DetailQuiz</h1>
    </div>
  );
};
export default DetailQuiz;
