import React, { useState } from 'react';
import { UploadProductStyle } from '../styles/PagesStyles';

const Notification = () => {
  const [product, setProduct] = useState({
    accountNumber: '',
    bankName: '',
    bankCode: '',
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


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.accountNumber || !product.bankCode || !product.bankName) {
      setErrorMessage('All fields are required!');
      return;
    }

    const newProduct = {
      ...product,
      id: Date.now(),
    };

    setUploadedProducts((prev) => [newProduct]);
    setSuccessMessage('Account Details uploaded successfully!');
    setErrorMessage('');

    setProduct({
      name: '',
      price: '',
      description: '',
      category: '',
      image: null,
    });
  };

  const categories = [
    'Fruits',
    'Vegetables',
    'Grains',
    'Dairy',
    'Livestock',
    'Poultry',
    'Seeds',
    'Fertilizers',
    'Equipment',
  ];

  return (
    <UploadProductStyle>
      <div className="upload-product-container">
        <h2 className="form-title">Upload Account Details</h2>
        <form onSubmit={handleSubmit} className="upload-product-form">
          <div className="form-group">
            <label>Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={product.bankName}
              onChange={handleChange}
              placeholder="BankName"
              required
            />
          </div>
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="number"
              name="accountNumber"
              value={product.accountNumber}
              onChange={handleChange}
              placeholder="Account Number"
              required
            />
          </div>
          <div className="form-group">
            <label>Bank Code</label>
            <input
              type="number"
              name="bankCode"
              value={product.bankCode}
              onChange={handleChange}
              placeholder="Bank Code"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="uploaded-products">
          <h3>Current Account Details</h3>
          {uploadedProducts.length === 0 ? (
            <p>No Account Added Yet</p>
          ) : (
            <ul className="product-list">
              {uploadedProducts.map((product) => (
                <li key={product.id} className="product-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4>{product.name}</h4>
                    <i
                      className="ri-check-double-line"
                      style={{ cursor: 'pointer' }}
                    ></i>
                  </div>
                  <p>Account Number: {product.accountNumber}</p>
                  <p>Bank Name: {product.bankName}</p>
                  <p>Bank Code: {product.bankCode}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </UploadProductStyle>
  );
};

export default Notification;
