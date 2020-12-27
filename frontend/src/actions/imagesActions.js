import axios from 'axios'

import {
    LIST_IMAGES_FAIL,
    LIST_IMAGES_REQUEST,
    LIST_IMAGES_SUCCESS
} from '../constants/imageConstants'

export const listAllImagesAction = () => async(dispatch) => {
    try{
        dispatch({ type: LIST_IMAGES_REQUEST})
        const { data } = await axios.get('/api/photos/')

        dispatch({ 
            type: LIST_IMAGES_SUCCESS, 
            payload: data
        })
    } catch(error) {
        dispatch({
             type: LIST_IMAGES_FAIL,
             payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
    }
}