import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export function DetailsContent(props){
    return(
        <div>
            <LeftContent character={props.character} comics={props.comics}/>
            <RightContent character={props.character} comics={props.comics}/>
        </div>
    )
}
