
export default function nextButton(setNext, counter, setCounter, questionsAndAnswers, smooth, setSmooth, setProgress, itemOrder, setItemOrder) {
  if(counter === questionsAndAnswers.length - 1) return;
  if(smooth === 0) setSmooth(prev => prev + 360);
  if(itemOrder === questionsAndAnswers.length) return;
  setProgress(prev => prev + (100 / questionsAndAnswers.length))
  setNext((prev) => prev + (100 / questionsAndAnswers.length))
  setCounter(prev => prev + 1)
  setItemOrder(prev => prev + 1)
}