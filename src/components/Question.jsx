import Options from "./Options"

const Question = ({ question, answer, dispatch }) => {
  //console.log(question);
  return (
    <div className="question">
      <h4>{question.question}</h4>
      <Options
        question={question}
        answer={answer}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Question;
