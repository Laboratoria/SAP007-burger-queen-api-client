import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react';
import LoginPage from '../Pages/LoginPage/index'

export default function MainRoutes() {
    return (    
     <BrowserRouter>        
            <Switch>
                <Route component = {LoginPage} path="/" exact />            
            </Switch>        
     </BrowserRouter>     
    )
}