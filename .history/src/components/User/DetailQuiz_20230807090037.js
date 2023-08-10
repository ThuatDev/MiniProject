import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataQuiz } from "../../services/apiServices";
import "./DetailQuiz.scss";
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    // Bắt đầu bộ đếm thời gian khi component được hiển thị
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Dừng bộ đếm thời gian khi component unmount
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    // Xử lý khi thời gian hết
    if (timeRemaining <= 0) {
      // Xử lý kết thúc trắc nghiệm ở đây
      console.log("Hết thời gian!");
      // Hoặc thực hiện chuyển câu hỏi tự động sang câu hỏi tiếp theo
      handleNextQuestion();
    }
  }, [timeRemaining]);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    // Xử lý khi người dùng chọn đáp án và nhấn nút "Next"
    checkAnswer();
    setSelectedAnswer(null); // Reset lựa chọn đáp án
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Chuyển sang câu hỏi tiếp theo
    setTimeRemaining(60); // Reset thời gian còn lại cho câu hỏi mới
  };

  const handlePreviousQuestion = () => {
    // Xử lý khi người dùng nhấn nút "Back"
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const checkAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (
      selectedAnswer !== null &&
      selectedAnswer === currentQuestion.correctAnswer
    ) {
      // Xử lý khi đáp án đúng
      console.log("Đáp án đúng!");
    } else {
      // Xử lý khi đáp án sai hoặc chưa chọn đáp án
      console.log("Đáp án sai hoặc chưa chọn đáp án!");
    }
  };
  // giao dien gia
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
