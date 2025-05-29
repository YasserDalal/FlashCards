
export default function previousButton(setNext, counter, setCounter, smooth, setSmooth) {
  if(counter <= 0) return;
  if(smooth === 0) setSmooth(prev => prev + 360);
  setCounter(prev => prev - 1)
  setNext(prev => prev - 33.35)
}