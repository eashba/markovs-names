import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const goToIndex = useCallback(() => navigate("/", { replace: true }), [navigate]);
    const goToAbout = useCallback(() => navigate("/about", { replace: true }), [navigate]);

    
    return (
        <div className="navbar bg-base-100 justify-between align-middle">
            <div onClick={goToIndex}>
                <a className="btn btn-ghost normal-case text-2xl font-baskerville font-semibold">Markov's Names</a>
            </div>

            <div onClick={goToAbout}>
                <a className="btn btn-ghost normal-case text-4xl font-bold font-baskerville">?</a>
            </div>
        </div>
    );
}

export default Header;
