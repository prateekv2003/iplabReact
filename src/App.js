import React, { useEffect } from "react";
import Counter from './components/Counter'
import Home from './components/Home.js'
import Form from './components/Form'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/counter" element={<Counter/>} />
                <Route path="/form" element={<Form/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App 