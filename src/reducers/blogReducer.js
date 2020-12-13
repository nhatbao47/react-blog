import {
    REQUEST_START,
    REQUEST_FAILED,
    REQUEST_BLOG_FINISHED
} from '../constant';

const initialState = {
    loading: false,
    data: [],
    message: null
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_START:
            return {
                ...state,
                loading: true,
                message: null
            }
        case REQUEST_BLOG_FINISHED:
            return {
                ...state,
                loading: false,
                data: action.payload,
                message: null
            }
        case REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                message: action.message
            }
        default:
            return {
                ...state
            }
    }
};

export default blogReducer;