import React from "react";
import {useParams} from "react-router-dom";

const Country =(props)=>{
    const { name } = useParams()
    console.log(name);
    return(
        <h3>Country Name: {name}</h3>
    )
}

export default Country;