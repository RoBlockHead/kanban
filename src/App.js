import React, { useContext } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserContext } from "./providers/UserProvider";
function App() {
  const user = useContext(UserContext);
  return (
        user ?
        <ProfilePage />
      :
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={SignIn} />
              <Route path='/signUp' component={SignUp} />
              <Route path="/passwordReset" component={PasswordReset} />
          </Switch>
        </BrowserRouter>

  );
}
export default App;