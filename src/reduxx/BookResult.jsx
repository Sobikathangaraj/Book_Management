import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reduxx/bookSlice';
import { useNavigate } from 'react-router-dom';
import './BookResult.css';

const BookResult = () => {
  const book = useSelector((state) => state.book.searchedBook);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
    navigate('/buy');
  };

  return (
    <div style={{ padding: '50px' }}>
      {book ? (
        <div className="card mb-3 shadow" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <div className="book-card-img-wrapper">
                <img src={book.img} alt={book.title} className="book-img" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">by {book.author}</small>
                </p>
                <h6 className="text-danger">₹{book.price}</h6>
                <button className="btn btn-outline-danger mt-2" onClick={handleAddToCart}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="not-found-container text-center p-4">
          <h2 className="text-danger fw-bold">Oops! We couldn't find that book. 📚</h2>
          <p className="text-muted">Try searching for a different title or check your spelling.</p>
        </div>
      )}
    </div>
  );
};

export default BookResult;
