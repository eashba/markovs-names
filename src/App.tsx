import React from "react";
import { useEffect } from "react";
import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Generate from "./pages/Generate/Generate";
import Header from "./Header";

import { Route, Routes } from "react-router-dom";
import { themeChange } from "theme-change";
import FourOhFour from "./pages/FourOhFour";

function App() {
    //TODO: Implement DaisyUI theme swapping
    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <div className="bg-base-100 max-h-screen">
            <Routes>
                <Route
                    path="*"
                    element={
                        <>
                            <Header />
                            <FourOhFour />
                        </>
                    }
                />
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/generate/:groupName"
                    element={
                        <>
                            <Header />
                            <Generate />
                        </>
                    }
                />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
