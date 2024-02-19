import "./TextBox.css";
import Photo1 from "../../../assets/ButtonHover.png";


function TextBox() {
  return (
    <div className="TextBox">
        <div className="Fit">
        <div className="TextBoxText">
      <p>Let's</p> <p>work <span>together.</span></p>
      </div>
      <div>
          <img className="ArticleBoxTextImg" src={Photo1} alt="" />
          </div>
          </div>
    </div>
  );
}

export default TextBox;
