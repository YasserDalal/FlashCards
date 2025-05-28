
import Header from "../shared/components/Header"
import ProgressContent from "../shared/components/ProgressContent"
import MainContent from "../shared/components/MainContent"
import ButtonContainer from "../shared/components/ButtonContainer"


export default function MainLayout(){
  return (
    <div className="flex justify-center items-center h-full px-5">
      <div className="max-w-[600px] min-w-[200px] w-full h-[650px] border border-gray-400 bg-slate-300 flex flex-col px-3 py-5 gap-3">
        <Header />
        <ProgressContent />
        <div className="h-full p-2 border border-slate-200 rounded-xl mt-3">
          <MainContent />
          <ButtonContainer />
        </div> 
      </div>
    </div>
  )
}