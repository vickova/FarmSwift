import React, {useState, useEffect} from 'react';
import { usePost, usePut } from '../hooks/useFetch';
import { FormGroup, Form, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/config';
import { LoginSuccess, SignUser } from '../redux/actions';
import '../components/Account/AccountDetails.css';
import Loader from '../components/Loader/Loader';
import { PasswordStyle } from '../styles/PagesStyles';

const Password = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
      const [userToken, setUserToken] = useState(null)
  
     const [eye, setEye] = useState(false);
       const [seceye, setSecEye] = useState(false);
    
      const [check, setCheck] = useState(false);
      const dispatch = useDispatch()

useEffect(()=>{
      localStorage.setItem('user', JSON.stringify(userToken));
  }, [userToken])
// console.log(userData)
    const [FileUploadError, setFileUploadError] = useState('')
  const [passwordError, setPasswordError] = useState({ statement: '', color: false });
  const navigate = useNavigate();
  const role = localStorage.getItem('selectedRole');
  const usernames = userData?.username.split(' ')

  const [formData, setFormData] = useState({
    password:'',
    confirmpassword:'',
  });
console.log(userData)
console.log(`${BASE_URL}/users/:${userData?._id}`)
  const { data: updateResponse, loading, error, postData } = usePut(`${BASE_URL}/users/${userData?._id}`);
  // console.log("API URL:", `${BASE_URL}/auth/register`);

console.log(loading)
console.log(error)
console.log(updateResponse)

  
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
    postData({
      username:formData.firstname + " " + formData.lastname,
      photo:formData.profilePicture,
      role:role,
      description:formData.description
  }, LoginSuccess)
  setUserToken(updateResponse?.data)
    dispatch(SignUser(formData))
    };
  return (
    <PasswordStyle className='account__detail__wrapper'>
      <h2>Change Password</h2>
      <div className='account__details__cover'>
      <Form className='account__form' onSubmit={(e) => handleUpdateSubmit(e)}>

          <div className='input-section'>
          <div className='passwords'>
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
          </div>
          </div>
          <Button className='pass-btn auth__btn btn secondary__btn d-flex justify-content-center' type='submit'>{!loading ? 'Save' : <Loader/>}</Button>
        </Form>
      </div>
    </PasswordStyle>
  )
}

export default Password
