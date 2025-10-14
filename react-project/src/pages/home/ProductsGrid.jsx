import Product from './Product';

const ProductsGrid = ({ products, loadCart }) => {
  return (
    <div>
      <div className='products-grid'>
        {products.map((product) => {
          return (
            <Product key={product.id} product={product} loadCart={loadCart} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;
