export interface Character {
    name: string;
    age: number;
    race: Race;
    characterClass: CharacterClass;
    attributes: Attributes;
}

export enum AttributeType {
    STRENGTH = "strength",
    DEXTERITY = "dexterity",
    CONSTITUTION = "constitution",
    INTELLIGENCE = "intelligence",
    WISDOM = "wisdom",
    CHARISMA = "charisma"
}

export type Attributes = Readonly<Record<AttributeType, number>>

export enum Race {
    HUMAN = "HUMAN",
    ELF = "ELF",
    DWARF = "DWARF",
    GNOME = "GNOME",
    HALFLING = "HALFLING",
    HALF_ELF = "HALF_ELF",
    HALF_ORC = "HALF_ORC",
    TIEFLING = "TIEFLING",
    DRAGONBORN = "DRAGONBORN"
}

export enum CharacterClass {
    ARTIFICER = "ARTIFICER",
    BARBARIAN = "BARBARIAN",
    DRUID = "DRUID",
    WIZARD = "WIZARD"
}

export function createCharacter(name: string = "Conan", age: number = 15): Character {

    return {
        name: name,
        age: age,
        race: Race.HUMAN,
        characterClass: CharacterClass.BARBARIAN,
        attributes: {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10,
        }
    }
}

export function changeCharacterAge(character: Character, newAge: number): Character {

    return {
        ...character,
        age: newAge
    }
}

export function changeCharacterName(character: Character, newName: string): Character {
    return {
        ...character,
        name: newName
    }
}

export function changeCharacterRace(character: Character, newRace: Race): Character {
    return {
        ...character,
        race: newRace
    }
}

export function characterRaceToString(race: Race) {
    switch (race) {
        case Race.HUMAN:
            return "Human"
        case Race.ELF:
            return "Elf"
        case Race.DWARF:
            return "Dwarf"
        case Race.GNOME:
            return "Gnome"
        case Race.HALFLING:
            return "Halfling"
        case Race.HALF_ELF:
            return "Half-Elf"
        case Race.HALF_ORC:
            return "Half-Orc"
        case Race.TIEFLING:
            return "Tiefling"
        case Race.DRAGONBORN:
            return "Dragonborn"
    }
}

export function CharacterRacesToArray() {
    return [
        Race.HUMAN,
        Race.ELF,
        Race.DWARF,
        Race.GNOME,
        Race.HALFLING,
        Race.HALF_ELF,
        Race.HALF_ORC,
        Race.TIEFLING,
        Race.DRAGONBORN
    ]
}

export function characterRacesAsOptions() {
    return CharacterRacesToArray().map(
        (r) => ({ value: r, label: characterRaceToString(r) })
    )
}

export function changeCharacterClass(character: Character, newClass: CharacterClass): Character {
    return {
        ...character,
        characterClass: newClass
    }
}

export function characterClassToString(characterClass: CharacterClass) {
    switch (characterClass) {
        case CharacterClass.ARTIFICER:
            return "Artificer"
        case CharacterClass.BARBARIAN:
            return "Barbarian"
        case CharacterClass.DRUID:
            return "Druid"
        case CharacterClass.WIZARD:
            return "Wizard"
    }
}

export function characterClassesToArray() {
    return [
        CharacterClass.ARTIFICER,
        CharacterClass.BARBARIAN,
        CharacterClass.DRUID,
        CharacterClass.WIZARD
    ]
}

export function characterClassesAsOptions() {
    return characterClassesToArray().map(
        (c) => ({ value: c, label: characterClassToString(c) })
    );
}

export function setAttribute(attributes: Attributes, attribute: AttributeType, value: number): Attributes {
    return {
            ...attributes,
            [attribute]: value,
    }
}

export function changeCharacterAttributes(character: Character, attributes: Attributes): Character {

    return {
        ...character,
        attributes: attributes
    }
}

export function characterAttributesToArray() {
    return [
        AttributeType.STRENGTH,
        AttributeType.DEXTERITY,
        AttributeType.CONSTITUTION,
        AttributeType.INTELLIGENCE,
        AttributeType.WISDOM,
        AttributeType.CHARISMA,
    ]
}