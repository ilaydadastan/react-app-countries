import React from "react";
import {Link} from "react-router-dom";

const CountryCard =({country}) =>{
        return(
            <div className="card mb-1" >
                <div className="card-body">
                    <Link to = {'/' + country.name.official}>
                        <h5 className={"card-title"} >{country.name.common}</h5>
                    </Link>
                    <p>{country.name.official}</p>
                </div>

            </div>
        )
}
export default CountryCard;