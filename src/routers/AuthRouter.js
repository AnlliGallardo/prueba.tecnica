import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { App } from '../components/App';




export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>

                    <Route exact path="/app"  component={App}/> 

                    <Redirect to="/app" />

                </Switch>
            </div>

        </div>
    )
}