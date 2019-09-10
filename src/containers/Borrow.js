import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { DevicesContext } from "./DevicesContext";
import { Borrow } from "../components/styledBorrow";
import axios from "axios";

export default props => {
  const device = props.device;
  const [devices, setDevices] = useContext(DevicesContext);
  const [user, setUser] = useContext(UserContext);
  const handleClick = () => {
    axios
      .post(
        `https://js-test-api.etnetera.cz/api/v1/phones/${device.id}/borrow`,
        {},
        { headers: { Accept: "application/json", "Auth-Token": user.token } },
      )
      .then(
        axios
          .get("https://js-test-api.etnetera.cz/api/v1/phones", {
            headers: { Accept: "application/json", "Auth-Token": user.token },
          })
          .then(result => setDevices(result.data)),
      )
      .catch(error => {
        console.log(error.response);
      });
  };
  if (device.borrowed) {
    return <Borrow className='borrowed'>PŮJČIT</Borrow>;
  }
  return (
    <Borrow className='availible' onClick={handleClick}>
      PŮJČIT
    </Borrow>
  );
};
