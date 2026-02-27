// StepControl component - controlled input for step value
function StepControl({ step, onStepChange }) {
  return (
    <div className="step-control">
      <label>Step Value: </label>
      <input
        type="number"
        value={step}
        min="1"
        onChange={(e) => onStepChange(Number(e.target.value))}
      />
    </div>
  )
}

export default StepControl
