import React from 'react';

function ChangeableContentDiv(props){
    if(props.imgSrc !== ''){
        return(
            <div id="character-content-div">
                <div>
                    <h1>{props.contentId}</h1>
                    <p>{props.contentDescription}</p>
                </div>
                <img src={props.imgSrc} alt="Character Poster"/>
            </div>
        )
    }
    else{
        return(
            <div id="main-content">
                <h1>{props.contentId}</h1>
                <h2>{props.contentDescription}</h2>
            </div>
        )
    }
}

export default ChangeableContentDiv;