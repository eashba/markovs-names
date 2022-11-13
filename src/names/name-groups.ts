import armenian from "./datasets/armenian.json"
import aztec from "./datasets/aztec.json";
import berber from "./datasets/berber.json"
import dutch from "./datasets/dutch.json"
import egyptian from "./datasets/egyptian.json"
import english from "./datasets/english.json";
import englishAristocratic from "./datasets/english-aristocratic.json";
import finnish from "./datasets/finnish.json"
import french from "./datasets/french.json"
import german from "./datasets/german.json"
import inca from "./datasets/inca.json";
import indian from "./datasets/indian.json";
import irish from "./datasets/irish.json"
import japanese from "./datasets/japanese.json"
import mongol from "./datasets/mongol.json"
import norse from "./datasets/norse.json"
import polish from "./datasets/polish.json"
import scottish from "./datasets/scottish.json"
import welsh from "./datasets/welsh.json"
import comicalShort from "./datasets/comical-short.json"
import comicalLong from "./datasets/comical-long.json"

export const nameGroups = [
    armenian,
    aztec,
    berber,
    dutch,
    egyptian,
    english,
    englishAristocratic,
    finnish,
    french,
    german,
    inca,
    indian,
    irish,
    japanese,
    mongol,
    norse,
    polish,
    scottish,
    welsh,
    comicalShort,
    comicalLong,
];

export interface NameGroup {
    male: Array<string>;
    female: Array<string>;
    family: Array<string>;
    surnameFirst: boolean;
    name: string;
}

export const getGroupByName = (groupName: string): NameGroup | undefined => {

    return nameGroups.find((group) => {
        return group.name.toLowerCase() === groupName.toLowerCase();
    });

}
