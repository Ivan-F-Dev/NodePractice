import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import 'materialize-css'
import {AuthContext} from "./context/AuthContext";

function App() {

    const {token, login, logout, userId} = useAuth()
    const isAutenticated = !!token
    const routes = useRoutes(isAutenticated)
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAutenticated
        }}>
            <div className='container'>
                <BrowserRouter>
                    {routes}
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    )
}

export default App;
