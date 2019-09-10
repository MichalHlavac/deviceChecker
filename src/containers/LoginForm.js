import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { LoginForm } from "../components/styledLogin";

export default () => {
  const [user, setUser] = useContext(UserContext);
  const [login, setLogin] = useState({});
  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://js-test-api.etnetera.cz/api/v1/login", login, {
        headers: { "Content-Type": "application/json" },
      })
      .then(res => {
        setUser(res.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  return (
    <LoginForm onSubmit={handleSubmit}>
      <h2>Přihlášení</h2>
      <p className='description'>
        Po přihlášení si budeš moct půjčit telefon,případně vložit nový do
        seznamu.
      </p>
      <label htmlFor='login'>Přihlašovací jméno</label>
      <input
        type='email'
        name='login'
        id='login'
        onChange={handleChange}
        required
      />
      <label htmlFor='password'>Heslo</label>
      <input
        type='password'
        name='password'
        id='password'
        onChange={handleChange}
        required
      />
      <button type='submit'>Přihlásit se</button>
    </LoginForm>
  );
};
