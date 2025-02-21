import React, { useState, useEffect } from 'react';
import { UploadProductStyle } from '../styles/PagesStyles';
import axios from 'axios';

const Notification = () => {
  const [product, setProduct] = useState({
    accountNumber: '',
    bankName: '',
    bankCode: '',
  });

  const [bankList, setBankList] = useState(null); // Store bank list here
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadedProducts, setUploadedProducts] = useState([]);
console.log(bankList)
console.log(process.env.FLW_SECRET_KEY)
  // Fetch Bank List from Flutterwave
  useEffect(() => {
    const getBankList = async () => {
      try {
        const response = await axios.get('https://api.flutterwave.com/v3/banks/NG', {
          headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}` }
        });
        console.log(response?.data)
        setBankList(response.data.data); // Store banks in state
      } catch (error) {
        console.error('Error fetching banks:', error.response?.data || error.message);
      }
    };

    getBankList();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleBankChange = (e) => {
    const selectedBank = bankList.find(bank => bank.code === e.target.value);
    setProduct({
      ...product,
      bankName: selectedBank.name,  // Set bank name
      bankCode: selectedBank.code,  // Set bank code
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.accountNumber || !product.bankCode || !product.bankName) {
      setErrorMessage('All fields are required!');
      return;
    }

    setUploadedProducts([{ ...product, id: Date.now() }]);
    setSuccessMessage('Account Details uploaded successfully!');
    setErrorMessage('');
    
    setProduct({ accountNumber: '', bankName: '', bankCode: '' });
  };
if(!bankList){
  return <h3>Loading...</h3>
}
  return (
    <UploadProductStyle>
      <div className="upload-product-container">
        <h2 className="form-title">Upload Account Details</h2>
        <form onSubmit={handleSubmit} className="upload-product-form">
          
          <div className="form-group">
            <label>Bank Name</label>
            <select name="bankCode" onChange={handleBankChange} required>
              <option value="">Select Bank</option>
              {bankList.map((bank) => (
                <option key={bank.id} value={bank.code}>
                  {bank.name}
                </option>
              ))}
            </select>
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

          <button type="submit" className="submit-btn">Submit</button>
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
