import "./Header.css";
import Button from "../../atoms/button/button";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <p className="headerLogo">GridX</p>
        </Link>
        <div className="headerTools">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/works">Works</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/project">Projects</Link>
        </div>
        <Link to="/contacts">
          <Button className="headerButton" text="Let's talk" />
        </Link>
      </div>
    </>
  );
}
export default Header;
