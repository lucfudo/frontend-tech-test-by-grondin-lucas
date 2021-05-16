import React, {useState} from "react";
import ItemOfCharactersList from "./ItemOfCharactersList";
import MoreCharacters from "./MoreCharacters";

export function HomeContent(props){
    let [showMore, showMoreSet] = useState(false);
    return (showMore) ? (
        <div>
            {props.characters.map((character, index) => (
                <div key={index}>
                    <ItemOfCharactersList character={character}/>
                </div>
            ))}
        </div>
    ) : (
        <div>
            {props.characters.slice(0, 4).map((character, index) => (
                <div key={index}>
                    <ItemOfCharactersList character={character}/>
                </div>
            ))}
            <MoreCharacters characters={props.characters} showMoreSet={showMoreSet}/>
        </div>
    )
}
