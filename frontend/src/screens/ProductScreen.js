import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data  from '../data'

function ProductScreen(props) {
  const product = data.products.find(x => x._id === props.match.params.id);
  if(!product){
    return <div>Product not found</div>
  }
  return (
    <div>
    <Link to='/'>Back to HomeScreen</Link>
      <div className="row top">
        <div className="col-2">
          {/* image */}
          <img className='large' src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          {/* discription */}
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>
              Price : ${product.price}
            </li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          {/* action */}
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div className="">Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="">Status</div>
                  <div className="">
                  {product.countInStock > 0? <span className="sucess">In Stock</span> :
                    <span className="error">Unavailable</span>
                  }
                  </div>
                </div>
              </li>
              <li>
                <button className='primary block'>Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
