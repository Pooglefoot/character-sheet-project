import React from "react";
import { Race, characterRacesAsOptions } from "../lib/character";
import DropDown from "./DropDown";

interface RaceSelectProps {
    onChange: (value: Race) => void;
}

export default function RaceSelect(props: RaceSelectProps) {

    return (
        <DropDown onChange={(value) => props.onChange(value as Race)}
            label="Select your race" options={characterRacesAsOptions()}/>
    )
}