import React, { Component } from 'react'
import api from '../../Services/api'

import FreteInput from '../../Components/Frete/FreteInput'
import FreteDetail from '../../Components/Frete/FreteDetail'

class Main extends Component {
    state = {
        Frete: null,
        Entradas: null
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = async (body) => {
        let header = {
            "content-type": "application/json"
        }

        const response = await api.post("/frete", body, header)
        return response.data
    }

    setData = async (data) => {
        let state = this.state
        state.Entradas = data
        state.Frete = await this.loadData(data)
        this.setState(state)
    }

    render() {
        return (
            <>
                <FreteInput
                    data={(data) => this.setData(data)}
                />
                {this.state.Frete !== null &&
                    <FreteDetail
                        dados={this.state.Frete}
                    />
                }
            </>
        )
    }
}

export default Main