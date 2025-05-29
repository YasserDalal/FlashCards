
export default function nextButton(setNext, counter, setCounter, questionsAndAnswers, smooth, setSmooth) {
  if(counter === questionsAndAnswers.length - 1) return;
  if(smooth === 0) setSmooth(prev => prev + 360);
  setNext((prev) => prev + 33.35)
  setCounter(prev => prev + 1)
}