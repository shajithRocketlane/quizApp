import { useDispatch, useSelector } from "react-redux";
import {
  OptionProps,
  QuestionProps,
  getQuiz,
  selectQuestions,
  selectScore,
  submitQuiz,
} from "../reducers/quizSlice";
import { useEffect, useState } from "react";
import { StyledQuestion } from "../styles/StyledQuestion";
import { QuizPageStyle } from "../styles/QuizPageStyle";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";

function QuizPage() {
//   const quiz = useSelector(selectQuestions);
    const [quiz,setQuiz] = useState()
  const score = useSelector(selectScore);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [payload, setPayload] = useState<
    { question_id: number; option_id: number }[]
  >([]);
  const [submitted, setSubmitted] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    let quiz_id = searchParams.get("quiz_id");
    dispatch(getQuiz(quiz_id)).then(res => setQuiz(res.payload));
  }, []);

  function handleQuizAnswers(option_id: number, question_id: number) {
    let temp = payload;
    let keyExists = false;
    for (let i = 0; i < payload.length; i++) {
      if (temp[i].question_id === question_id) {
        keyExists = true;
        temp[i].question_id = option_id;
      }
    }
    if (!keyExists)
      setPayload([
        ...payload,
        { question_id: question_id, option_id: option_id },
      ]);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <QuizPageStyle>
        {
            quiz
            ?
            <>
            <div className="top">
              <p className="quiz-name">{quiz.quiz_name}</p>
              <button
                onClick={() => {
                  if (submitted === false) {
                    dispatch(submitQuiz(payload)).then((res) => setSubmitted(true));
                  } else {
                    window.location.reload(false);
                  }
                }}
              >
                {!submitted ? "Submit" : "Retry"}
              </button>
            </div>
            <div>
              {JSON.stringify(quiz) !== "{}" ? (
                quiz.questions.map((question: QuestionProps, index: number) => (
                  <StyledQuestion key={index}>
                    <p>{question.question}</p>
                    <div>
                      {question.options.map((option: OptionProps, idx: number) => (
                        <div key={idx}>
                          <input
                            disabled={submitted === true ? true : false}
                            onChange={() => {
                              handleQuizAnswers(
                                option.option_id,
                                question.question_id
                              );
                            }}
                            type="radio"
                            value={option.option}
                            name={question.question}
                          />
                          <span>{option.option}</span>
                        </div>
                      ))}
                    </div>
                  </StyledQuestion>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="bottom">
              <p>Score : {score}</p>
            </div>
            </>
            :
            <Loading/>
        }
      </QuizPageStyle>
    </div>
  );
}

export default QuizPage;
