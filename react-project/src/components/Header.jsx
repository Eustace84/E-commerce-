import { NavLink } from 'react-router';
import CartIcon from '../assets/images/icons/cart-icon.png';
import SearchIcon from '../assets/images/icons/search-icon.png';
import LogoWhite from '../assets/images/icons/logo-white.png';
import MobileLogoWhite from '../assets/images/icons/mobile-logo-white.png';
import { useState } from 'react';
import {useNavigate} from 'react-router';
import './header.css';
import { useSearchParams } from 'react-router';

const Header = ({ cart }) => {
  

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const searchText = searchParams.get('search')
const [search, setSearch] = useState(searchText || '');

  const updateSearchInput = (event) => {
    setSearch(event.target.value);
   
  };

  const searchProducts = () => {
    console.log(search);
    navigate(`/?search=${search}`);
      setSearch('');
  };

  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });



  return (
    <div>
      <div className='header'>
        <div className='left-section'>
          <NavLink to='/' className='header-link'>
            <img className='logo' src={LogoWhite} />
            <img className='mobile-logo' src={MobileLogoWhite} />
          </NavLink>
        </div>

        <div className='middle-section'>
          <input
            className='search-bar'
            type='text'
            placeholder='Search'
            value={search}
            onChange={updateSearchInput}
          />

          <button className='search-button' onClick={searchProducts}>
            <img className='search-icon' src={SearchIcon} />
          </button>
        </div>

        <div className='right-section'>
          <NavLink className='orders-link header-link active' to='/orders'>
            <span className='orders-text'>Orders</span>
          </NavLink>

          <NavLink className='cart-link header-link' to='/checkout'>
            <img className='cart-icon' src={CartIcon} />
            <div className='cart-quantity'>{totalQuantity}</div>
            <div className='cart-text'>Cart</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
