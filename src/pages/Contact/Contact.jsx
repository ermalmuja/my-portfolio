import "./Contact.css";
import React from "react";
import MessageIcon from "../../assets/MessageIcon.png";
import Iconpng from "../../assets/Iconpng.png";
import Iconpng2 from "../../assets/Iconpng2.svg";
import Iconpng3 from "../../assets/Iconpng3.svg";
import Button from "../../components/atoms/button/button";
import PhoneIcon from "../../assets/PhoneeIcon.svg";
import LocationIcon from "../../assets/LocationIcon.svg";

function Contact() {
  return (
    <div className="socialBoxes">
      <div>
        <p className="experience">CONTACT INFO</p>
        <div className="contactBox">
          <div className="contactBoxImg">
            <img src={MessageIcon} alt="MessageIcon" />
          </div>
          <div className="ContactBoxText">
            <p className="expCompany">MAIL US</p>
            <p className="experience emailPossition">info@bluebase.com</p>
            <p className="experience emailPossition">info@bluebase2.com</p>
          </div>
        </div>
        <div className="contactBox">
          <div className="contactBoxImg">
            <img src={PhoneIcon} alt="PhoneIcon" />
          </div>
          <div className="ContactBoxText">
            <p className="expCompany">CONTACT US</p>
            <p className="experience emailPossition">+1 504-899-8221</p>
            <p className="experience emailPossition">+1 504-749-5456</p>
          </div>
        </div>
        <div className="contactBox">
          <div className="contactBoxImg">
            <img src={LocationIcon} alt="MessageIcon" />
          </div>
          <div className="ContactBoxText">
            <p className="expCompany">LOCATION</p>
            <p className="experience emailPossition">22 Baker Street, Texas</p>
            <p className="experience emailPossition">United States</p>
            <p className="experience emailPossition">W1U 3BW</p>
          </div>
        </div>
        <div>
          <p className="experience socialInfo">SOCIAL INFO</p>
          <div className="socialImgs">
            <div className="imgCyrcle">
              <img src={Iconpng} alt="Iconpng" />
            </div>
            <div className="imgCyrcle">
              <img src={Iconpng2} alt="Iconong2" />
            </div>
            <div className="imgCyrcle">
              <img src={Iconpng3} alt="Iconong3" />
            </div>
          </div>
        </div>
      </div>

      <div className="socialMainBox ArticleBox">
        <p className="TextBoxText boxQuoteTitle">
          Let's work <span>together.</span>
        </p>
        <form>
          <input type="text" placeholder="Name *" />
          <input type="text" placeholder="Email *" />
          <input type="text" placeholder="Your Subject *" />
          <input type="text" placeholder="Your Message *" />
          <button className="socialButton">Send message</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
