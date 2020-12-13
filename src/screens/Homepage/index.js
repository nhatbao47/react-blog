import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getBlogs} from '../../actions/blogActions';
import Post from '../../components/Post';

function Homepage() {
  const {blog} = useSelector((state) => {
    return {
      blog: state.blog
    }
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch]);

  const firstItem = blog.data.length > 0 && blog.data[0];
    return (
      <>
      <h1 className="my-4">First new post</h1>
      <Post index={0} item={firstItem}/>
      </>
    );
}

export default Homepage;