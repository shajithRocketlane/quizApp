import { Link, useNavigate } from "react-router-dom"
import { StyledNav } from "../styles/StyledNav"


function Navbar() {
  const navigate = useNavigate()
  return (
    <StyledNav>
        <p onClick={()=>navigate('/')}><span>Quiz</span>zy</p>
        <div>
          <Link to="/browse"><button type="button">Browse</button></Link>
          <Link to="/create"><button type="button">Create</button></Link>
        </div>
    </StyledNav>
  )
}

export default Navbar
