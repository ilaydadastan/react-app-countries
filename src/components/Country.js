import React from "react";
import withRouter from "./WithRouter";
import axios from "axios";

class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: {}
        }
    }

    componentDidMount() {
        let {name} = this.props.params;
        console.log(name);
        axios.get('https://restcountries.com/v3.1/name/' + name + '?fullText=true')
            .then(rsp => {
                this.setState({
                    country: rsp.data[0]
                })
            })
    }

    render() {
        if (this.state.country.name) {
            const {country} = this.state;
            return (
              <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                      <div className="card">
                          <div>
                              <h3>Country Name: {country.name.common}</h3>
                              <span>{country.name.official} </span>
                          </div>
                          <div className="card-body">
                              <dl className="row">
                                  <dt className="col-sm-4"> Capital:</dt>
                                  <dd className="col-sm-8">{country.capital}</dd>

                                  <dt className="col-sm-4"> Population:</dt>
                                  <dd className="col-sm-8">{country.population}</dd>

                                  <dt className="col-sm-4"> Area:</dt>
                                  <dd className="col-sm-8">{country.area} km</dd>
                              </dl>
                          </div>
                      </div>
                      <div className="card-h-100">
                          <img src={country.flags.png} className="card-img-top" alt=""/>
                      </div>
                  </div>
              </div>
            )
        }
    }

}

export default withRouter(Country);
