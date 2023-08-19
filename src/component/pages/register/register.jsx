import { useForm } from "react-hook-form";
import "../../../styles/register.css";
import { API } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = async (formData) => {
    try {
      const response = await API.post("register", formData);
      if (response.status === 200 || 201) {
        
        navigate("/login");
      }
    } catch (error) {
      let errorMessage = "El email o usuario ya existen";
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message || errorMessage;
      }
      setError(errorMessage);
    }
  };

  
  
  
  

  return (
    <>
      <div className="all-container">
        <div className="img-container"></div>
        <div className="center register-container">
          <div className="title">
            <h1>Registra tu usuario</h1>
          </div>
          <form className="form-conatiner" onSubmit={handleSubmit(onSubmit)}>
          
            <input
            className="input"
            placeholder="Email"
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
          
            <input
            className="input"
             placeholder="Nombre de usuario"
              type="text"
              id="user"
              {...register("user", { required: true })}
            />
           
            <input
            className="input"
             placeholder="Contraseña"
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
          
            <select
            className="input"
              id="provincias"
              name="provincias"
              {...register("provincias", { required: true })}
            >
              <option  value="">¿Donde vives?</option>
              <option value="alava">Álava</option>
              <option value="albacete">Albacete</option>
              <option value="alicante">Alicante</option>
              <option value="almeria">Almería</option>
              <option value="asturias">Asturias</option>
              <option value="avila">Ávila</option>
              <option value="badajoz">Badajoz</option>
              <option value="barcelona">Barcelona</option>
              <option value="burgos">Burgos</option>
              <option value="caceres">Cáceres</option>
              <option value="cadiz">Cádiz</option>
              <option value="cantabria">Cantabria</option>
              <option value="castellon">Castellón</option>
              <option value="ciudadreal">Ciudad Real</option>
              <option value="cordoba">Córdoba</option>
              <option value="cuenca">Cuenca</option>
              <option value="gerona">Gerona</option>
              <option value="granada">Granada</option>
              <option value="guadalajara">Guadalajara</option>
              <option value="guipuzcoa">Guipúzcoa</option>
              <option value="huelva">Huelva</option>
              <option value="huesca">Huesca</option>
              <option value="jaen">Jaén</option>
              <option value="laCoruna">La Coruña</option>
              <option value="laRioja">La Rioja</option>
              <option value="lasPalmas">Las Palmas</option>
              <option value="leon">León</option>
              <option value="lerida">Lérida</option>
              <option value="lugo">Lugo</option>
              <option value="madrid">Madrid</option>
              <option value="malaga">Málaga</option>
              <option value="murcia">Murcia</option>
              <option value="navarra">Navarra</option>
              <option value="ourense">Ourense</option>
              <option value="palencia">Palencia</option>
              <option value="pontevedra">Pontevedra</option>
              <option value="salamanca">Salamanca</option>
              <option value="santaCruz">Santa Cruz de Tenerife</option>
              <option value="segovia">Segovia</option>
              <option value="sevilla">Sevilla</option>
              <option value="soria">Soria</option>
              <option value="tarragona">Tarragona</option>
              <option value="teruel">Teruel</option>
              <option value="toledo">Toledo</option>
              <option value="valencia">Valencia</option>
              <option value="valladolid">Valladolid</option>
              <option value="vizcaya">Vizcaya</option>
              <option value="zamora">Zamora</option>
              <option value="zaragoza">Zaragoza</option>
            </select>
            {error && <p className="error-message">{error}</p>}
            <button className="button" type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;