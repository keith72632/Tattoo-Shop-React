import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_RESET
} from '../constants/userConstants'

export const userLoginReducer = (state = { user: []}, action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return { loading: true}
        case USER_LOGIN_SUCCESS:
            return { loading: false, success: true, user: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, success: false, error: action.payload}
        case USER_LOGIN_RESET:
            return { user: [] }
        default:
            return state
    }
}