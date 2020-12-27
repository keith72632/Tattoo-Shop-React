import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listAllImagesAction } from '../actions/imagesActions'
import ImageCard from '../components/ImageCard'
import Header from '../components/Header'

const GalleryScreen = () => {

    const dispatch = useDispatch();

    const listImages = useSelector(state => state.listImages)
    const { loading, error, images } = listImages
    console.log(images)
    useEffect(() => {
        dispatch(listAllImagesAction())
    }, [dispatch])
    return (
        <>
            <Header/>
            <Row>
            {loading ? <h2>Loading...</h2> : images.map(image => (
                    <Col key={image._id}sm={12} md={6} lg={4} xl={3}>
                        <ImageCard image={image.image} />
                    </Col>
               ))}
            </Row>
        </>
    )
}

export default GalleryScreen
       