import React from "react";

function MoreCharacters(props) {
    function showMore(){
        props.showMoreSet(true)
    }
    return(
        (props.characters.length > 4) ? (
            <div className={"moreCharacter"}>
                <button  onClick={showMore}>See more results</button>
            </div>
        ) : ('')
    )
}

export default MoreCharacters;
