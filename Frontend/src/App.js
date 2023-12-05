import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login"; 
import Register from "./Pages/Register"; 
import Home from "./Pages/Home";
import TechnicalDocument from "./Pages/TechnicalDocument";
import HelpDocument from "./Pages/Help";
import MeditationHelp from "./Pages/MeditationHelp";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/technicaldocument" element={<TechnicalDocument />} />
                <Route path="/help" element={<HelpDocument />} />
                <Route path="/advice" element={<MeditationHelp />} />
            </Routes>
        </Router>
    )
}

export default App;
