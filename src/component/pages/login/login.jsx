import { useForm } from "react-hook-form";
import { API } from "../../../services/api";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../context/jwtContext";
import { UserContext } from "../../context/userContext";
import { ProvinceContext } from "../../context/provinceContext";

const Login = () => {
  const { setJwt } = useContext(JwtContext)
  const { setUser } = useContext(UserContext)
  const { setProvince } = useContext(ProvinceContext)
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit = (formData) => {
    API.post("login", formData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          localStorage.setItem( "token", response.data.accessToken)
          localStorage.setItem( "user", response.data.user.user)
          localStorage.setItem( "email", response.data.user.email)
          localStorage.setItem( "province", response.data.user.provincias)
          setJwt(response.data.accessToken)
          setUser(response.data.user.user)
          setProvince(response.data.user.provincias)
          navigate("/")
          setError()
        } else {
          setError("Email o contraseña inválidos");
        }
      })
      .catch((error) => {
       

        setError("Email o contraseña inválidos");
      });
  };

  return (
    <>
      <div className="all-container">
        <div className="img-login-container"></div>
        <div className="center register-container">
          <div className="title">
            <h1>Inicia Sesión</h1>
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
              placeholder="Contraseña"
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {error && <p className="error-message">{error}</p>}
            <button className="button" type="submit">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
