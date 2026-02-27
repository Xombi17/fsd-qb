// FormInput component - reusable input with error display
function FormInput({ type, placeholder, value, onChange, error }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* Conditional rendering of error message */}
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default FormInput
