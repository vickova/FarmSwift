import React, { useState } from 'react';
import { UploadProductStyle } from '../styles/PagesStyles';

const UploadProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: null,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadedProducts, setUploadedProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setProduct({ ...product, image: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };
const deleteProduct = (item)=>{
  setUploadedProducts(uploadedProducts.filter((prod, index)=>prod.id !== item.id))
}
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.description || !product.category || !product.image) {
      setErrorMessage('All fields are required!');
      return;
    }

    const newProduct = {
      ...product,
      id: Date.now(),
      imageURL: URL.createObjectURL(product.image),
    };

    setUploadedProducts((prev) => [...prev, newProduct]);
    setSuccessMessage('Product uploaded successfully!');
    setErrorMessage('');

    setProduct({
      name: '',
      price: '',
      description: '',
      category: '',
      image: null,
    });
  };

  return (
    <UploadProductStyle>
    <div className="upload-product-container">
      <h2 className="form-title">Upload Product</h2>
      <form onSubmit={handleSubmit} className="upload-product-form">
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter product description"
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Enter product category"
            required
          />
        </div>
        <div className="form-group">
          <label>Product Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Upload Product
        </button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="uploaded-products">
        <h3>Uploaded Products</h3>
        {uploadedProducts.length === 0 ? (
          <p>No products uploaded yet.</p>
        ) : (
          <ul className="product-list">
            {uploadedProducts.map((product) => (
              <li key={product.id} className="product-item">
                <div className='d-flex align-items-center justify-content-between'>
                  <h4>{product.name}</h4>
                  <i className="ri-delete-bin-4-line" style={{cursor:'pointer'}} onClick={()=>deleteProduct(product)}></i>
                </div>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <p>Description: {product.description}</p>
                {product.imageURL && (
                  <img
                    src={product.imageURL}
                    alt={product.name}
                    className="product-image"
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </UploadProductStyle>
  );
};

export default UploadProduct;
