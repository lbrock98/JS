import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <FontAwesomeIcon icon={faSearch} />
        </components.DropdownIndicator>
    );
};

//styles the searchbar 
const customControlStyles = {
    control: (provided) => ({
        ...provided,
        borderColor: 'black',
        borderWidth: 1.5,
        width: 200,
        minHeight: 5,
        borderRadius: 0
    }),
    placeholder: (provided) => ({
        ...provided,
        marginLeft: 40,
        fontStyle: 'italic'
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        backgroundColor: 'rgba(250, 250, 250)'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: 'black'
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        color: 'white'
    })
}

export default function SearchBar(props) {
    console.log("props", props);

    const [selected, setSelected] = useState("");

    return (
        <div>
            <Select
                components={{ DropdownIndicator }}
                placeholder={"Location..."}
                options={props.options}
                className="SearchBar"
                styles={customControlStyles}
                onChange={(e) => { setSelected(e.value); console.log(e.value) }}
            />
        </div>
    )
}