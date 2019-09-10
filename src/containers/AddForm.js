import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../containers/UserContext";
import { AddForm } from "../components/styledAddForm";

export default () => {
  const reset = () => document.getElementById("addForm").reset();
  const [user, setUser] = useContext(UserContext);
  const [newDevice, setNewDevice] = useState({});
  const handleChange = e => {
    setNewDevice({ ...newDevice, [e.target.name]: e.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://js-test-api.etnetera.cz/api/v1/phones", newDevice, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Auth-Token": user.token,
        },
      })
      .then(res => {
        console.log(res.data);
        reset();
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  return (
    <AddForm onSubmit={handleSubmit} id='addForm'>
      <h2>Nové zařízení</h2>
      <input
        type='text'
        name='code'
        onChange={handleChange}
        placeholder='Kódové označení(identifikátor)'
        required
      />
      <input
        type='text'
        name='os'
        onChange={handleChange}
        placeholder='Operační systém'
        required
      />
      <input
        type='text'
        name='vendor'
        onChange={handleChange}
        placeholder='Výrobce'
        required
      />
      <input
        type='text'
        name='model'
        onChange={handleChange}
        placeholder='Model'
        required
      />
      <input
        type='text'
        name='osVersion'
        onChange={handleChange}
        placeholder='Verze operačního systému'
        required
      />
      <input
        type='url'
        name='image'
        placeholder='Obrázek(URL)'
        onChange={handleChange}
      />
      <button type='submit'>Přidat Zařízení</button>
    </AddForm>
  );
};
