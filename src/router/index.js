import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage/index'
import SubmitPage from '../Pages/SubmitPage/index'
import HallPage from '../Pages/HallPage'

export default function MainRoutes() {
    return (    
     <BrowserRouter>
            <Routes>
                <Route exact path= "/" element = {<LoginPage />}  />
                <Route exact path= "/Cadastro" element = {<SubmitPage />}  />
                <Route exact path= "/Hall" element = {<HallPage />}  />                  
            </Routes>        
     </BrowserRouter>     
    )
}

