import Options from "./Options"

const Question = ({ question }) => {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>

      {/*
        <div className="options">
          {question.options.map( option => (
            <button className="btn btn-option" key={option}>
              {option}
            </button>
          ))}
        </div>
      */}
      <Options question={question} />
    </div>
  )
}

export default Question;
