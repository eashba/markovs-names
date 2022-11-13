import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

import Foswig from "foswig";

// import aztec from "../../names/aztec.json";
// import english from "../../names/english.json";

import Nametable from "./components/NameTable";
import SettingsTable from "./components/SettingsTable";

import { NameGroup, getGroupByName } from "../../names/name-groups";

export interface ChainSettings {
    constraints: {
        minLength: number;
        allowDuplicates: boolean;
    };
    useMale: boolean;
    useFemale: boolean;
    generateSurnames: boolean;
    quantity: number;
}

//Default settings
const defaultChainSettings: ChainSettings = {
    constraints: {
        minLength: 2,
        allowDuplicates: true,
    },
    useMale: true,
    useFemale: true,
    generateSurnames: true,
    quantity: 10,
};

const buildDataset = (nameGroup: NameGroup, settings: ChainSettings) => {
    const namesArray = [];
    if (settings.useFemale) {
        namesArray.push(...nameGroup.female);
    }
    if (settings.useMale) {
        namesArray.push(...nameGroup.male);
    }

    return namesArray;
};

function Generate() {
    const { groupName } = useParams();

    const [generatedNames, setGeneratedNames] = useState<Array<string>>([]);

    const [currentChain, setCurrentChain] = useState<Foswig | undefined>();
    const [currentSurnameChain, setCurrentSurnameChain] = useState<Foswig | undefined>();

    const [currentNameGroup, setCurrentNameGroup] = useState<NameGroup | undefined>();

    const [currentDataset, setCurrentDataset] = useState<Array<string>>([]);
    const [currentSurnameDataset, setCurrentSurnameDataset] = useState<Array<string>>([]);

    const [chainSettings, setChainSettings] = useState<ChainSettings>(defaultChainSettings);
    const [error, setError] = useState<string>();

    const createChain = (nameGroup: NameGroup, settings: ChainSettings) => {
        const dataset = buildDataset(nameGroup, settings);
        setCurrentDataset(dataset);
        return new Foswig(settings.constraints.minLength, dataset);
    };

    const createSurnameChain = (nameGroup: NameGroup, settings: ChainSettings) => {
        setCurrentSurnameDataset(nameGroup.family);
        return new Foswig(settings.constraints.minLength, nameGroup.family);
    };

    const updateSettings = (field: any) => {
        setChainSettings({ ...chainSettings, ...field });
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

    useEffect(() => {
        if (groupName) {
            const nameGroup = getGroupByName(groupName);

            if (nameGroup) {
                const chain = createChain(nameGroup, chainSettings);
                if (nameGroup.family.length > 0) {
                    console.log("Created family chain");
                    const surnameChaine = createSurnameChain(nameGroup, chainSettings);
                    setCurrentSurnameChain(surnameChaine);
                }
                setCurrentChain(chain);
                setCurrentNameGroup(nameGroup);
            }
        }
    }, [chainSettings]);

    useEffect(() => {
        generateNames();
    }, [currentChain]);

    const generateNames = () => {
        try {
            const names: Array<string> = [];
            if (currentChain) {
                for (let i = 0; i < chainSettings.quantity; i++) {
                    const name: string = currentChain.generate(chainSettings.constraints);

                    if (currentSurnameChain && chainSettings.generateSurnames) {
                        const surname: string = currentSurnameChain.generate(chainSettings.constraints);
                        const fullname = currentNameGroup?.surnameFirst ? `${surname} ${name}` : `${name} ${surname}`;
                        names.push(fullname);
                    } else {
                        names.push(name);
                    }
                }
                setGeneratedNames(names);
            } else {
                console.log("Nop chains");
            }
        } catch (err) {
            setError("Error: Unable to generate names with the given constraints.");
        }
    };

    return currentNameGroup ? (
        <div className=" p-5">
            <div className=" text-center">
                <p className="text-4xl  font-baskerville font-semibold">
                    Generating <span className="text-primary font-bold">{currentNameGroup.name}</span> Names
                </p>
                {error ? <p className="text-lg font-bold text-error mt-5">{error}</p> : null}
            </div>

            <div className="flex justify-center md:flex-row flex-col md:my-10 my-4">
                <div className="px-5 md:mb-10 mb-4">
                    <p className="text-2xl font-semibold mb-3">Settings</p>

                    <SettingsTable
                        updateSettings={updateSettings}
                        chainSettings={chainSettings}
                        dataset={currentDataset}
                        surnameDataset={currentSurnameDataset}
                        nameGroup={currentNameGroup}
                    ></SettingsTable>

                    <button className="btn  btn-primary my-5" onClick={generateNames}>
                        Generate!
                    </button>
                </div>

                <div className="px-5">
                    <p className="text-2xl font-semibold mb-3">Names</p>
                    <Nametable names={generatedNames}></Nametable>
                </div>
            </div>
        </div>
    ) : null;
}

export default Generate;
