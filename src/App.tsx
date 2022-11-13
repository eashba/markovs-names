import { useState, useEffect, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Generate from "./pages/Generate/Generate";
import Header from "./Header";

import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import Foswig from "foswig";

import aztec from "./names/aztec.json";

import { themeChange } from "theme-change";
import FourOhFour from "./pages/FourOhFour";

function App() {
    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project
    }, []);

    // useEffect(() => {
    //     const chain = new Foswig(3, aztec.male);

    //     const constraints = {
    //         minLength: 2,
    //         // maxLength: 10,
    //         allowDuplicates: false,
    //     };
    //     const word = chain.generate(constraints);

    //     console.log({ word });
    // }, []);

    const [count, setCount] = useState(0);

    // const navigate = useNavigate();
    // const goToIndex = useCallback(() => navigate("/index", { replace: true }), [navigate]);
    // const goToAbout = useCallback(() => navigate("/", { replace: true }), [navigate]);

    return (
        <div className="bg-base-100 max-h-screen">
            {/* <select data-choose-theme>
                <option value="">Default</option>
                <option value="dark">dark</option>
                <option value="cupcake">cupcake</option>
                <option value="corporate">corporate</option>
                <option value="garden">garden</option>
                <option value="forest">forest</option>
            </select> */}

            {/* <div className="navbar bg-base-100 justify-between align-middle"> */}
            {/* <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div> */}

            {/* <div onClick={goToIndex}>
                    <a className="btn btn-ghost normal-case text-2xl font-baskerville font-semibold">Markov's Names</a>
                </div>

                <div onClick={goToAbout}>
                    <a className="btn btn-ghost normal-case text-4xl font-baskerville">?</a>
                </div>
            </div> */}

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
