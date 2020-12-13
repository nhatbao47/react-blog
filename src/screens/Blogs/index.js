import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getBlogs} from '../../actions';
import Post from '../../components/Post';

function Blogs() {
    const { blog } = useSelector(state => {
        return {
            blog: state.blog
        }
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    const listItems = blog.data.length > 0 && blog.data.map((item, index) => {
        return <Post key={index} item={item} />
    });

    return (
        <>
            <h1 className="my-4">All blogs</h1>
            {listItems}
        </>
    );
}

export default Blogs;