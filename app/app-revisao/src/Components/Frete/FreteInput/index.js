import React, { Component } from 'react'

export default class FreteInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comprimento: null,
            largura: null,
            altura: null,
            valorMercadoria: null
        }
    }
    setProps = async (param) => {
        this.props.data(param)
    }

    setDataOnState = async (data, state) => {
        this.setState({ [state]: data })
    }

    dataValidation = async (param) => {
        let { comprimento, altura, largura, valorMercadoria } = param
        if (comprimento === null || altura === null || largura === null || valorMercadoria === null) {
            alert("Não foram informado todas as entradas")
            return
        }
        let cubTotal = comprimento + largura + altura
        if (cubTotal > 200) {
            alert("A cubagem da embalagem deve ser menor que 200 cm³")
            return
        }

        this.setProps(this.state)
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                <>
                    <input
                        placeholder='Comprimento (cm)'
                        type='number'
                        onKeyUp={(e) => this.setDataOnState(parseFloat(e.target.value), 'comprimento')}
                    />
                    <input
                        placeholder='Largura (cm)'
                        type='number'
                        onKeyUp={(e) => this.setDataOnState(parseFloat(e.target.value), 'largura')}
                    />
                    <input
                        placeholder='Altura (cm)'
                        type='number'
                        onKeyUp={(e) => this.setDataOnState(parseFloat(e.target.value), 'altura')}
                    />
                    <input
                        placeholder='Valor (R$)'
                        type='number'
                        onKeyUp={(e) => this.setDataOnState(parseFloat(e.target.value), 'valorMercadoria')}
                    />
                </>
                <button
                    onClick={() => this.dataValidation(this.state)}
                >
                    Calcular
                </button>
            </div>
        );
    }
}