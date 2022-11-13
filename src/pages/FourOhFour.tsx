import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function FourOhFour() {
    const navigate = useNavigate();
    const goToIndex = useCallback(() => navigate("/", { replace: true }), [navigate]);

    return (
        <div className="flex justify-center">
            <div className="text-center">
                <div className="text-4xl mx-5 my-10 w-[60vw] font-baskerville font-semibold min-w-[300px]">
                    404 Page not Found.
                </div>
                <div onClick={goToIndex}>
                    <button className="btn btn-outline btn-primary">Take me back to the names!</button>
                </div>
            </div>
        </div>
    );
}

export default FourOhFour;
