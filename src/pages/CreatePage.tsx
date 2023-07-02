import { useRef, useState } from "react"
import { CreateQuizStyle } from "../styles/CreateQuizStyle"
import { createNewQuiz } from "../reducers/createQuizSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function CreatePage() {
    const [quizName,setQuizName] = useState<string>('')
    const [difficulty,setDifficulty] = useState<string>('Easy')
    const [question,setQuestion] = useState<string>('')
    const [option,setOption] = useState<string>('')
    const [options,setOptions] = useState<string[]>([])
    const [questions,setQuestions] = useState([])
    const [answer,setAnswer] = useState<string>('')
    const navigate = useNavigate()

    const dispatch = useDispatch()

    function removeOption(index:number){
        let temp = [...options]
        temp.splice(index,1)
        setOptions(temp)
    }

    function addQuestion(){
        let qn = {
            question:question,
            options:options,
            answer:answer
        }
        if(qn.options.length===0){
            alert('Please choose options')
        }else if(qn.options.includes(answer)===false){
            alert('Answer doesnt match the provided options')
        }
        else{
            setQuestion('')
            setOptions([])
            setAnswer('')
            setOption('')
            console.log(qn)
            let temp = [...questions]
            temp.push(qn)
            setQuestions(temp)
        }
    }

    function handleSubmit(){
        let payload = {quiz_name:quizName,difficulty:difficulty}
        let finalQuestions = []
        for(let i=0;i<questions.length;i++){
            let format ={question:questions[i].question,answer:questions[i].answer}
            let tmpOpts = []
            for(let opt in questions[i].options)tmpOpts.push({option:opt})
            format = {...format,options:tmpOpts}
            finalQuestions.push(format)
        }
        payload = {...payload,questions:finalQuestions}
        console.log(payload)
        dispatch(createNewQuiz(payload)).then(res => navigate('/browse'))
    }

    const ansRef = useRef("")

    return (
        <CreateQuizStyle>
            <p className="title">Create a Quiz</p>
            <div className='name-diff'>
                <input type="text" value={quizName} placeholder="Ex:Java Quiz"
                    onChange = {(e)=>{setQuizName(e.target.value)}}
                />
                <select value={difficulty} onChange={(e)=>{setDifficulty(e.target.value)}}>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div className="question"> 
                <div>
                    <input type="text" value={question} placeholder="Ex:What is 1+1 ?"
                        onChange={(e)=>{setQuestion(e.target.value)}}
                    />
                    <button
                        onClick={()=>{addQuestion()}}
                    >Add</button>
                </div>
                <div>
                    <input type="text" value={option} placeholder="Ex:2"
                        onChange={(e)=>{setOption(e.target.value);}}
                    />
                    <button type="button" className="last-btn"
                        onClick={()=>{setOptions([...options,option]);setOption('')}}
                    >Add</button>
                </div>
            </div>
            <div className="options">
                {
                    options.map((option,index)=>(
                        <p key={index}>
                            {option}
                            <span>
                                <button
                                    onClick={()=>{removeOption(index)}}
                                >Remove</button>
                            </span>
                        </p>
                    ))
                }
            </div>
            {
                options.length>0
                ?
                <div className="option-ans">
                    <select ref={ansRef} onChange={(e)=>{setAnswer(e.target.value)}} value={answer}>
                        {
                            options.map((option,index)=>(
                                <option value={option} key={index}>{option}</option>
                            ))
                        }
                    </select>
                    <button
                        onClick={()=>{setAnswer(ansRef.current.value)}}
                    >Choose</button>
                </div>
                :
                <></>
            }
            {
                questions.length>0
                ?
                <>
            <div className="questions">
                {
                    questions.map((question,index)=>(
                        <div key={index}>
                            <p>Question : {question.question}</p>
                            <p>Answer : {question.answer}</p>
                            <ul>
                                {
                                    question.options.map((option,idx)=>(
                                        <li key={idx}>{option}</li>
                                    ))
                                }
                            </ul>
                            <button
                                onClick={()=>{
                                    let temp = [...questions]
                                    temp.splice(index,1)
                                    setQuestions(temp)
                                }}
                            >Remove</button>
                        </div>
                    ))
                }
            </div>
            <button className="submit" onClick={()=>handleSubmit()}>Submit</button>
            </>
            :
            <></>
            }
        </CreateQuizStyle>
    )
}

export default CreatePage