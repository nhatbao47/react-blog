import {
    REQUEST_START,
    REQUEST_CATEGORY_FINISHED,
    REQUEST_FAILED
} from '../constant';

const initialState = {
    loading: false,
    data: [],
    message: null
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_START:
            return {
                ...state,
                loading: true,
                message: null
            }
        case REQUEST_CATEGORY_FINISHED:
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

export default categoryReducer;