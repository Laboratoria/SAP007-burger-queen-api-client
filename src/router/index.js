import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage/index'
import SubmitPage from '../Pages/SubmitPage/index'

export default function MainRoutes() {
    return (    
     <BrowserRouter>
            <Routes>
                <Route exact path= "/" element = {<LoginPage />}  />
                <Route exact path= "/Cadastro" element = {<SubmitPage />}  />              
            </Routes>        
     </BrowserRouter>     
    )
}

