import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Seller from "./components/seller/Seller";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./ScrollToTop";
import Staffs from "./staff/Staffs";
import ContactDetails from "./staff/contactDetails/ContactDetails";
import SellerDetails from "./staff/sellerDetails/SellerDetails";
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/seller' component={Seller} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/staff' component={Staffs} />
      <Route exact path='/contactdetails' component={ContactDetails} />
      <Route exact path="/sellerdetails" component={SellerDetails}/>

      </Switch>
    </Router>
  
  );
    
}

export default App
