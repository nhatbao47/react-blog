import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import { getBlogs } from '../../actions';

function PostContent() {
    const {blog} = useSelector((state) => {
        return {
            blog: state.blog
        }
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogs)
    }, [dispatch]);

    const params = useParams();
    const postId = Number(params.id);
    const data = blog.data.length > 0 && _.find(blog.data, p => p.id === postId);
    return (
        <>
            <h1 className="mt-4">{data.title}</h1>
            <p className="lead">by <a href="#">{data.author}</a></p>
            <hr />
            <p>Posted on {data.createAt}</p>
            <hr />
            <img className="img-fluid rounded mx-auto d-block" src={data.image} alt={data.title} />
            <hr />
            <p className="lead">{data.description}</p>
            <hr />
            <div className="card my-4">
                <h5 className="card-header">Leave a Comment:</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <textarea className="form-control" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PostContent;