
import { useState, useEffect} from "react"

import CardLayout from "./layouts/CardLayout"
import { questionsAndAnswers } from "./data/questionsAndAnswers"

import nextButton from "./events/nextButton"
import previousButton from "./events/previousButton"
import showAndHideButton from "./events/showAndHideButton"

export default function App() {
  const [next, setNext] = useState(0)
  const [counter, setCounter] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [smooth, setSmooth] = useState(360)
  const [colorPrev, setColorPrev] = useState(false)
  const [colorNext, setColorNext] = useState(false)
  const [progress, setProgress] = useState(20)
  const [itemOrder, setItemOrder] = useState(1)
  // for transitioning hide and show for answers
  useEffect(() => {
    if (smooth === 0) {
      setShowAnswer(true)
    } else {
      const timeout = setTimeout(() => setShowAnswer(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [smooth]);
  // for change the color of the buttons of 'previous' and 'next'
  useEffect(() => {
    if (counter === 0) {
      setColorPrev(true)
      setColorNext(false)
    } 
    if(counter === questionsAndAnswers.length - 1) {
      setColorNext(true)
      setColorPrev(false)
    }
    if (counter > 0 && counter < questionsAndAnswers.length - 1) {
      setColorNext(false)
      setColorPrev(false)
    }
  }, [counter]);
  return (
    <div className="h-screen max-w-full min-w-[320px] bg-slate-800 text-white">
      <CardLayout questionsAndAnswers={questionsAndAnswers} 
                  nextButton={nextButton} setNext={setNext} next={next}
                  previousButton={previousButton} setCounter={setCounter} counter={counter}
                  showAnswer={showAnswer} setShowAnswer={setShowAnswer} smooth={smooth} setSmooth={setSmooth}
                  showAndHideButton={showAndHideButton} colorPrev={colorPrev} setColorPrev={setColorPrev} colorNext={colorNext}
                  progress={progress} setProgress={setProgress} itemOrder={itemOrder} setItemOrder={setItemOrder}/>
    </div>
  )
}