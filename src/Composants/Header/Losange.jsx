import { Link } from "react-router-dom";
import "../../Assets/styles/Header/Losange.css";
import logo from "../../Assets/images/logo-header.png";

export default function Losange ({ losangeClass }) {

  return (
     
    <Link to="/" className="logo">
      <div className={`losange ${losangeClass}`}> 
        <img src={logo} alt="Logo" className="logoImg" />
      </div>
    </Link>
  );
}