import React from 'react';

const Country = (props) => {
    
    const {name, region, flag,capital, population} = props.country;
    const style={
        border: '1px solid crimson',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        width: '700px',
        height: '450px'

    }
    const flagStyle={
        width: '100px'
    }
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={style}>
            <h3>This is Country : {name}</h3>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Capital : {capital}</p>
            <p><small>Region : {region}</small></p>
            <p><small>Population : {population}</small></p>
            <button onClick={ () => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;