import React from "react";

interface DropDownProps<T> {
    label: string;
    options: { value: T; label: string; }[];
    default?: T;
    onChange: (value: T) => void;
}

export default function DropDown(props: DropDownProps<number | string>) {
    const onValueChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        props.onChange(event.target.value);
    } 

    return (
        <div>
            <label>
                {props.label + ": "}
                <select
                    onChange={onValueChanged}
                    defaultValue={props.default}>
                    
                    {props.options.map((o, i) =>
                        <option key={i} value={o.value}>{o.label}</option>)}
                </select>
            </label>
        </div>
    )
}