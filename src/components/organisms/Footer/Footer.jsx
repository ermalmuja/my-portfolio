import "./Footer.css";
import Noun from "../../atoms/Noun/Noun";

function Footer() {
  return (
    <div className="Footer">
      <div>
        <p className="headerLogo">GridX</p>
      </div>
      <div className="headerTools">
        <a className="headerTool" href="">
          <Noun text="HOME" />
        </a>
        <a className="headerTool" href="">
          <Noun text="ABOUT" />
        </a>
        <a className="headerTool" href="">
          <Noun text="WORKS" />
        </a>
        <a className="headerTool" href="">
          <Noun text="CONTACTS" />
        </a>
      </div>
      <div className="rights">
        <p>
          © All rights reserved by <span>WordPress River</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
