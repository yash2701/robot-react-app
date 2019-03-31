import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '10px solid black', height: '435px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;