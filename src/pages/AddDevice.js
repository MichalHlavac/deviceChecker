import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../containers/UserContext";
import AddForm from "../containers/AddForm";
import { Page } from "../components/styledPage";
import { Header } from "../components/styledHeader";
import Logout from "../containers/Logout";
import Back from "../containers/DLLink";

export default () => {
  const [user, setUser] = useContext(UserContext);

  if (!user) {
    return <Redirect to='/' />;
  }
  if (user.type === "user") {
    return <Redirect to='/devicelist' />;
  } else {
    return (
      <Page>
        <Header>
          <h1>deviceChecker</h1>
          <nav>
            <Logout />
            <Back />
          </nav>
        </Header>
        <AddForm />
      </Page>
    );
  }
};
