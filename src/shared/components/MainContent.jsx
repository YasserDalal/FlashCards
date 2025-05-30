
export default function MainContent({ questionsAndAnswers, next, smooth, showAnswer }) {
  return (
    <div className="h-[88%] max-w-[592px] min-w-[200px] w-full mb-2 overflow-hidden relative">
      <div className="h-full flex transition-transform duration-300 gap-[2px]" style={{ transform: `translateX(-${next}%)`,
    width: `${questionsAndAnswers.length}00%` }}>
        {questionsAndAnswers.map((item, index) => (
          <div className="w-full flex rounded-lg justify-center items-center bg-slate-600 relative" key={index}>
            <h2>{item.question}</h2>
            <div className="flex items-center transition-transform duration-300 text-center bg-slate-600 absolute z-10 top-0 bottom-0 left-0 right-0" style={{ transform: `translateY(${smooth}%)` }}>
              {showAnswer && <h3 className="w-full">{item.answer}</h3>}
            </div>
          </div>
        ))}    
      </div>
    </div>
  )
}