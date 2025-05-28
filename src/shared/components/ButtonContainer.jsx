
export default function ButtonContainer(){
  return (
    <div className="h-[10%]">
      <div className="flex justify-between items-center h-full">
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