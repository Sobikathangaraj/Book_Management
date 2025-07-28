import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchBook } from '../reduxx/bookSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import bg from '../assets/img1.jpg';

const Home = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      dispatch(searchBook(query));     // Redux action to search book
      navigate('/result');             // Go to result page
    }
  };

  return (
    <div className='home-container'>
      <img src={bg} alt="Book Background" className="bg-image" />

      <div className='overlay'>
        <h1 className="headline">Great Books Available here!!</h1>

        <div className='search-box'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <input
            type="text"
            placeholder="Search books..."
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
