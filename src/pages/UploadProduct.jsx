import React, { useState, useEffect } from 'react';
import { UploadProductStyle } from '../styles/PagesStyles';
import { BASE_URL } from '../utils/config';
import { usePost, useGet, usePut } from '../hooks/useFetch';
import { LoginSuccess } from '../redux/actions';
import { SignUser } from '../redux/actions';
import { Button } from 'reactstrap';
import Loader from '../components/Loader/Loader';
import { useSelector } from 'react-redux';

const UploadProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    photo: null,
  });

  const userDataId = useSelector((state) => state.AuthReducer?.user?.data?._id);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadedProducts, setUploadedProducts] = useState([]);
  const [previewImage, setPreviewImage] = useState(null); // For previewing the selected image
  const [updateproduct, setUpdateProduct] = useState(false);
  
  const { data: uploadProductResponse, loading, error, postData } = usePost(`${BASE_URL}/products`);
  const { data: getProductsResponse, loading: getProductsLoading, error: getProductsError } = useGet(`${BASE_URL}/products`);
  const { data: updateResponse, loading: updateLoading, error: updateError, postData: updateData } = usePut(`${BASE_URL}/products/${product?._id}`);

  const userProducts = getProductsResponse?.data.filter((item) => item.createdBy === userDataId);

  useEffect(() => {
    if (product.photo) {
      setPreviewImage(product.photo);
    }
  }, [product.photo]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct((prevData) => ({
          ...prevData,
          photo: reader.result, // Store Base64 string
        }));
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const deleteProduct = (item) => {
    setUploadedProducts(uploadedProducts.filter((prod) => prod.id !== item.id));
  };

  const updateProductHandler = (item) => {
    setUpdateProduct(true);
    setProduct({
      name: item.name,
      price: item.price,
      description: item.description,
      category: item.category,
      photo: item.photo,
      _id: item._id,
    });
    setPreviewImage(item.photo);
  };
  const cancelUpdate = (e) => {
    e.preventDefault();
    setProduct({ name: '', price: '', description: '', category: '', photo: null });
    setUpdateProduct(false);
    setPreviewImage(null);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      name: product.name,
      category: product.category.toLowerCase(),
      price: product.price,
      photo: product.photo,
      description: product.description,
    }, SignUser, '/account/upload');
    setSuccessMessage('Product uploaded successfully!');
    setErrorMessage('');
    setProduct({ name: '', price: '', description: '', category: '', photo: null });
    setPreviewImage(null);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log({
      name: product.name,
      category: product.category.toLowerCase(),
      price: product.price,
      photo: product.photo,
      description: product.description,
    })
    updateData({
      name: product.name,
      category: product.category.toLowerCase(),
      price: product.price,
      photo: product.photo,
      description: product.description,
    }, SignUser, '/account/upload');
    setSuccessMessage('Product uploaded successfully!');
    setErrorMessage('');
    setProduct({ name: '', price: '', description: '', category: '', photo: null });
    setPreviewImage(null);
    setUpdateProduct(false);
  };

  const categories = [
    {
      title:'Fruits'
    },
    {
      title:'Grains'
    },
    {
      title:'Tuber'
    },
    {
      title:'Vegetables'
    },
    {
      title:'Livestock'
    },
    {
      title:'Poultry'
    },
  ]
  return (
    <UploadProductStyle>
      <div className="upload-product-container">
        <h2 className="form-title">{updateproduct?'Update':'Upload'} Product</h2>
        <form onSubmit={(e)=>e.preventDefault()} className="upload-product-form">
          <div className="form-group">
            <label>Product Name</label>
            <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Enter product name" required />
          </div>
          <div className="form-group">
            <label>Price ($)</label>
            <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Enter product price" required />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={product.description} onChange={handleChange} placeholder="Enter product description" required />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select name="category" value={product.category} onChange={handleChange} required style={{color:'#000'}}>
              <option value="" disabled style={{color:'#000'}}>Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category} style={{color:'#000'}}>{category?.title}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Product Image</label>
            <input type="file" name="image" onChange={handleFileChange} accept="image/*" required={!updateproduct} />
            {previewImage && <img width={80} height={80} src={previewImage} alt="Preview" className="product-image-preview" />}
          </div>
          {updateproduct?
          <div className='d-flex justify-content-center gap-4'>
            <button className='submit-btn btn secondary__btn d-flex justify-content-center' type='submit' onClick={handleUpdate}>{!loading ? 'Update Product' : <Loader/>}</button>
            <button className='cancel-btn btn secondary__btn d-flex justify-content-center' type='submit' onClick={cancelUpdate}>Cancel</button>
          </div>:
          <button className='submit-btn btn secondary__btn d-flex justify-content-center' type='submit' onClick={handleSubmit}>{!updateLoading ? 'Upload Product': <Loader/>}</button>
          }
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="uploaded-products">
          <h3>Uploaded Products</h3>
          {userProducts?.length === 0 ? (
            <p>No products uploaded yet.</p>
          ) : (
            <ul className="product-list">
              {userProducts?.map((product) => (
                <li key={product.id} className="product-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4>{product.name}</h4>
                    <i className="ri-delete-bin-4-line" style={{ cursor: 'pointer' }} onClick={() => deleteProduct(product)}></i>
                  </div>
                  <div className='d-flex align-items-end gap-5'>
                    <div>
                      <p>Price: ${product.price}</p>
                      <p>Category: {product.category}</p>
                      <p>Description: {product.description}</p>
                      {product.photo && <img src={product?.photo} alt={product.name} className="product-image" />}
                    </div>
                    <i className="ri-ball-pen-line" style={{ cursor: 'pointer' }} onClick={() => updateProductHandler(product)}></i>
                  </div>
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
