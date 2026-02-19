const Progress = ({ index, numQuestions, points, maxPossiblePoints, answer }) => {
  return (
    <>
      <progress max={numQuestions} value={index + Number(answer !== null)}/>
      <header className="progress">
        <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
        <p>{points} / {maxPossiblePoints}</p>
      </header>
    </>
  )
}

export default Progress;
