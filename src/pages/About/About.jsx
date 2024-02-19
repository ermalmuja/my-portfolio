import React from "react";
import ArticleBoxImg from "../../components/atoms/ArticleBoxImg/ArticleBoxImg";
import "./About.css";
import Text from "../../components/atoms/Text/text";
import ArticleBox from "../../components/molecules/ArticleBox/ArticleBox";
import TestPhoto from "../../assets/Photo1.jpg";
import TextBox from "../../components/molecules/TextBox/TextBox";

const About = () => {
  return (
    <div className="gridsAbout gridDivsAbout">
      <div className="ArticleBox aAbout">
        <div className="PhotoDiv">

        </div>
  </div>
      <div className="bAbout maintext">
        <p>SELF-SUMMARY</p>
      </div>
      <div className="ArticleBox cAbout FirstBoxText">
        <h1>David Henderson</h1>
        <Text text="I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries..." />
      </div>
      <div className="ArticleBox dAbout">
<p className="experience">EXPERIENCE</p>
<div className="expInfo">
<p className="expYear">2007 - 2017</p>
<p className="expJob">Framer Designer & Developer</p>
<p className="expCompany">Bluebase Designs</p>
</div>
<div className="expInfo">
<p className="expYear">2017 - 2023</p>
<p className="expJob">Front-End Developer</p>
<p className="expCompany">Larsen & Toubro</p>
</div>
      </div>
      <div className="ArticleBox eAbout">
<p className="experience">EDUCATION</p>
<div className="expInfo">
<p className="expYear">2004 - 2007</p>
<p className="expJob">Bachelor Degree in Psychology</p>
<p className="expCompany">University of California</p>
</div>
<div className="expInfo">
<p className="expYear">2007 - 2009</p>
<p className="expJob">Master Degree in Designing </p>
<p className="expCompany">University of Texas</p>
</div>
      </div>
      <div className="fAbout ">
        <ArticleBox tag="STAY WITH ME" title="Profiles" imgCondition imgSrc={TestPhoto} />
      </div>
      <div className="iAbout">
    <TextBox />
  </div>
  <div className="jAbout">
        <ArticleBox tag="MORE ABOUT ME" title="Credentials" imgCondition imgSrc={TestPhoto} />
      </div>
  
     


    </div>
  );
};

export default About;
