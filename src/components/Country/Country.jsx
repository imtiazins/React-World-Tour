import './Country.css'
const Country = ({country}) => {
    console.log(country);
    
    return (
        <div className='country' >
          <h3>Name:{country?.name?.common} </h3>
          <img src={country?.flags?.png} alt="" />
          <p>Population:{country?.population}</p>
          <p>Area: {country?.area}</p>
        </div>
    );
};

export default Country;