import "./Input.css"

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="Input">
      {label && <label>{label}</label>}
      <input type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export default Input;
