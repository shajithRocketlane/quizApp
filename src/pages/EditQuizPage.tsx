import {
  addNewQuestion,
  addOption,
  deleteOption,
  deleteQuestion,
  deleteQuiz,
  getEditQuiz,
  selectQuestions,
  updateQuestion,
} from "../reducers/editQuizSlice";
import { EditStyle } from "../styles/EditStyle";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { CreateQuizStyle } from "../styles/CreateQuizStyle";

function EditQuizPage() {
  const [component, setComponent] = useState<"edit" | "add">("edit");
  const [current, setCurrent] = useState();

  function delQuestion(index: number) {
    dispatch(deleteQuestion(quiz.questions[index].question_id))
      .then((res) => window.location.reload(false))
      .catch((err) => alert("There was an error"));
  }

  function delQuiz() {
    dispatch(deleteQuiz(qid)).then(res => navigate('/browse')).catch(err => alert('There was an error'));
  }

  function Edit({ current }) {
    // const [quizName,setQuizName] = useState<string>('')
    // const [difficulty,setDifficulty] = useState<string>('None')
    const [question, setQuestion] = useState<string>(
      current !== undefined ? current.question : ""
    );
    const [option, setOption] = useState<string>("");
    const [options, setOptions] = useState(
      current !== undefined ? current.options.map((option) => option) : []
    );
    const [answer, setAnswer] = useState<string>(
      current !== undefined ? current.answer : ""
    );

    function updateOption(index: number, value: string) {
      let temp = [...options];
      temp[index] = { ...temp[index], option: value };
      setOptions(temp);
    }

    function removeOption(index: number) {
      let temp = [...options];
      temp.splice(index, 1);
      dispatch(deleteOption(options[index].option_id));
      setOptions(temp);
    }

    function questionUpdate() {
      let payload = {
        question_id: current.question_id,
        question: question,
        answer: answer,
        options: options,
      };
      console.log(payload);
      dispatch(updateQuestion(payload)).then((res) => {
        alert("Question Updated");
        window.location.reload(false);
      });
    }

    function createOption(value) {
      let payload = { question_id: current.question_id, option: value };
      console.log(payload);
      // setOptions([...options, {option_id:1,option:option}]);
      dispatch(addOption(payload)).then((response) => {
        setOptions([...options, { option_id: response.data, option: option }]);
      });
      setOption("");
    }

    const ansRef = useRef("");

    return (
      <CreateQuizStyle>
        <p className="title">Edit</p>
        {/* <div className='name-diff'>
                    <input type="text" value={quizName} placeholder="Ex:Java Quiz"
                        onChange = {(e)=>{setQuizName(e.target.value)}}
                    />
                    <select value={difficulty} onChange={(e)=>{setDifficulty(e.target.value)}}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div> */}
        <div className="question-edit">
          <div>
            <input
              type="text"
              value={question}
              placeholder="Ex:What is 1+1 ?"
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />
            <button
              onClick={() => {
                questionUpdate();
              }}
            >
              Update
            </button>
          </div>
          <div>
            <input
              type="text"
              value={option}
              placeholder="Ex:2"
              onChange={(e) => {
                setOption(e.target.value);
              }}
            />
            <button
              type="button"
              className="last-btn"
              onClick={() => {
                createOption(option);
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="options-edit">
          {options.map((option, index) => (
            <div key={index}>
              <input
                value={option.option}
                type="text"
                onChange={(e) => {
                  updateOption(index, e.target.value);
                }}
              />
              <span>
                <button
                  onClick={() => {
                    removeOption(index);
                  }}
                >
                  Remove
                </button>
              </span>
            </div>
          ))}
        </div>
        {options.length > 0 ? (
          <div className="option-ans">
            <select
              ref={ansRef}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              value={answer}
            >
              {options.map((option, index) => (
                <option value={option.option} key={index}>
                  {option.option}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                setAnswer(ansRef.current.value);
              }}
            >
              Choose
            </button>
          </div>
        ) : (
          <></>
        )}
      </CreateQuizStyle>
    );
  }

  function Add({ quiz_id }) {
    const [question, setQuestion] = useState<string>("");
    const [option, setOption] = useState<string>("");
    const [options, setOptions] = useState<string[]>([]);
    const [answer, setAnswer] = useState<string>("");

    function removeOption(index: number) {
      let temp = [...options];
      temp.splice(index, 1);
      setOptions(temp);
    }

    function addQuestion() {
      let qn = {
        quiz_id: quiz_id,
        question: question,
        answer: answer,
      };
      let tmp = [];
      for (let i = 0; i < options.length; i++) tmp.push({ option: options[i] });
      qn = { ...qn, options: tmp };
      if (qn.options.length === 0) {
        alert("Please choose options");
      } else if (options.includes(answer) === false) {
        alert("Answer doesnt match the provided options");
      } else {
        setQuestion("");
        setOptions([]);
        setAnswer("");
        setOption("");
        console.log(qn);
        dispatch(addNewQuestion(qn)).then((response) =>
          window.location.reload(false)
        );
      }
    }

    const ansRef = useRef("");

    return (
      <CreateQuizStyle>
        <p className="title">Add Question</p>
        <div className="question-edit">
          <div>
            <input
              type="text"
              value={question}
              placeholder="Ex:What is 1+1 ?"
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />
            <button
              onClick={() => {
                addQuestion();
              }}
            >
              Add
            </button>
          </div>
          <div>
            <input
              type="text"
              value={option}
              placeholder="Ex:2"
              onChange={(e) => {
                setOption(e.target.value);
              }}
            />
            <button
              type="button"
              className="last-btn"
              onClick={() => {
                setOptions([...options, option]);
                setOption("");
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="options">
          {options.map((option, index) => (
            <p key={index}>
              {option}
              <span>
                <button
                  onClick={() => {
                    removeOption(index);
                  }}
                >
                  Remove
                </button>
              </span>
            </p>
          ))}
        </div>
        {options.length > 0 ? (
          <div className="option-ans">
            <select
              ref={ansRef}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              value={answer}
            >
              {options.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                setAnswer(ansRef.current.value);
              }}
            >
              Choose
            </button>
          </div>
        ) : (
          <></>
        )}
      </CreateQuizStyle>
    );
  }

  let dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [quiz, setQuiz] = useState({});
  const [qid, setQid] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let quiz_id = searchParams.get("quiz_id");
    dispatch(getEditQuiz(quiz_id)).then((data) => setQuiz(data.payload));
    setQid(quiz_id);
  }, []);

  return (
    <EditStyle>
      {quiz ? (
        <>
          <div className="main">
            <div className="io">
              <p>{quiz.quiz_name}</p>
              <div>
                <button onClick={() => delQuiz()}>Delete</button>
                <button
                  onClick={() =>
                    setComponent(component === "edit" ? "add" : "edit")
                  }
                >
                  {component === "edit" ? "Edit" : "Add"}
                </button>
              </div>
            </div>
            <div className="questions">
              {quiz.questions?.map((question, index) => (
                <div key={index}>
                  <ul>
                    {
                      <div>
                        <p
                          onClick={() => {
                            setCurrent(question);
                            console.log(question);
                          }}
                        >
                          Question : {question.question}
                        </p>
                        <p
                          onClick={() => {
                            setCurrent(question);
                            console.log(question);
                          }}
                        >
                          Answer : {question.answer}
                        </p>
                        <ul>
                          {question.options.map((option, idx) => (
                            <li key={idx}>{option.option}</li>
                          ))}
                        </ul>
                        <button onClick={() => delQuestion(index)}>
                          Remove
                        </button>
                      </div>
                    }
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {component !== "edit" ? (
            <Edit current={current} />
          ) : (
            <Add quiz_id={qid} />
          )}
        </>
      ) : (
        <>Loading....</>
      )}
    </EditStyle>
  );
}

export default EditQuizPage;
