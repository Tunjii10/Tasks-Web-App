import { useEffect } from "react";
import Provider from "../services/provider";

function Login() {
  useEffect(() => {
    Provider.Login({
      email: "tunji@gmail.com",
      password: "123456qwerty-",
    }).then((response) => {
      console.log(response);
    });
  }, []);
  return <p>Login Page</p>;
}

export default Login;
