import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping , faHeart} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.book.cart.length);

  const handleCartClick = ()=>{
     navigate('/buy');
  }
  return (
       <div className="navbar">
          <div className='left'>
              <h4 style={{color:"red",fontSize:" 30px"}}>Bookie</h4>
          </div>
       <div className='right'>
       <Link to='/'>Home</Link>
       <Link to ='/book'>Books</Link>
       <Link to='/buy'>Buy</Link>
       <Link to='/contact'>Contact</Link>
       </div>
       <div className='cart' onClick={handleCartClick} style={{ cursor: 'pointer' }}>
         <FontAwesomeIcon icon={faCartShopping} />

       </div>
       <div className='wishlist'>
         <FontAwesomeIcon icon={faHeart} />
       </div>
    </div>
  )
}

export default Navbar
