import React, { Component } from 'react'
import { Link } from "gatsby"
import './layout.css'

export class nav extends Component {
    render() {
        return (
            <div className="nav">
                <Link to="/about">אודות</Link>
                <Link to="/contact">צור קשר</Link>
            </div>
        )
    }
}

export default nav
