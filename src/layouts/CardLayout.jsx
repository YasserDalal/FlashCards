
import Header from "../shared/components/Header"
import ProgressContent from "../shared/components/ProgressContent"
import MainContent from "../shared/components/MainContent"
import ButtonContainer from "../shared/components/ButtonContainer"

export default function CardLayout({ questionsAndAnswers, nextButton, setNext, next, previousButton, setCounter, counter, showAnswer, setShowAnswer, smooth, setSmooth, showAndHideButton, colorPrev, setColorPrev, colorNext }) {
  return (
    <div className="flex justify-center items-center h-full px-5">
      <div className="max-w-[650px] min-w-[200px] w-full h-[650px] flex flex-col px-5 py-5 gap-3">
        <Header />
        <ProgressContent />
        <div className="h-full rounded-xl mt-3 border p-2">
          <MainContent questionsAndAnswers={questionsAndAnswers} next={next} smooth={smooth} showAnswer={showAnswer}/>
          <ButtonContainer questionsAndAnswers={questionsAndAnswers} nextButton={nextButton} previousButton={previousButton} setNext={setNext} setCounter={setCounter} counter={counter} setShowAnswer={setShowAnswer} setSmooth={setSmooth} showAndHideButton={showAndHideButton} smooth={smooth} colorPrev={colorPrev} setColorPrev={setColorPrev} colorNext={colorNext}/>
        </div> 
      </div>
    </div>
  )
}