import React from "react";

interface ComponentProps {
    names: Array<string>;
}

function Nametable(props: ComponentProps) {
    const { names } = props;
    return (
        <div className="overflow-x-auto overflow-y-auto md:min-w-[300px] min-w-full">
            <table className="table w-full table-compact table-zebra ">
                <tbody>
                    {names.map((name: string, idx: number) => {
                        return (
                            <tr className="group" key={idx}>
                                <th>{idx + 1}</th>
                                <td>{name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Nametable;
