import React from "react";
import Data from "../Data";
import {Link} from "react-router-dom";

class CountryList extends React.Component{
    render(){
        const countryList = Data.map((ct, i) =>{
            let languageObject = Object.keys(ct.languages)[0];
            return (
                <div className="card mb-1" key={ct.name.official}>
                    <div className="card-body">
                        <Link to = {'/' + ct.name.official}>
                            <h5 className={"card-title"} >{i +'-'+ ct.name.official}</h5>
                        </Link>
                        <p>{ct.name.nativeName[languageObject].common}</p>
                    </div>
                </div>
            )
        })
        return(
            <div className="col-4">
                {countryList}
            </div>
        )

    }
}

export default CountryList;