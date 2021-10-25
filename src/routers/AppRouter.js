import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { loginSincrono } from "../actions/actionLogin";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { AuthRouter } from "./AuthRouter";
import {  getAuth, onAuthStateChanged } from "firebase/auth";

import {Registro} from '../components/Registro';
import Login from "../components/Login";
import { App } from "../components/App";
import { useDispatch } from "react-redux";
import { AppList } from "../components/AppList";






export default function AppRouter() {

  const auth = getAuth();
  const [checking, setChecking] = useState(true)
  const [isLooggedIn, setsIsLoogedIn] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
        if (user?.uid) {
            dispatch(loginSincrono(user.uid, user.displayName))
            setsIsLoogedIn(true)
            dispatch(AppList(user.uid))
            console.log(user.uid)
        } else {
            setsIsLoogedIn(false)
        }
        setChecking(false)
    })
}, [dispatch, setChecking])

if (checking) {
    return null;
}

  return (
    <Router>
      
      <div>
                <Switch>
                    
                    <Route
                        exact
                        path="/app"
                        component={App}
                        isAuthenticated={ isLooggedIn }
                    />

                    <PublicRouter
                        exact
                        path="/"
                        component={Login}
                        isAuthenticated={ isLooggedIn }
                    />

                    <PublicRouter
                        exact
                        path="/registro"
                        component={Registro} 
                        isAuthenticated={ isLooggedIn }
                    />

                    <PrivateRouter
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={ isLooggedIn }
                    />
                
                </Switch>
            </div>
    </Router>
  );
}