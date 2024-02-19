import "./ArticleBox.css";
import TestPhoto from "../../../assets/Photo1.jpg";
import TestPhoto1 from "../../../assets/Button.svg";
import Noun from "../../atoms/Noun/Noun";
import Photo1 from "../../../assets/ButtonHover.png";
import ArticleTitle from "../../atoms/AtricleTitle/ArticleTitle";
import ArticleBoxImg from "../../atoms/ArticleBoxImg/ArticleBoxImg";

function ArticleBox(props) {
  return (
    <div className={`ArticleBox ${props.className}`}>
      {props.imgCondition && (
        <img className="ArticleBoxImg" src={props.imgSrc} />
      )}
      <div>{props.Icons}</div>
      <div className="ArticleBoxText">
        <div className="ArticleBoxTextText">
          <Noun text={props.tag} />
          <ArticleTitle text={props.title} />
        </div>
        <div className="ArticleBoxTextImg">
          <img src={Photo1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ArticleBox;
