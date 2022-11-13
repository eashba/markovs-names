import { NameGroup, nameGroups } from "../names/name-groups";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className=" text-center">
            <p className="my-5 text-4xl  font-baskerville font-semibold">Name Generator Index</p>

            <div className="mt-5">
                {nameGroups.map((nameGroup: NameGroup) => {
                    return (
                        <div className="mt-2" key={nameGroup.name}>
                            <Link
                                to={`/generate/${nameGroup.name.toLowerCase()}`}
                                className="link link-primary link-hover font-semibold "
                            >
                                {nameGroup.name}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
