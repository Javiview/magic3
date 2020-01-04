import React, { Component } from 'react'
import CardMark from '../CardMark/CardMark'

export default class Home extends Component {
    render() {
        return (
            <div>
                Notas:
                <CardMark></CardMark>
            </div>
        )
    }
}
