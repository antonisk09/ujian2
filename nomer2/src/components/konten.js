import React from 'react';

const konten = props =>
    <div className="konten-container">
        <h4 className="card text-white bg-primary">{`${props.strPlayer} (${props.strPosition})`}</h4>
        <div>
            <img src={props.strThumb} alt={props.strPlayer}/>
            <p>{props.strDescriptionEN}</p>
        </div>
    </div>

export default konten;