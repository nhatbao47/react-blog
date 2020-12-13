import axios from 'axios';
import {
    REQUEST_START,
    REQUEST_CATEGORY_FINISHED,
    REQUEST_FAILED
} from '../constant';

const client = axios.create({
    baseURL: 'http://localhost:3000'
});

const requestStartAction = () => {
    return {
        type: REQUEST_START
    };
};

const requestSuccessAction = (data) => {
    return {
        type: REQUEST_CATEGORY_FINISHED,
        payload: data
    };
};

const requestFailedAction = () => {
    return {
        type: REQUEST_FAILED,
        message: 'Loading data error!'
    }
};

export const getCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(requestStartAction());
            const postData = await client.get('/mockdata/category.json');
            dispatch(requestSuccessAction(postData.data));
        } catch (error) {
            dispatch(requestFailedAction());
        }
    };
};