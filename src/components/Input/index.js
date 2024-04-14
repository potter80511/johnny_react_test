function Input({
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="Input">
      <label>{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export default Input;
