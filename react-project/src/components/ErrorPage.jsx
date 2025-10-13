import Header from '../components/Header';

import './ErrorPage.css'

const ErrorPage = ( {cart}) => {
  return (
    <div>
      <Header cart={cart } />
      <div className='errorPage-container'>
        <h2 className='errorPage'> PAGE NOT FOUND</h2>
    <p className='errorStatus'>Status 404</p>
      </div>
    </div>
  );
};

export default ErrorPage;
