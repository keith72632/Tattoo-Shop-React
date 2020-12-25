import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const HomeScreen = () => {
    return (
        <>
            <Link to={'/gallery'}>Gallery</Link>
        </>
    )
}

export default HomeScreen
