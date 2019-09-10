import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserProvider } from "./containers/UserContext";
import { DevicesProvider } from "./containers/DevicesContext";
import Login from "./pages/Login";
import DeviceList from "./pages/DeviceList";
import AddDevice from "./pages/AddDevice";
import { GlobalStyle } from "./components/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <UserProvider>
        <DevicesProvider>
          <Route path='/' exact component={Login} />
          <Route path='/devicelist' component={DeviceList} />
          <Route path='/add-device' component={AddDevice} />
        </DevicesProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
