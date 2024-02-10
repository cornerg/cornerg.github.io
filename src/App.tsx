import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/header/Header";
import {AccessData} from "./contexts/contexts";
import Footer from "./components/Footer/Footer";

function App() {
    const [reducedMotion, setReducedMotion] = React.useState<boolean>(localStorage.getItem("JRD-ReduceMotion") === "true");


    return (
        <div className={`App${reducedMotion ? " reduceMotion" : ""}`}>
            <AccessData.Provider value={{reduceMotion: reducedMotion, setReduceMotion: setReducedMotion}}>
                <Header/>
                <Outlet/>
                <Footer/>
            </AccessData.Provider>
        </div>
    );
}

export default App;