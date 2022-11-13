import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    const goToIndex = useCallback(() => navigate("/", { replace: true }), [navigate]);

    return (
        <div className="flex justify-center">
            <div className="text-center mx-5 my-10 w-[60vw] min-w-[300px]">
                <p className="text-5xl font-baskerville font-semibold">Markov's Names</p>
                <p className="text-lg mt-5 font-semibold">A simple procedural name generator</p>
                <div className="text-left text-lg">
                    <p className="text-2xl mt-10 mb-2 font-semibold">What is this?</p>
                    <p>
                        This is a simple name generator that utilizes{" "}
                        <a
                            href="https://en.wikipedia.org/wiki/Markov_chain"
                            target="_blank"
                            className="link link-primary link-hover font-bold"
                        >
                            Markov Chains
                        </a>{" "}
                        to procedurally generate new, unique names from an original dataset of existing names. This
                        project relies heavily on{" "}
                        <a
                            href="https://github.com/mrsharpoblunto/foswig.js"
                            target="_blank"
                            className="link link-primary link-hover font-bold"
                        >
                            Foswig.js
                        </a>{" "}
                        for its Markov Chain implementation.
                    </p>
                    <p className="text-2xl mt-10 mb-2 font-semibold">Dataset Sources</p>
                    <p>
                        The names in the various datasets on this site come primarily from{" "}
                        <a
                            href="https://index.rpg.net/display-entry.phtml?mainid=329"
                            target="_blank"
                            className="link link-primary link-hover font-bold"
                        >
                            Gary Gygax's Extraordinary Book of Names
                        </a>
                        , which is no longer in print. Datasets are simple JSON files, so this project's generators can
                        be easily extended by adding more. Custom datasets are on the todo list.
                    </p>
                    <p className="text-2xl mt-10 mb-2 font-semibold">Usage</p>
                    <p>
                        This is a free and open source project, provided under the MIT license. Source code is avalable{" "}
                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="link link-primary link-hover font-bold"
                        >
                            here.
                        </a>
                        <br /> Built with ❤️ by Evan Ashba.
                    </p>
                </div>
                <button onClick={goToIndex} className="my-10 btn btn-primary btn-lg">
                    Start Generating!
                </button>

                <div className="flex justify-center mt-5"></div>
            </div>
        </div>
    );
}

export default About;
