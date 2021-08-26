import React from 'react'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import 'materialize-css'
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";

function App() {

    const {token, login, logout, userId} = useAuth()
    const isAutenticated = !!token
    const routes = useRoutes(isAutenticated)
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAutenticated
        }}>

            <BrowserRouter>
                <div className='container'>
                    {isAutenticated && <Navbar/>}
                    {routes}
                </div>
            </BrowserRouter>

        </AuthContext.Provider>
    )
}

export default App;
