import { useEffect, useState } from "react"
import Header from "./components/header"
import Main from "./components/mainsection"


function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(
    parseInt(JSON.parse(localStorage.getItem('currentHighScore'))) || 0
  )
  function handleHighScore() {
    let currentHighScore = parseInt(JSON.parse(localStorage.getItem('currentHighScore')))
    if (score > currentHighScore) {
      localStorage.setItem('currentHighScore', JSON.stringify(score))
      setHighScore(score)
    }
  }
useEffect(()=>{
  let existingHighScore = parseInt(JSON.parse(localStorage.getItem('currentHighScore')))
  if(!existingHighScore){
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
