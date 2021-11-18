import React, { Component } from 'react'

import Jumbotron from '../Jumbotron'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Jumbotron />
            </div>
        )
    }
}
