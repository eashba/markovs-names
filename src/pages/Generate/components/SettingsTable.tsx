import React from "react";
import { NameGroup, nameGroups } from "../../../names/name-groups";
import { ChainSettings } from "../Generate";

interface ComponentProps {
    updateSettings: Function;
    chainSettings: ChainSettings;
    dataset: Array<string>;
    surnameDataset: Array<string>;
    nameGroup: NameGroup;
}

function SettingsTable(props: ComponentProps) {
    const { updateSettings, chainSettings, dataset, surnameDataset, nameGroup } = props;

    const toggleMale = () => {
        const newMaleValue = !chainSettings.useMale;

        if (!newMaleValue && !chainSettings.useFemale) {
            updateSettings({ useMale: newMaleValue, useFemale: true });
        } else {
            updateSettings({ useMale: newMaleValue });
        }
    };

    const toggleFemale = () => {
        const newFemaleValue = !chainSettings.useFemale;

        if (!newFemaleValue && !chainSettings.useMale) {
            updateSettings({ useFemale: newFemaleValue, useMale: true });
        } else {
            updateSettings({ useFemale: newFemaleValue });
        }
    };

    return (
        <div className="">
            <table className="table w-full table-compact">
                <tbody>
                    <tr>
                        <td>Number to generate</td>
                        <td className="text-center">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost btn-sm ">
                                    {chainSettings.quantity}
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-base-100 rounded-box">
                                    <li>
                                        <a onClick={() => updateSettings({ quantity: 5 })}>5</a>
                                    </li>
                                    <li>
                                        <a onClick={() => updateSettings({ quantity: 10 })}>10</a>
                                    </li>
                                    <li>
                                        <a onClick={() => updateSettings({ quantity: 25 })}>25</a>
                                    </li>
                                    <li>
                                        <a onClick={() => updateSettings({ quantity: 50 })}>50</a>
                                    </li>
                                </ul>
                            </div>
                        </td>
                    </tr>

                    {surnameDataset.length > 0 ? (
                        <tr>
                            <td>Generate surnames</td>
                            <td className="text-center">
                                <input
                                    checked={chainSettings.generateSurnames}
                                    onChange={() => {
                                        updateSettings({
                                            ...chainSettings,
                                            generateSurnames: !chainSettings.generateSurnames,
                                        });
                                    }}
                                    type="checkbox"
                                    className="checkbox checkbox-sm"
                                />
                            </td>
                        </tr>
                    ) : null}

                    {nameGroup.male.length !== 0 && nameGroup.female.length !== 0 ? (
                        <>
                            <tr>
                                <td>Include masculine names in dataset</td>
                                <td className="text-center">
                                    <input
                                        checked={chainSettings.useMale}
                                        onChange={toggleMale}
                                        type="checkbox"
                                        className="checkbox checkbox-sm"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Include feminine names in dataset</td>
                                <td className="text-center">
                                    <input
                                        checked={chainSettings.useFemale}
                                        onChange={toggleFemale}
                                        type="checkbox"
                                        className="checkbox checkbox-sm"
                                    />
                                </td>
                            </tr>
                        </>
                    ) : null}

                    <tr>
                        <td>Allow generation of names in dataset</td>
                        <td className="text-center">
                            <input
                                checked={chainSettings.constraints.allowDuplicates}
                                onChange={() => {
                                    updateSettings({
                                        constraints: {
                                            ...chainSettings.constraints,
                                            allowDuplicates: !chainSettings.constraints.allowDuplicates,
                                        },
                                    });
                                }}
                                type="checkbox"
                                className="checkbox checkbox-sm"
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <a href="#dataset" className="link link-primary link-hover font-bold">
                                View current dataset
                            </a>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <div className="modal" id="dataset">
                <div className="modal-box w-11/12 max-w-5xl">
                    <p className="font-bold text-3xl">Current Dataset:</p>
                    <div className="mt-5 p-4 overflow-auto h-[60vh] border-primary border rounded-lg">
                        {dataset.join(", ")}
                        {chainSettings.generateSurnames && nameGroup.family.length > 0 ? (
                            <>
                                <p className="mt-3 font-bold text-xl">Surnames</p>
                                {surnameDataset.join(", ")}
                            </>
                        ) : null}
                    </div>

                    <div className="modal-action">
                        <a href="#" className="btn">
                            Return
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsTable;
