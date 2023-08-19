import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { ProvinceContext } from "../../context/provinceContext";
import "../../../styles/user.css";

const User = () => {
  const { user } = useContext(UserContext);
  const { province } = useContext(ProvinceContext);
  return (
    <>
      <div className="center">
        <div className="container-user-primary">
          <div className="container-imgs">
            <div className="image-container-sun"></div>
            <div className="image-container-rain"></div>
          </div>
          <div className="container-texts">
            <div className="container-title">
              <h1>Bienvenido {user} </h1>
            </div>
            <div className="about">
              <p>
                Accede a información precisa y actualizada para estar informado
                sobre el clima y planificar actividades al aire libre. Estarás preparado con esta aplicación.
                Regístrate y consulta el tiempo de tu localidad.{" "}
              </p>
            </div>
            <div className="provincia-container">
            <div className="province-info">
                <p className="title-province">Provincia</p>
            </div>
              <div className="conatiner-province-data">
                <p className="province-data"> {province} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
