import Logo from "../../assets/Logo.png";
import "./styles.css";

export const Header = () => (
  <div className="header-container">
    <img src={Logo} width="15%" className="logo" alt="company-logo" />
  </div>
);
