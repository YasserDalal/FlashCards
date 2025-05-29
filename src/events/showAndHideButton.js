
export default function showAndHideButton(setSmooth, smooth) {
  if(smooth === 0){
    setSmooth(prev => prev + 360)
    return;
  }
  setSmooth(prev => prev - 360)
}