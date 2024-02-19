import "./Statistics.css";
import ArticleTitle from "../../atoms/AtricleTitle/ArticleTitle";
import Noun from "../Noun/Noun";

function Statistics(props) {
  return <div className="StatisticBox">
    <div className="StatisticBoxText">
    <p className="StatisticsNr">{props.index}</p>
  <Noun text="YEARS EXPERIENCE"/>
  </div>
  </div>
  
  ;
}

export default Statistics;