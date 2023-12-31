import { useState } from 'react';
import './Country.css'
const Country = ({country, handelVisitedCountry}) => {
    console.log(country);

    const[visited, setVisited]=useState(false);
    const handleVisited=()=>{
      setVisited(!visited);
    }

    // console.log(handelVisitedCountry);
    return (
        <div className={`country ${visited ?'visited' : 'non-visited'}`} >
          <h3 style={{color:visited? 'red': 'white'}}>Name:{country?.name?.common} </h3>
          <img src={country?.flags?.png} alt="" />
          <p>Population:{country?.population}</p>
          <p>Area: {country?.area}</p>
          <p><small>Code : {country?.cca3}</small></p>
          <button onClick={()=> handelVisitedCountry(country)}>Mark Visited</button><br />
          <button onClick={handleVisited}>{visited? 'visited':
          'going'}</button>
          {visited ? 'I have visited this country': 'I wanna go there '}
        </div>
    );
};

export default Country;