import React from 'react';

function ChangeableContentDiv(props){
    if(props.imgSrc !== ''){
        return(
            <div>
                <img src={props.imgSrc} alt="Character Poster"/>
                <h1>{props.contentId}</h1>
                <p>{props.contentDescription}</p>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>{props.contentId}</h1>
                <p>{props.contentDescription}</p>
            </div>
        )
    }
}

export default ChangeableContentDiv;