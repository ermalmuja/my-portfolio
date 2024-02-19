import Button from "../../atoms/button/button";
import "./FirstBox.css";
import TestPhoto from "../../../assets/Photo1.jpg";
import TestPhoto1 from "../../../assets/Button.svg";
import Noun from "../../atoms/Noun/Noun";
import Text from "../../atoms/Text/text";
import Photo1 from "../../../assets/ButtonHover.png";

function FirstBox() {
  return (
    <>
      <div className="FirstBox">
        <div>
          <img className="FirstBoxImg" src={TestPhoto} alt="" />
        </div>
        <div className="FirstBoxText">
          <Noun text="A WEB DESIGNER" />
          <h1>David Henderson.</h1>
          <Text text="I am a Web Designer based in san francisco." />
          <div className="FirstBoxTextImg">
            <img src={Photo1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstBox;
