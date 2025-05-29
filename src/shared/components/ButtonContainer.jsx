
export default function ButtonContainer({ questionsAndAnswers, nextButton, previousButton,  setNext, setCounter, counter, showAndHideButton, setSmooth, smooth, colorPrev, colorNext }) {
  return (
    <div className="h-[10%]">
      <div className="flex rounded-lg justify-between items-center bg-slate-600 h-full px-3">
        <div className={`flex ${colorPrev && "text-slate-400"} cursor-pointer`} onClick={() => previousButton(setNext, counter, setCounter, smooth, setSmooth)}>
          <div className="mr-2">&lt;</div>
          <div>Previous</div>
        </div>
        <div className="cursor-pointer" onClick={() => showAndHideButton(setSmooth, smooth)}>
          <div className="text-lg">{smooth === 360 ? "Show Answer" : "Hide Answer"}</div>
        </div>
        <div className={`flex ${colorNext && "text-slate-400"} cursor-pointer`} onClick={() => nextButton(setNext, counter, setCounter, questionsAndAnswers, smooth, setSmooth)}>
          <div>Next</div>
          <div className="ml-2">&gt;</div>
        </div>
      </div>
    </div>
  )
}