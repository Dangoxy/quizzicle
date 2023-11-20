import React from 'react'
import Question from "./Question"





export default function App() {


  const [data, setData] = React.useState()
  const [questions, setQuestions] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [onHomePage, setOnHomePage] = React.useState(true)


  const [childData, setChildData] = React.useState(()=>()=>{console.log("hola")})

  console.log("state refreshed")

  function restart(){
    const fetchData = async () =>  {
    const asd = await fetch("https://the-trivia-api.com/v2/questions")
    asd.json().then((data) => setData(data))}
    fetchData()

    setCurScore(prev => 0)
    setOnHomePage(prev => !prev)
    setTimeout(
      () => setOnHomePage(prev => !prev), 
      500
    )


  }

  React.useEffect(()=>{
    restart()

  } , [0])

  React.useEffect(()=>{
    maker()

  }, [data])
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  function maker(){
    let tt = []
    if(data){
    for (let i=0; i< 5; i++){
      let cur = data[i]
      let tempans = cur.incorrectAnswers
      tempans.push(cur.correctAnswer)
      let qObj = {
        category: cur.category,
        question: cur.question,
        answers: shuffle(tempans),
        correctAnswer: cur.correctAnswer,
        difficulty: cur.difficulty,
        key: cur.id
      }

      tt.push(qObj)
    }
    setQuestions(tt)
    setLoading(false)
  }}

  
  
  
  let mappedQuestionsElements = questions.map((ques, index) => {
    return <Question question={ques.question.text} answers = {ques.answers} correctAnswer= {ques.correctAnswer} id = {ques.key} scoreAdder ={addScore} passChildData={setChildData}/>
  })

  function starter(){
    setOnHomePage(false)
    console.log(questions)
  }

  const [curScore, setCurScore] = React.useState(0)
  function addScore(){
    setCurScore(prev=> prev + 1)
  }


  

  if (onHomePage){
    return (
      <div className="homepage">
        <h1>Welcome to Quizzicle!</h1>
        <p>A quiz web app made using Reactjs and The Trivia API.</p>
        <button onClick={starter}>Start a quiz?</button>
      </div>
    )
  } else if (!onHomePage){

    return (
    <div className="main--container">
      {mappedQuestionsElements}
      <div className="pas--container">
        <h1>Score: {curScore}/5</h1>
        <button onClick={restart}>Play again</button>
      </div>
      
    </div>
  )
  }


  
}


