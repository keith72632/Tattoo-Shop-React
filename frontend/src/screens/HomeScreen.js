import React from 'react'
import { Image, Container } from 'react-bootstrap'
import Header from '../components/Header'

const HomeScreen = () => {
    return (
        <>
            <Header />
            <Container>
                <Image src={'/background_images/tattoo_shop.jpg'} fluid/>
            </Container>
        </>
    )
}

export default HomeScreen
