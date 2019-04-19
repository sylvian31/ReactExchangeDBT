import React, { Component } from 'react'
import { connect } from 'react-redux';
import RateExchangeItem from '../components/rateExchangeItem';

class RateExchangeList extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Pays</th>
                        <th className="col-md-6">Valeur de la monnaie par rapport au $</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.rates.map((rate, index) => {
                           return <RateExchangeItem key={rate.code + index} rateExchange={rate} />
                        })
                    }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rates: state.ratesReducer.rates
    }
}

export default connect(mapStateToProps, undefined)(RateExchangeList);