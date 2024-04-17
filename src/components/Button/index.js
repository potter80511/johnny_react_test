import "./Button.css"

function Button({
  text,
  color = "#fff",
  backgroundColor,
  onClick,
  width,
}) {
  return (
    <button className="Button" type="button" style={{ color, backgroundColor, width }} onClick={onClick}>
		  {text}
	  </button>
  );
}

export default Button;
