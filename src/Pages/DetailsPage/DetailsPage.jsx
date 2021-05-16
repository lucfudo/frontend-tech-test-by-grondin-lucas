import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {apiGet} from "../../_services/api.service";
import {CharactersModel, ComicsModel} from "../../_models";
import {DetailsContent} from "../../_components";

export function DetailsPage(){
    let [character, characterSet] = useState(CharactersModel);
    let [comics, comicsSet] = useState(ComicsModel);
    const {id}  = useParams();

    useEffect( () => {
        function getData() {
            apiGet(`/characters/${id}`)
                .then((res) => {
                    characterSet(res.data.data.results[0])
                })
            apiGet(`/characters/${id}/comics`)
                .then((res) => {
                    comicsSet(res.data.data.results)
                })
        }

        getData();
    }, [id])

    return(
        <div className="Page-container">
            {(typeof character.name != "undefined") ? (
                <DetailsContent character={character} comics={comics}/>
            ) : ('')}
        </div>
    )
}
