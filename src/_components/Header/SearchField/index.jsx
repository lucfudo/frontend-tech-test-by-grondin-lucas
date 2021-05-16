import React from 'react';
import {useHistory} from "react-router-dom";
import magnifier from "../../../_assets/icon-magnifier.svg";

function SearchField(props){
    const history = useHistory()

    const handleChange = (e) => {
        e.preventDefault();
        props.inputSet(e.target.value)
    }

    const onClick = (event) => {
        if(event.key === 'Enter'){
            history.push({
                pathname: '/',
                state: {input: props.input}
            })
        }
    }

    return(
        <div className="SearchBar-container">
            <img src={magnifier} alt="magnifier.svg"/>
            <input
                type="text"
                placeholder="Character"
                value={props.input}
                onChange={handleChange}
                onKeyPress={onClick}
                maxLength={10}
            />
        </div>
    )
}

export default SearchField;
