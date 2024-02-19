import "./Works.css";
import ArticleBox from "../../components/molecules/ArticleBox/ArticleBox";
import TestPhoto from "../../assets/Photo1.jpg";


function Works() {
  return (
    <div className="gridsWorks gridDivsAbout">
      <div className="aWorks">
        <ArticleBox tag="WEB DESIGNING" title="Dynamic" imgCondition />
      </div>
      <div className="bAbout maintext">
        <p>SELF-SUMMARY</p>
      </div>
      <div className="cWorks">
        <ArticleBox tag="MOBILE DESIGNING" title="Seven Studio" imgCondition />
      </div>
      <div className="dWorks">
        <ArticleBox tag="BRANDING" title="Raven Studio" imgCondition />
      </div>
      <div className="eWorks">
        <ArticleBox tag="PHOTOGRAPHY" title="Diesel H1" imgCondition />
      </div>
      <div className="fWorks">
        <ArticleBox tag="MOBILE DESIGNING" title="Submarine" imgCondition />
      </div>
      <div className="gWorks">
        <ArticleBox tag="WEB DESIGNING" title="Hydra Merc" imgCondition />
      </div>
    </div>
  );
}
export default Works;