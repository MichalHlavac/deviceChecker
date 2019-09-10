import React, { useState } from "react";

const DevicesContext = React.createContext([{}, () => {}]);

const DevicesProvider = props => {
  const [devices, setDevices] = useState([]);
  return (
    <DevicesContext.Provider value={[devices, setDevices]}>
      {props.children}
    </DevicesContext.Provider>
  );
};
export { DevicesContext, DevicesProvider };
