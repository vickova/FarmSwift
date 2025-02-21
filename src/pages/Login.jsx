import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, FormGroup, Form } from 'reactstrap';
import Google from '../assets/icons/google-logo.svg';
import { useNavigate } from 'react-router-dom';
import { RegisterStyle } from '../styles/PagesStyles';
import RegisterSlide from '../components/Slider/RegisterSlide';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { BASE_URL } from '../utils/config';
import { usePost } from '../hooks/useFetch';
import GoogleIcon from '../assets/icons/google-logo.svg'
import Loader from '../components/Loader/Loader';
import { LoginSuccess } from '../redux/actions';


const Login = () => {
  const [userToken, setUserToken] = useState(null)
  const navigate = useNavigate();
  const [eye, setEye] = useState(false)

    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    
    const { data: loginResponse, loading, error, postData } = usePost(`${BASE_URL}/auth/login`);
    useEffect(()=>{
      localStorage.setItem('user', JSON.stringify(userToken));
      console.log(userToken?.role)

      localStorage.setItem('selectedRole', userToken?.role);
      setTimeout(() => {
        localStorage.removeItem("user");
        window.location.reload(); // Redirect or log out user
    }, 60 * 60 * 1000);
  }, [userToken])
    console.log(loading)
    console.log(error)
    // console.log(loginResponse)
    const login = useGoogleLogin({
      onSuccess: async (response) => {
        try {
          console.log("Google Login Response:", response);
    
          const userInfo = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer ${response.access_token}` },
          }).then((res) => res.json());
    
          console.log("Decoded User Info:", userInfo);
    
          // Call postData function instead of directly using usePost inside a callback
          postData({
            email: userInfo?.email,
          });
    
        } catch (error) {
          console.error("Error fetching Google user info:", error);
        }
      },
      onError: (error) => console.error("Google Sign-in Error:", error),
    });
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleLoginSubmit = (event) => {
        event.preventDefault();
    console.log('clicked')
    
      postData({
        email:formData.email,
      password:formData.password,
    }, LoginSuccess, '/home')
    setUserToken(loginResponse?.data)
      // dispatch(SignUser(formData))
      };
  return (
    <RegisterStyle className='sign__cover d-flex align-items-center'>
    <Container className='sign__info'>
      <Row className='inner__info'>
      <Col lg='4' className='register__info d-flex justify-content-center align-items-center'>
        <div className='covers'>
          <h2>Ready to get started?</h2>
          <p>Here is how you sign up to FarmSwift</p>
          <RegisterSlide/>
        </div>
      </Col>
      <Col lg='8' className='register__action d-flex justify-content-center align-items-center'>
      <div className='covers'>
        <div className='login d-flex align-items-center gap-3'>
          <p>Don't have an account?</p>
          <Button onClick={()=>navigate('/get-started')}>Sign Up</Button>
        </div>
        <div>
          <h2>Log in</h2>
          <div>
          <button className='google-sign' onClick={login}><span>Sign in with Google</span><img width={20} height={20} src={GoogleIcon} alt="google icon" /></button>
            <p>or</p>
            <Form onSubmit={(e) => handleLoginSubmit(e)}>
            <FormGroup>
              <input type="email" placeholder="Email" required name="email" id="email" onChange={handleChange} />
            </FormGroup>
            <FormGroup className="password">
              <input type={eye ? "password" : "text"} placeholder="Password" required name="password" id="password" onChange={handleChange} />
            </FormGroup>
                <Button className='auth__btn btn secondary__btn' type='submit'>{!loading ? 'Login' : <Loader/>}</Button>
              </Form>
          </div>
        </div>
        </div>
      </Col>
      </Row>
    </Container>
    </RegisterStyle>
  )
}

export default Login