
export default function ButtonContainer({ questionsAndAnswers, nextButton, previousButton,  setNext, setCounter, counter, showAndHideButton, setSmooth, smooth, colorPrev, colorNext, setProgress, itemOrder, setItemOrder }) {
  return (
    <div className="h-[10%]">
      <div className="flex rounded-lg justify-between items-center bg-slate-600 h-full px-3 max-[400px]:px-0">
        <div className={`flex ${colorPrev ? "text-slate-400 cursor-default" : "hover:text-gray-300 cursor-pointer"} items-center select-none p-2`} type="button" onClick={() => previousButton(setNext, counter, setCounter, smooth, setSmooth, questionsAndAnswers, setProgress, itemOrder, setItemOrder)}>
          <div className="mr-2">&lt;</div>
          <div className="text-[clamp(0.8rem,3vw,1rem)]">Previous</div>
        </div>
        <div className="cursor-pointer select-none hover:text-gray-300 p-2" type="button" onClick={() => showAndHideButton(setSmooth, smooth)}>
          <div className="text-[clamp(1rem,5vw,1.3rem)] text-nowrap">{smooth === 360 ? "Show Answer" : "Hide Answer"}</div>
        </div>
        <div className={`flex ${colorNext ? "text-slate-400 cursor-default" : "hover:text-gray-300 cursor-pointer"} select-none items-center p-2`} type="button" onClick={() => nextButton(setNext, counter, setCounter, questionsAndAnswers, smooth, setSmooth, setProgress, itemOrder, setItemOrder)}>
          <div className="text-[clamp(0.8rem,3vw,1rem)]">Next</div>
          <div className="ml-2">&gt;</div>
        </div>
      </div>
    </div>
  )
}