function Homepage() {
    return (
        <div className="wrapper row2">
            <section className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading">Velit id imperdiet</h6>
                    <p>Augue sapien et sapien nunc urna duis eget libero non.</p>
                </div>
                <ul className="nospace group services">
                    <li className="one_quarter first">
                        <article><a href="/#"><i className="fa fa-3x fa-500px"></i></a>
                            <h6 className="heading font-x1"><a href="/#">Lobortis</a></h6>
                            <p>Blandit velit ut sem commodo justo quis erat donec nec est ut sodales</p>
                        </article>
                    </li>
                    <li className="one_quarter">
                        <article><a href="/#"><i className="fa fa-3x fa-lastfm"></i></a>
                            <h6 className="heading font-x1"><a href="/#">Suscipit</a></h6>
                            <p>Sem scelerisque sem fusce sed ligula id sem suscipit mollis quisque</p>
                        </article>
                    </li>
                    <li className="one_quarter">
                        <article><a href="/#"><i className="fa fa-3x fa-puzzle-piece"></i></a>
                            <h6 className="heading font-x1"><a href="/#">Vivamus</a></h6>
                            <p>Est enim lacinia lobortis viverra interdum quam sed pharetra</p>
                        </article>
                    </li>
                    <li className="one_quarter">
                        <article><a href="/#"><i className="fa fa-3x fa-ravelry"></i></a>
                            <h6 className="heading font-x1"><a href="/#">Facilisis</a></h6>
                            <p>Faucibus dui praesent at velit morbi ullamcorper lacus at urna maecenas</p>
                        </article>
                    </li>
                </ul>
                <div className="clear"></div>
            </section>
        </div>
    );
}

export default Homepage;