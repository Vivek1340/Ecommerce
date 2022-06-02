import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Pay from './components/Pay';
import Success from "./components/Success"

const App = () => {
    return (
        <Router>
            <Routes>                 
                <Route exact path="/pay" element={<Pay />} />
                <Route exact path="/success" element={<Success />}/>                  
            </Routes>
        </Router>
    )
}

export default App
