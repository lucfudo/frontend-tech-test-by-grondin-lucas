import React from "react";
import {ApiConstants} from "../../../_constants/api.constants";

function RightContent(props){
    return(
        <div className="details-right-container">
            <div className="details-character-image">
                <img
                    src={
                        props.character.thumbnail.path +
                        ApiConstants.API_IMAGE_VARIANTS +
                        props.character.thumbnail.extension}
                    alt={props.character.name}
                />
            </div>
            <div className="details-comics-container">
                <h2>
                    Latest comics
                </h2>
                {(typeof props.comics[0].dates[0].date != "undefined") ? (
                    <div className="details-comics-content">
                        {props.comics.slice(0, 4).map((comic, index) => (
                            <ul key={index}>
                                <li className="comics-title">
                                    <strong>{comic.title}</strong>
                                </li>
                                <li>
                                    On sale: {comic.dates[0].date.slice(0, 10)}
                                </li>
                                <li>
                                    Price: ${comic.prices[0].price}
                                </li>
                            </ul>
                        ))}
                    </div>
                ) : ('')}
            </div>
        </div>
    )
}
export default RightContent;
