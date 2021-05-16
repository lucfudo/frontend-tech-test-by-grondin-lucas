import React from "react";
import {Link} from "react-router-dom";
import {ApiConstants} from "../../../_constants/api.constants";

function LeftContent(props){
    return(
        <div className="details-left-container">
            <Link to={'/'}>
                Back to results
            </Link>
            <div className="details-character">
                <h1>{props.character.name}</h1>
                <p>{props.character.description}</p>
            </div>
            {(typeof props.comics[0].thumbnail.path != "undefined") ? (
                <div className="details-comics">
                    {props.comics.slice(0, 4).map((comic, index) => (
                        <div className="details-comics-image" key={index}>
                            <img
                                src={
                                    comic.thumbnail.path +
                                    ApiConstants.API_IMAGE_VARIANTS +
                                    comic.thumbnail.extension
                                }
                                alt={comic.title}
                            />
                        </div>
                    ))}
                </div>
            ) : ('')}
            <br/>
            <a href={props.character.urls[0].url}>Discover {props.character.name}</a>
        </div>
    )
}
export default LeftContent;
