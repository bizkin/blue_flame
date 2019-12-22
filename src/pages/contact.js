import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export class contact extends Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <h1>contact</h1>
                <Link to="/">
                    <h5>back</h5>
                </Link>
            </Layout>
        )
    }
}

export default contact
