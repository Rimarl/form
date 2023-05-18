import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
import mobilislogo from './img/mobilislogo.png';
import { useSelector, useDispatch } from "react-redux";
import {setLogout} from "../../src/state/authSlice";
import {useNavigate} from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pdvv = useSelector((state) => state.pdv);
  const Agree = pdvv.DetailDealerId;
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const HandleClose=()=>{
        dispatch(setLogout());
        navigate("/form");
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={mobilislogo} alt="Mobilis Logo" className="logo" />
      </Link>
      <div className={`menu-container ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="menu">
          <li>
            <NavLink exact to="/home" activeClassName="active" onClick={toggleMobileMenu}>
              Accueil
            </NavLink>
          </li>

          {Agree === 2 && (
            <>
              <li>
                <NavLink to="/sim" activeClassName="active" onClick={toggleMobileMenu}>
                  Carte SIM
                </NavLink>
              </li>
              <li>
                <NavLink to="/carte" activeClassName="active" onClick={toggleMobileMenu}>
                  Carte Recharge
                </NavLink>
              </li>
            </>
          )}

          {Agree !== 2 && (
            <li>
              <NavLink to="/carte" activeClassName="active" onClick={toggleMobileMenu}>
                Carte Recharge
              </NavLink>
            </li>
          )}

          <li>
            <NavLink to="/stock" activeClassName="active" onClick={toggleMobileMenu}>
              Mon stock
            </NavLink>
          </li>

          <li>
            <NavLink to="/form" activeClassName="active" onClick={HandleClose}>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
