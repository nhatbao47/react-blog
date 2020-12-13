import {Link} from 'react-router-dom';

function Post(props) {
    const {item} = props;

    return (
        <div className="card mb-4">
            <img className="card-img-top" src={item.image} alt={item.title} />
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-text">{item.description}</p>
                <Link className="btn btn-primary" to={`/blog/${item.id}`}>Read More &rarr;</Link>
            </div>
            <div className="card-footer text-muted">
                Posted on {item.createAt} by&nbsp;
            <a href="#">{item.author}</a>
            </div>
        </div>
    );
}

export default Post;