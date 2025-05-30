
export default function previousButton(setNext, counter, setCounter, smooth, setSmooth, questionsAndAnswers, setProgress, itemOrder, setItemOrder) {
  if(counter <= 0) return;
  if(smooth === 0) setSmooth(prev => prev + 360);
  if(itemOrder === 1) return;
  setCounter(prev => prev - 1)
  setNext(prev => prev - (100 / questionsAndAnswers.length))
  setProgress(prev => prev - (100 / questionsAndAnswers.length))
  setItemOrder(prev => prev - 1)
}