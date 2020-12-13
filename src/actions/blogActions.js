import axios from 'axios';
import {
    REQUEST_START,
    REQUEST_BLOG_FINISHED,
    REQUEST_FAILED
} from '../constant';

const client = axios.create({
    baseURL: 'http://localhost:3000'
});

const requestBlogAction = () => {
    return {
        type: REQUEST_START
    };
};

const requestSuccessAction = (data) => {
    return {
        type: REQUEST_BLOG_FINISHED,
        payload: data
    };
};

const requestFailedAction = () => {
    return {
        type: REQUEST_FAILED,
        message: 'Loading data error!'
    };
};

export const getBlogs = () => {
    return async (dispatch) => {
        try {
            dispatch(requestBlogAction());
            const postData = await client.get('/mockdata/blog.json');
            dispatch(requestSuccessAction(postData.data));
        } catch (error) {
            dispatch(requestFailedAction());
        }
    }
};