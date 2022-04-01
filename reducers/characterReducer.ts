import { CharacterAction, CharacterActionType } from "../actions/characterActions";
import { changeCharacterAge, changeCharacterClass, changeCharacterName, changeCharacterRace, changeCharacterAttributes, Character } from "../lib/character";

export default function characterReducer(state: Character, action: CharacterAction) {
    switch (action.type) {
        case CharacterActionType.SET_NAME: {
            return changeCharacterName(state, action.name)
        }

        case CharacterActionType.SET_AGE: {
            return changeCharacterAge(state, action.age)
        }

        case CharacterActionType.SET_RACE: {
            return changeCharacterRace(state, action.race)
        }

        case CharacterActionType.SET_CLASS: {
            return changeCharacterClass(state, action.characterClass)
        }

        case CharacterActionType.SET_ATTRIBUTES: {
            return changeCharacterAttributes(state, action.attributes)
        }
    }
    
    return state;
}