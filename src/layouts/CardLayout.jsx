
import Header from "../shared/components/Header"
import ProgressContent from "../shared/components/ProgressContent"
import MainContent from "../shared/components/MainContent"
import ButtonContainer from "../shared/components/ButtonContainer"


export default function MainLayout(){
  return (
    <div className="flex justify-center items-center h-full px-5">
      <div className="max-w-[650px] min-w-[200px] w-full h-[650px] flex flex-col px-5 py-5 gap-3">
        <Header />
        <ProgressContent />
        <div className="h-full rounded-xl mt-3 border p-2">
          <MainContent />
          <ButtonContainer />
        </div> 
      </div>
    </div>
  )
}