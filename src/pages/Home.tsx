import { styled } from "styled-components"
import { Navigate, useNavigate } from "react-router-dom"

const StyledHome = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  p{
    font-size: 125px;
    font-weight: bolder;
    margin-left: 75px;
  }
  img{
    width: 750px;
  }
  div{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap:30px;
    span{
      color: #6699CC;
      font-size: 200px;
    }
    & > div{
      display: flex;
      flex-direction: row;
      gap: 50px;
      justify-content: center;
      align-items: center;
      button{
        padding: 20px;
        background-color: #002244;
        outline: none;
        font-size: 20px;
        border: 2px solid lightblue;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
`

function Home() {
  const navigate = useNavigate()
  return (
    <StyledHome>
      <div>
        <p>Quiz<span>zy</span></p>
        <div>
          <button onClick={()=>navigate('/browse')}>Browse</button>
          <button onClick={()=>navigate('/create')}>Create</button>
        </div>
      </div>
      <img src="./hero.svg"/>
    </StyledHome>
  )
}

export default Home