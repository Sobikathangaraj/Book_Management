import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reduxx/bookSlice'; 
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bookspage = () => {
  const booksObj = useSelector((state) => state.book.books);
  const books = Object.values(booksObj);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyNow = (book) => {
    dispatch(addToCart(book));    
    navigate('/buy');              
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-secondary">Our Book Collection 📚 </h2>
      <div className="row">
        {books.map((book, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={book.img} className="card-img-top" alt={book.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="text-muted">{book.author}</h6>
                <p className="card-text">{book.description}</p>
                <div className="mt-auto">
                  <span className="text-danger fw-bold">Rs.{book.price}</span>
                  <button
                    className="btn btn-outline-primary btn-sm float-end mt-2"
                    onClick={() => handleBuyNow(book)} 
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookspage;
