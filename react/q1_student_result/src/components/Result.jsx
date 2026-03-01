function Result({ name, marks, total, percentage, grade }) {
  return (
    <div className="result-card">
      <h2>Result Card</h2>
      <p><b>Name:</b> {name}</p>
      <p><b>Subject 1:</b> {marks[0]}</p>
      <p><b>Subject 2:</b> {marks[1]}</p>
      <p><b>Subject 3:</b> {marks[2]}</p>
      <p><b>Total:</b> {total} / 300</p>
      <p><b>Percentage:</b> {percentage}%</p>
      <p><b>Grade:</b> {grade}</p>
    </div>
  )
}

export default Result
