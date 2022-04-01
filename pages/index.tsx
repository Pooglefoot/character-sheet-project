import React from "react";
import ClassSelect from "../components/ClassSelect";
import RaceSelect from "../components/RaceSelect";
import { useCharacter } from "../hooks/CharacterContext";
import { characterClassToString, characterRaceToString } from "../lib/character";
import { characterAttributesToArray, AttributeType, setAttribute } from "../lib/attributes";

export default function IndexPage() {
    const {character, setName, setClass, setRace, setAttributes} = useCharacter();

    return (
        <div>
            {character.name} the {characterClassToString(character.characterClass)}
            <p>You are {character.age} years old.</p>
            <p>You are {characterRaceToString(character.race)}</p>
            <div>
                <ClassSelect onChange={(c) => setClass(c)}/>
            </div>
            <div>
                <RaceSelect onChange={(r) => setRace(r)}/>
            </div>
            <div>
                <ul>
                    {characterAttributesToArray().map(key => {
                        const a = character.attributes[key];

                        return (<li key={key}>
                            <button onClick={() => setAttributes(setAttribute(character.attributes, key, a-1))}>-</button>
                            {key}: {a}
                            <button onClick={() => setAttributes(setAttribute(character.attributes, key, a+1))}>+</button>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}