import React, { useContext } from "react";
import { UserContext } from "../containers/UserContext";

export default () => {
  const [user, setUser] = useContext(UserContext);
  const logout = () => setUser(null);
  return (
    <div className='logout'>
      <label htmlFor='logout'>{user.login}</label>
      <button id='logout' onClick={logout}>
        Odhlasit
      </button>
    </div>
  );
};
