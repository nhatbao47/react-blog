function SearchWidget() {
    return (
        <div className="card my-4">
            <h5 className="card-header">Search</h5>
            <div className="card-body">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-append">
                        <button className="btn btn-secondary" type="button">Go!</button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SearchWidget;