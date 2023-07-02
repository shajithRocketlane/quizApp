import { useNavigate } from "react-router-dom"
import { QuizInfoProps } from "../reducers/searchSlice"
import { useDispatch } from "react-redux"
import { getQuiz } from "../reducers/quizSlice"

function QuizCard({quiz_id,quiz_name,difficulty}:QuizInfoProps) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  return (
    <div className="quiz-card" >
        <div><p className="q-name"
        onClick={()=>{
          console.log(quiz_id)
          navigate('/quiz/?quiz_id='+quiz_id)
        }}
        >{quiz_name}</p>
        <button
          onClick={()=>{
            navigate('/edit/?quiz_id='+quiz_id)
          }}><img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/pencil--v1.png" alt="pencil--v1"/></button>
        </div>
        <p 
        onClick={()=>{
        dispatch(getQuiz(quiz_id))
        navigate('/')
        }}
        className="diff">{difficulty}</p>
    </div>
  )
}

export default QuizCard