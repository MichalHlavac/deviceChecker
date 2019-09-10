import React, { useContext } from "react";
import { UserContext } from "../containers/UserContext";
import Return from "./Return";
import Borrow from "./Borrow";

export default props => {
  const [user] = useContext(UserContext);
  const device = props.device;
  if (device.borrowed && device.borrowed.user.login === user.login) {
    return <Return device={device} />;
  }
  return <Borrow device={device} />;
};
