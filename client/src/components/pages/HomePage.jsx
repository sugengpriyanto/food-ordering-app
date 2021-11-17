import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Jumbotron from '../Jumbotron'

export default class HomePage extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Jumbotron />
            </div>
        )
    }
}
