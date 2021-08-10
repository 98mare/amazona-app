import Product from './components/Product';
import {BrowserRouter, Route} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-conatiner">
    <header className="row">
      <div className="">
        <a className="brnad" href="index.html">amazona</a>
      </div>
      <div className="">
        <a href="cart.html">Cart</a>
        <a href="singin.html">Sign-in</a>
      </div>
    </header>
    <main>
      <Route path='/product/:id' component={ProductScreen}></Route>
      <Route path='/' component={HomeScreen} exact></Route>
      
    </main>
    <footer className="row center">
      All rights reserved
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
