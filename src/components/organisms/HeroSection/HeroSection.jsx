import "./HeroSection.css";
import FirstBox from "../../molecules/FirstBox/FirstBox";
import LineBox from "../../molecules/LineBox/LineBox";
import ArticleBox from "../../molecules/ArticleBox/ArticleBox";
import TestPhoto from "../../../assets/Photo1.jpg";
import TestPhoto1 from "../../../assets/Button.svg";
import Icon1 from "../../../assets/Icon1.svg";
import Icon2 from "../../../assets/Icon2.svg";
import Icon3 from "../../../assets/Icon3.svg";
import Icon4 from "../../../assets/Icon4.svg";
import Photo3 from "../../../assets/InnerRectangle.svg";
import Statistics from "../../atoms/Statistics/Statistics";
import TextBox from "../../molecules/TextBox/TextBox";

function HeroSection() {
  return (
    <div className="grids gridDivs">
      <div className="a">
        <FirstBox />
      </div>
      <div className="b">
        <LineBox />
      </div>
      <div className="c">
        <ArticleBox
          imgCondition
          imgSrc={TestPhoto}
          tag="MORE ABOUT ME"
          title="Credentials"
        />
      </div>
      <div className="d">
        <ArticleBox
          tag="SHOWCASE"
          imgCondition
          imgSrc={TestPhoto}
          title="Projects"
        />
      </div>
      <div className="e">
        <ArticleBox tag="BLOG" imgCondition imgSrc={TestPhoto} title="GFonts" />
      </div>
      <div className="f">
        <ArticleBox
          tag="SPECIALIZATION"
          title="Services Offering"
          Icons={
            <div className="ArticleIcons">
              <img src={Icon1} alt="" />
              <img src={Icon2} alt="" />
              <img src={Icon3} alt="" />
              <img src={Icon4} alt="" />
            </div>
          }
        />
      </div>
      <div className="g">
        <ArticleBox tag="BLOG" 
        title="GFonts" imgCondition imgSrc={TestPhoto} />
      </div>
      <div className="h StatisticsBox">
        < Statistics index="07" title="YEARS EXPERIENCE" />
        < Statistics index="+125" title="CLIENTS WORLDWIDE" />
        < Statistics index="+210" title="TOTALPROJECTS" />
      </div>
      <div className="i">
        <TextBox />
      </div>
    </div>
  );
}
export default HeroSection;
