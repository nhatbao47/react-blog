import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getBlogs} from '../../actions/';
import Post from '../../components/Post';

function Category() {
    const {blog} = useSelector((state) => {
        return {
            blog: state.blog
        };
    });

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);


    const params = useParams();
    const id = Number(params.id);
    const name = String(params.name);
    const listItems = blog.data.length > 0 && blog.data.map((item, index) => {
        if (item.category === id) {
            return <Post key={index} item={item} />
        } else {
            return '';
        }
    });

    return (
        <>
            <h1 className="my-4">All blogs of {name}</h1>
            {listItems}
        </>
    );
}

export default Category;