import React from 'react'
import { Card  } from 'react-bootstrap'

const ImageCard = ({ image }) => {
    return (
                <Card lassName='my-3 p-3 rounded' >
                    <Card.Img src={image} />
                </Card>
    )
}

export default ImageCard
