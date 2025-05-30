
export default function ProgressContent({ progress, questionsAndAnswers, itemOrder }) {
  return (
    <div> 
      <div className="flex justify-between items-center gap-1 border-2 border-slate-500 py-1 px-[5px] rounded-md relative">
        <div className="flex items-center gap-1 w-full">
          <div className='h-5 bg-slate-400 rounded-md relative' style={{ width: `${progress}%` }}>
            <div className="absolute -right-12 -top-1">
              <div>{Math.floor(progress) >= 100 ? 100 : Math.floor(progress)}%</div>
            </div>
          </div>
        </div>
        <div className="text-sm absolute -top-6 right-1">{itemOrder} of {questionsAndAnswers.length}</div>
      </div>
    </div>
  )
}