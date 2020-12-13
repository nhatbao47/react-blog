import { Route, Switch } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
import SidebarWidgets from './partials/SidebarWidgets';
import Homepage from './screens/Homepage';
import Blogs from './screens/Blogs';
import ContactUs from './screens/ContactUs';
import AboutUs from './screens/AboutUs';
import PostContent from './components/PostContent';
import NotFound from './screens/NotFound';
import Category from './screens/Category';

function App() {
  return (
    <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/blog" component={Blogs} />
                <Route path="/blog/:id" component={PostContent}/>
                <Route path="/category/:id/:name" component={Category}/>
                <Route path="*" component={NotFound}/>
              </Switch>
            </div>
            <SidebarWidgets />
          </div>
        </div>
      <Footer />
    </>
  );
}

export default App;
