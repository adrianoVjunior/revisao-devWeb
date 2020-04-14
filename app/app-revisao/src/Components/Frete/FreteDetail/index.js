import React, { Component } from 'react'

export default class FreteDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        let style = {
            container: {
                display: 'flex',
                justifyContent: 'center',
                marginTop: '10px'
            },
            content: {
                display: 'flex',
                flexDirection: 'column'
            }
        }
        return (
            <div style={style.container}>
                {this.props.dados !== null &&
                    <div style={style.content}>
                        <label>{`PAC: R$:${this.props.dados.Valores.PAC}`}</label>
                        <label>{`Sedex: R$:${this.props.dados.Valores.Sedex}`}</label>
                        <label>{`Sedex10: R$:${this.props.dados.Valores.Sedex10}`}</label>
                        <label>{`Sedex12: R$:${this.props.dados.Valores.Sedex12}`}</label>
                        <label>{`Taxa Risco: R$:${this.props.dados.TaxaRisco}`}</label>
                    </div>
                }
            </div>
        )
    }
}