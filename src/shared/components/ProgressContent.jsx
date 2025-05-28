
export default function ProgressContent(){
  return (
    <div> 
      <div className="flex justify-between items-center gap-1 border-2 border-slate-900 py-1 px-[5px] rounded-md">
        <div className="flex items-center gap-1">
          <div className="w-32 h-5 bg-slate-400 rounded-md"></div>
          <div>30%</div>
        </div>
        <div className="text-sm">5 of 20</div>
      </div>
    </div>
  )
}