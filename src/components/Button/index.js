import "./Button.css"

function Button({
  text,
  color = "#fff",
  backgroundColor,
  onClick,
}) {
  return (
    <button className="Button" type="button" style={{ color, backgroundColor }} onClick={onClick}>
		  {text}
	  </button>
  );
}

export default Button;
