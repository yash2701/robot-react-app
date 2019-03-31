import React from 'react';

const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
            <img alt='robot' src={`https://robohash.org/${id}?50×50`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;