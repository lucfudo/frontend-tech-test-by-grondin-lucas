import React from 'react';
import {ApiConstants} from "../../../_constants/api.constants";
import {Link} from "react-router-dom";

const ItemOfCharactersList = (props) => (
    <div className="characters-item">
        <div className="characters-item-image">
            <img
                src={
                    props.character.thumbnail.path +
                    ApiConstants.API_IMAGE_VARIANTS +
                    props.character.thumbnail.extension
                }
                alt={props.character.name}
            />
        </div>
        <div className="characters-item-content">
            <h1>
                {props.character.name}
            </h1>
            <p>
                {props.character.description}
            </p>
            <button>
                <Link to={`/details/${props.character.id}`}>
                    See details
                </Link>
            </button>
        </div>
    </div>
);

export default ItemOfCharactersList;
