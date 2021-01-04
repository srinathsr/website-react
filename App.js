
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
        <Switch>
          <Route path = '/' exact component={Home}/>
          <Route path = '/services'  component={Services}/>
          <Route path = '/products'  component={Products}/>
          <Route path = '/sign-up'  component={SignUp}/>
        </Switch>
        <Footer />
          </Router>
          </div>
  );
}

export default App;
