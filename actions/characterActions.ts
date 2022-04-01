import { CharacterClass, Race } from "../lib/character";
import { Attributes } from "../lib/attributes";

export enum CharacterActionType {
    SET_NAME,
    SET_AGE,
    SET_RACE,
    SET_CLASS,
    SET_ATTRIBUTES,
}

export interface SetCharacterNameAction {
    type: CharacterActionType.SET_NAME;
    name: string;
}

export interface SetCharacterAgeAction {
    type: CharacterActionType.SET_AGE;
    age: number;
}

export interface SetCharacterRaceAction {
    type: CharacterActionType.SET_RACE;
    race: Race;
}

export interface SetCharacterClassAction {
    type: CharacterActionType.SET_CLASS;
    characterClass: CharacterClass;
}

export interface SetCharacterAttributesAction {
    type: CharacterActionType.SET_ATTRIBUTES;
    attributes: Attributes;
}

export type CharacterAction = SetCharacterNameAction 
    | SetCharacterAgeAction
    | SetCharacterRaceAction
    | SetCharacterClassAction
    | SetCharacterAttributesAction

export function setCharacterName(name: string): SetCharacterNameAction {
    return {
        type: CharacterActionType.SET_NAME,
        name: name
    }
}

export function setCharacterAge(age: number): SetCharacterAgeAction {
    return {
        type: CharacterActionType.SET_AGE,
        age: age
    }
}

export function setCharacterRace(race: Race): SetCharacterRaceAction {
    return {
        type: CharacterActionType.SET_RACE,
        race: race
    }
}

export function setCharacterClass(characterClass: CharacterClass): SetCharacterClassAction {
    return {
        type: CharacterActionType.SET_CLASS,
        characterClass: characterClass
    }
}

export function setCharacterAttributes(attributes: Attributes): SetCharacterAttributesAction {
    return {
        type: CharacterActionType.SET_ATTRIBUTES,
        attributes: attributes
    }
}