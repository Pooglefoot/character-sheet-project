import { AttributeType } from "./attributes";

export enum SkillType {
    ACROBATICS = "acrobatics",
    ANIMAL_HANDLING = "animal handling",
    ARCANA = "arcana",
    ATHLETICS = "athletics",
    DECEPTION = "deception",
    HISTORY = "history",
    INSIGHT = "insight",
    INTIMIDATION = "intimidation",
    INVESTIGATION = "investigation",
    MEDICINE = "medicine",
    NATURE = "nature",
    PERCEPTION = "perception",
    PERFORMANCE = "performance",
    PERSUASION = "persuasion",
    RELIGION = "religion",
    SLEIGHT_OF_HAND = "sleight of hand",
    STEALTH = "stealth",
    SURVIVAL = "survival",
}

// Might want to consider including the AttributeType here.
export type Skills = Readonly<Record<SkillType, boolean>>;

export function setSkillProficiency(skills: Skills, skill: SkillType, proficient: boolean): Skills {
    return {
        ...skills,
        [skill]: proficient
    }
}

