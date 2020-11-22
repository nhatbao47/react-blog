import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
import ContactUs from './screens/ContactUs';
import AboutUs from './screens/AboutUs';
import Homepage from './screens/Homepage';
import Blog from './screens/Blog/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/contact-us" component={ContactUs}/>
            <Route exact path="/about-us" component={AboutUs}/>
            <Route exact path="/blog" component={Blog}/>
          </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
