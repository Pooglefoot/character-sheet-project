import React from "react";
import { setCharacterName, setCharacterAge, setCharacterRace, setCharacterClass, setCharacterAttributes } from "../actions/characterActions";
import { changeCharacterAge, changeCharacterName, changeCharacterClass, changeCharacterRace, Character, CharacterClass, createCharacter, Race, Attributes } from "../lib/character";
import characterReducer from "../reducers/characterReducer";

interface CharacterContextProps {
    character: Character;
    setName: (name: string) => void;
    setAge: (age: number) => void;
    setRace: (race: Race) => void;
    setClass: (characterClass: CharacterClass) => void;
    setAttributes: (attributes: Attributes) => void;
}

const CharacterContext = React.createContext<CharacterContextProps>({
    character: createCharacter(),
    setName: () => {},
    setAge: () => {},
    setRace: () => {},
    setClass: () => {},
    setAttributes: () => {},
});

export const useCharacter = () => React.useContext(CharacterContext);

export default function CharacterProvider(props: React.PropsWithChildren<{}>) {
    const [character, dispatch] = React.useReducer(characterReducer, createCharacter());

    const contextState = {
        character: character, 
        setName: (name: string) => dispatch(setCharacterName(name)),
        setAge: (age: number) => dispatch(setCharacterAge(age)),
        setRace: (race: Race) => dispatch(setCharacterRace(race)),
        setClass: (characterClass: CharacterClass) => dispatch(setCharacterClass(characterClass)),
        setAttributes: (attributes: Attributes) => dispatch(setCharacterAttributes(attributes)),
    }

    return (
        <CharacterContext.Provider value={contextState}>
            {props.children}
        </CharacterContext.Provider>
    )
}