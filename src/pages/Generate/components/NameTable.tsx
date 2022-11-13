function Nametable({ names }) {
    return (
        <div className="overflow-x-auto overflow-y-auto md:min-w-[300px] min-w-full">
            <table className="table w-full table-compact table-zebra ">
                <tbody>
                    {names.map((name: string, idx: number) => {
                        return (
                            <tr className="group" key={idx}>
                                <th>{idx + 1}</th>
                                <td>{name}</td>
                                {/* <td>
                                    <div className="rating ">
                                        <input
                                            type="radio "
                                            className="mask mask-star bg-white radio-sm  group-hover:bg-gray-200"
                                        />
                                    </div>
                                </td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Nametable;
