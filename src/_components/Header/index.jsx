import React from 'react';
import SearchField from './SearchField';
import logo from "../../_assets/logo.png";

export const Header = (props) => (
    <header className="AppBar-container">
        <img src={logo} alt="logo.png"/>
        <SearchField input={props.input} inputSet={props.inputSet}/>
    </header>
);

