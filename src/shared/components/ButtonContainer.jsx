
export default function ButtonContainer({ questionsAndAnswers, nextButton, previousButton,  setNext, setCounter, counter, showAndHideButton, setSmooth, smooth, colorPrev, colorNext, setProgress, itemOrder, setItemOrder }) {
  return (
    <div className="h-[10%]">
      <div className="flex rounded-lg justify-between items-center bg-slate-600 h-full px-3">
        <div className={`flex ${colorPrev && "text-slate-400"} cursor-pointer select-none`} type="button" onClick={() => previousButton(setNext, counter, setCounter, smooth, setSmooth, questionsAndAnswers, setProgress, itemOrder, setItemOrder)}>
          <div className="mr-2">&lt;</div>
          <div>Previous</div>
        </div>
        <div className="cursor-pointer select-none" type="button" onClick={() => showAndHideButton(setSmooth, smooth)}>
          <div className="text-lg">{smooth === 360 ? "Show Answer" : "Hide Answer"}</div>
        </div>
        <div className={`flex ${colorNext && "text-slate-400"} cursor-pointer select-none`} type="button" onClick={() => nextButton(setNext, counter, setCounter, questionsAndAnswers, smooth, setSmooth, setProgress, itemOrder, setItemOrder)}>
          <div>Next</div>
          <div className="ml-2">&gt;</div>
        </div>
      </div>
    </div>
  )
}