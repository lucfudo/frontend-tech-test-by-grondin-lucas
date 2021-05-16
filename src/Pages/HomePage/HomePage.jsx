import React, {useEffect, useState} from "react";

import {apiGet} from "../../_services/api.service";
import {CharactersModel} from '../../_models'
import {HomeContent} from "../../_components";
export function HomePage(props) {
    let [characters, charactersSet] = useState(CharactersModel);

    useEffect( () => {
        apiGet('/characters')
            .then((res) => {
                charactersSet(res.data.data.results)
            })
    }, [])

    if(props.input.length > 0){
        characters = characters.filter((index) => {
            return index.name.match(props.input)
        })
    }

    return(
        <div className="Page-container">
            {(props.input !== '' ) ? (
                <HomeContent characters={characters}/>
            ) :
                ('')
            }
        </div>
    )
}
