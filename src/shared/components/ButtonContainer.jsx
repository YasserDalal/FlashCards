
export default function ButtonContainer(){
  return (
    <div className="h-[10%]">
      <div className="flex rounded-lg justify-between items-center bg-slate-600 h-full px-3">
        <div className="flex">
          <div className="mr-2">&lt;</div>
          <div>Previous</div>
        </div>
        <div>
          <div className="text-lg">Show Answer</div>
        </div>
        <div className="flex">
          <div>Next</div>
          <div className="ml-2">&gt;</div>
        </div>
      </div>
    </div>
  )
}