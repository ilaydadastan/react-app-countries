import React from "react";
import Data from "../Data";

class CountryList extends React.Component{
    render(){
        const countryList = Data.map((ct, i) =>{
            return(
                <div className="card mb-1">
                    <div className="card-body">
                        <h5 className={"card-title"} key={ct.name.official} >{i +'-'+ ct.name.official}</h5>
                        <p>{ct.name.nativeName.spa.common}</p>
                    </div>
                </div>
            )
        })
        return(
            <div className="card-columns">
                {countryList}
            </div>
        )

    }
}

export default CountryList;