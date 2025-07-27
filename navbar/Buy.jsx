import React from 'react';
import { useSelector } from 'react-redux';

const BuyPage = () => {
  const cartItems = useSelector((state) => state.book.cart);
  const discount = 20;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        cartItems.map((book, index) => {
          const price = Number(book.price);
          const discountedPrice = price - (price * discount) / 100;

          return (
            <div className="card mb-3" key={index} style={{ maxWidth: '540px', margin: 'auto' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={book.img} className="img-fluid rounded-start" alt={book.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <p className="card-text">
                      <small className="text-muted">by {book.author}</small><br />
                      <span className="text-muted text-decoration-line-through">Rs.{book.price}</span>{' '}
                      <span className="text-success fw-bold">Rs.{discountedPrice}</span>{' '}
                      <span className="badge bg-success">{discount}% OFF</span>
                    </p>
                  </div>
                  
                </div>
              </div>
              <button className='btn btn-outline-success mt-4'>Buy Now</button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default BuyPage;
