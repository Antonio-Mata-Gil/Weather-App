import { Link, useNavigate } from "react-router-dom";
import "../../../styles/header.css";
import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext";

const Header = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/")
    window.location.reload();
  };
  const { jwt } = useContext(JwtContext);
  return (
    <div className="center">
      <ul>
        <li className="pages">
          <Link to="/">Inicio</Link>
        </li>
        {jwt && (
          <>
          <li className="pages">
                <Link to="/user">Mi usuario</Link>
              </li>
              <li><button className="button-logout" onClick={logOut}>Cerrar Sesión</button></li>
          </>
          
        )}
       
        {jwt === null && (
            <>
              <li className="pages">
                <Link to="/login">Inicio Sesión</Link>
              </li>
              <li className="pages">
                <Link to="/register">Registro</Link>
              </li>
            </>
          )}
      </ul>
    </div>
  );
};

export default Header;
