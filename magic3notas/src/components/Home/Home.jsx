import React, { Component } from 'react'
import CardMark from '../CardMark/CardMark'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="title is-1 has-text-centered">Magic-3 </h1>
                <h2 className="subtitle is-3 has-text-centered">Rule of 3 for My favourite Teacher ❤️</h2>
                <CardMark></CardMark>
            </div>
        )
    }
}
