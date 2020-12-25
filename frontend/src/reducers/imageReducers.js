
import { 
    LIST_IMAGES_FAIL,
    LIST_IMAGES_REQUEST,
    LIST_IMAGES_SUCCESS
} from '../constants/imageConstants'

export const listImagesReducer = (state = { images: [] }, action ) => {
    switch(action.type){
        case LIST_IMAGES_REQUEST:
            return { loading: true, images: []}
        case LIST_IMAGES_SUCCESS:
            return { loading: false, images: action.payload}
        case LIST_IMAGES_FAIL:
            return { loading: false, error: action.payload}
        default:
            return {...state}
    }
}