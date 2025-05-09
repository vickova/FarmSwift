import React, {useState, useEffect} from 'react';
import { usePost, usePut } from '../../hooks/useFetch';
import { FormGroup, Form, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../utils/config';
import { LoginSuccess, SignUser } from '../../redux/actions';
import './AccountDetails.css';
import Loader from '../Loader/Loader';

const AccountDetails = () => {
    const userData = useSelector((state)=> state.AuthReducer?.user?.data);
      const [userToken, setUserToken] = useState(null)
  
     const [eye, setEye] = useState(false);
       const [seceye, setSecEye] = useState(false);
    
      const [check, setCheck] = useState(false);
      const dispatch = useDispatch()

// console.log(userData)
    const [FileUploadError, setFileUploadError] = useState('')
  const [passwordError, setPasswordError] = useState({ statement: '', color: false });
  const navigate = useNavigate();
  const role = localStorage.getItem('selectedRole');
  const usernames = userData?.username.split(' ')

  const [formData, setFormData] = useState({
    firstname: usernames,
    lastname: usernames,
    profilePicture: null, // Holds the uploaded file
    description:userData?.description
  });
console.log(userData)
console.log(`${BASE_URL}/users/:${userData?._id}`)
  const { data: updateResponse, loading, error, postData } = usePut(`${BASE_URL}/users/${userData?._id}`);
  // console.log("API URL:", `${BASE_URL}/auth/register`);

console.log(loading)
console.log(error)
console.log(updateResponse)

  
  const [previewImage, setPreviewImage] = useState(null); // For previewing the selected image

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profilePicture: reader.result, // Store Base64 string
        }));
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file); // Convert image to Base64
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = (event) => {
      event.preventDefault();
      console.log('cklicked')
      if (formData.password !== formData.confirmpassword) {
        setPasswordError({
          statement: 'Password values do not match',
          color: true,
        });
        return;
      } else {
        setPasswordError({
          statement: 'Passwords match',
          color: false,
        });
      }
  
      console.log({
        username:"Aderonke Olaleye",
        email:"olumideronke@gmail.com",
    });
    postData({
      username:formData.firstname + " " + formData.lastname,
      photo:formData.profilePicture,
      role:role,
      description:formData.description
  }, LoginSuccess)
  setUserToken(updateResponse?.data)
  localStorage.setItem('user', JSON.stringify(updateResponse?.data));
    dispatch(SignUser(formData))
    };
  return (
    <div className='account__detail__wrapper'>
      <h2>Account Information</h2>
      <div className='account__details__cover'>
      <Form className='account__form' onSubmit={(e) => handleUpdateSubmit(e)}>
        <div className='profile__info__cover d-flex align-items-center gap-3'>
        {previewImage? <>
              <div>
                <p>Preview:</p>
                <img
                  src={previewImage}
                  alt="Profile Preview"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </div>
              {!formData.profilePicture && !previewImage && FileUploadError && (
                <p style={{ fontSize: '.8rem', color: 'red', margin: '0' }}>
                  {FileUploadError}
                </p>
              )}
              </>:
              <img
                  src={userData?.photo} // Convert the file object to URL
                  alt="Profile"
              />
              }
            <div>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <label
                htmlFor="fileInput"
                style={{
                  display: 'inline-block',
                  color: '#fff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <i className="ri-camera-line"></i>
              </label>
            </div>

          </div>
          <div className='input-section'>
            <FormGroup className='input'>
              <label htmlFor="firstname">First Name</label>
              <div className='input__cover d-flex gap-2 align-items-center'>
                <input type='text' name='firstname' required id='firstname' value={formData.firstname} onChange={handleChange}/>
                <i className="ri-user-3-line"></i>
              </div>
            </FormGroup>
            <FormGroup className='input'>
              <label htmlFor="lastname">Last Name</label>
              <div className='input__cover d-flex gap-2 align-items-center'>
                <input type='text' name='lastname' required id='lastname' value={formData.lastname} onChange={handleChange}/>
                <i className="ri-user-3-line"></i>
              </div>
            </FormGroup>
          </div>
          <div className='input-section'>
          <FormGroup className='input textarea'>
            <label htmlFor="description">Description</label>
            <textarea type="text"
                name="description"
                required
                id="description"
                value={formData.description}
                onChange={handleChange}>

          </textarea>
          </FormGroup>
          {/* <div className='passwords'>
          <FormGroup className="password">
          <label htmlFor="password">Password</label>
            <div className="input__cover d-flex gap-2 align-items-center'">
            <input
              type={`${eye ?'text':'password'}`}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {eye ? (
              <i className="ri-eye-close-line" onClick={() => setEye(!eye)}></i>
            ):(
              <i className="ri-eye-line" onClick={() => setEye(!eye)}></i>
            ) }
            </div>
          </FormGroup>
          <p
            style={{
              fontSize: '.8rem',
              color: passwordError?.color ? 'red' : 'green',
              margin: 0,
            }}
          >
            {passwordError.statement}
          </p>
          <FormGroup className="password">
          <label htmlFor="confirmpassword">Confirm Password</label>
            <div className="input__cover d-flex gap-2 align-items-center'">
            <input
              type={`${seceye ? 'text':'password'}`}
              id="confirmpassword"
              name="confirmpassword"
              onChange={handleChange}
              value={formData.confirmpassword}
            />
            {seceye ? (
              <i className="ri-eye-close-line" onClick={() => setSecEye(!seceye)}></i>
            ):(
              <i className="ri-eye-line" onClick={() => setSecEye(!seceye)}></i>
            )}
            </div>
          </FormGroup>
          </div> */}
          </div>
          <Button className='auth__btn btn secondary__btn' type='submit'>{!loading ? 'Save' : <Loader/>}</Button>
        </Form>
      </div>
    </div>
  )
}

export default AccountDetails
