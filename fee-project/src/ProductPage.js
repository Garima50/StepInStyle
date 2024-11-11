import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { productId } = useParams();

  // Sample product data
  const products = {
    14: { name: 'Black Luxe', description: 'Luxury black shoes', price: '₹12,795' },
    13: { name: 'Luxe Elegance', description: 'Elegant luxe shoes', price: '₹11,297' },
    27: { name: 'Luxe Pastels', description: 'Pastel color shoes', price: '₹11,895' },
  };

  const product = products[productId];

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default ProductPage;
