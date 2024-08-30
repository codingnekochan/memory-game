import { useEffect, useState } from "react"
import Header from "./components/header"
import Main from "./components/mainsection"

let currentHighScore = parseInt(JSON.parse(localStorage.getItem('currentHighScore')))

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(
    currentHighScore ? currentHighScore : 0
  )
  function handleHighScore() {
    let currentHighScore = parseInt(JSON.parse(localStorage.getItem('currentHighScore')))
    if (score > currentHighScore) {
      localStorage.setItem('currentHighScore', JSON.stringify(score))
      setHighScore(score)
    }
  }
useEffect(()=>{
  if(!currentHighScore){
    localStorage.setItem('currentHighScore', JSON.stringify(score))
  } 
},[])
console.log(highScore)
return (
  <>
    <Header score={score} highScore={highScore} />
    <Main setScore={setScore} handleHighScore={handleHighScore} score={score} />
  </>


)
}

export default App
