import EditableQuestion from "./components/EditableQuestion"
import Navbar from "./components/Navbar"
import BrowsePage from "./pages/BrowsePage"
import CreatePage from "./pages/CreatePage"
import EditQuizPage from "./pages/EditQuizPage"
import QuizPage from "./pages/QuizPage"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/quiz" element={<QuizPage/>}/>
          <Route path="/browse" element={<BrowsePage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
          <Route path="/edit" element={<EditQuizPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
