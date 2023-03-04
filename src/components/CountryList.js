import React from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
class CountryList extends React.Component{
    state = {
        countries: []
    }
    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(rsp => {
                this.setState({
                    countries:rsp.data.slice(0,20)
                })
                console.log(rsp.data)
            });
    }

    searchHandler =(e) =>{
        //console.log(e.target.value)
        axios.get('https://restcountries.com/v3.1/name/'+ e.target.value)
            .then(res =>{
                console.log(res.data)
                this.setState({
                    countries: res.data
                })
            })
    }

    render(){
        const countryList = this.state.countries.map(ct =>{
            return (
                <CountryCard country={ct} key={ct.name.official}/>
            )
        })
        return(
            <div className="container">
                <input type="text" name='search' className="form-control mb-3" onChange={this.searchHandler} placeholder="Enter country name"></input>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {countryList}
                </div>
            </div>

        )

    }
}

export default CountryList;