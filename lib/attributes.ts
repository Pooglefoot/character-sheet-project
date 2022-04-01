/*
    Attributes are central to the sheet and have no dependencies.
    "Character" uses attributes, "skills" use attributes, "saves" use attributes, etc.
*/

export enum AttributeType {
    STRENGTH = "strength",
    DEXTERITY = "dexterity",
    CONSTITUTION = "constitution",
    INTELLIGENCE = "intelligence",
    WISDOM = "wisdom",
    CHARISMA = "charisma"
}

export type Attributes = Readonly<Record<AttributeType, number>>

export function setAttribute(attributes: Attributes, attribute: AttributeType, value: number): Attributes {
    return {
            ...attributes,
            [attribute]: value,
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