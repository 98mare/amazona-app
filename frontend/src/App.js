import Product from './components/Product';
import data from './data';

function App() {
  return (
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
      <div className="row center">
      {
        data.products.map((product) =>(
          
          <Product key={product._id} product={product}/>
        ))
      }
        
      </div>
    </main>
    <footer className="row center">
      All rights reserved
    </footer>
  </div>
  );
}

export default App;
