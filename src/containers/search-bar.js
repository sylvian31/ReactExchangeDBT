import React, { Component } from 'react'
import { fetchCountries } from '../actions/index';
import { fetchRateExchange } from '../actions/index';
import { connect } from 'react-redux';
const lodash = require("lodash"); //ES5

class SearchBar extends Component {

    componentWillMount() {
        this.props.fetchCountries();
    }

    renderSelectCountries() {
        return (
            <select
                onChange={e => this.onChangeCountry(e)}
                className="form-control search-bar">
                {this.props.countries.map(countrie => (
                    <option key={countrie.code} value={countrie.code}>
                        {countrie.name}
                    </option>
                ))}
            </select>
        )
    }

    onChangeCountry = (event) => {
        const countryCode = event.target.value;
        const country = lodash.find(this.props.countries, { code: countryCode });
        this.props.fetchRateExchange(country);
    }

    render() {
        return (
            <form className="form-group">
                {this.renderSelectCountries()}
            </form>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        countries: store.countriesReducer.countries
    }
}

const mapDispatchToProps = {
    fetchCountries,
    fetchRateExchange
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
