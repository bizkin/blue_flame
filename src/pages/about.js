import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export class about extends Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <h1>About</h1>
                <Link to="/">
                    <h5>back</h5>
                </Link>
            </Layout>
        )
    }
}

export default about
