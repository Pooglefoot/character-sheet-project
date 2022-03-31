import React from "react";
import { CharacterClass, characterClassesAsOptions } from "../lib/character";
import DropDown from "./DropDown";

interface ClassSelectProps {
    onChange: (value: CharacterClass) => void;
}

export default function ClassSelect(props: ClassSelectProps) {

    return (
        <DropDown onChange={(value) => props.onChange(value as CharacterClass)}
            label="Select your class" options={characterClassesAsOptions()}/>
    )
}