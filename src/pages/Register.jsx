import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, FormGroup, Form } from 'reactstrap';
import Google from '../assets/icons/google-logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { RegisterStyle } from '../styles/PagesStyles';
import RegisterSlide from '../components/Slider/RegisterSlide';
import { SignUser } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import GoogleIcon from '../assets/icons/google-logo.svg'



const Register = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [eye, setEye] = useState(false);
  const [seceye, setSecEye] = useState(false);
  const [check, setCheck] = useState(false);
  const [FileUploadError, setFileUploadError] = useState('')
  const [passwordError, setPasswordError] = useState({ statement: '', color: false });
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');

  useEffect(() => {
    // Get the role from local storage
    const role = localStorage.getItem('selectedRole');
    if (!role) {
      alert('Role not selected. Please go back and select your role.');
      window.location.href = '/get-started'; // Redirect to role selection page
    } else {
      setSelectedRole(role);
    }
  }, []);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    profilePicture: null, // Holds the uploaded file
  });

  const login = useGoogleLogin({
    onSuccess:(tokenResponse)=>{
      var CredentialResponseDecoded = jwtDecode(tokenResponse?.credential)
    console.log(CredentialResponseDecoded);
    }
  })
  const [previewImage, setPreviewImage] = useState(null); // For previewing the selected image

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));

    // Generate a preview of the selected image
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file); // Read the file to generate a preview
    }
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

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

    if (!check) {
      setPasswordError({
        statement: 'Please agree to the privacy policy to proceed.',
        color: true,
      });
      return;
    }
    // Check if profile picture is provided
    if (!formData.profilePicture) {
      setFileUploadError('Please upload a profile picture.');
      return;
    }

    console.log({
      status: 'successful',
      data: formData,
    });
  dispatch(SignUser(formData))
  navigate('/home')
  };
  

  return (
    <RegisterStyle className="sign__cover d-flex align-items-center">
      <Container className="sign__info">
        <Row className="inner__info">
          <Col lg="4" className="register__info d-flex justify-content-center align-items-center">
            <div className="covers">
              <h2>Ready to get started?</h2>
              <p>Here is how you sign up to FarmSwift</p>
              <RegisterSlide />
            </div>
          </Col>
          <Col lg="8" className="register__action d-flex justify-content-center align-items-center">
            <div className="covers">
              <div className="login d-flex align-items-center gap-3">
                <p>Already have an account?</p>
                <Button onClick={() => navigate('/login')}>login</Button>
              </div>
              <button className='google-sign' onClick={login}><span>Sign in with Google</span><img width={20} height={20} src={GoogleIcon} alt="google icon" /></button>
              <div>
                <h2>{selectedRole} Sign up</h2>
                <Form onSubmit={(e) => handleRegisterSubmit(e)}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Firstname"
                      name="firstname"
                      required
                      id="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Lastname"
                      name="lastname"
                      required
                      id="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup className="password">
                    <input
                      type={`${eye ?'text':'password'}`}
                      placeholder="Password"
                      name="password"
                      required
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {eye ? (
                      <i className="ri-eye-close-line" onClick={() => setEye(!eye)}></i>
                    ):(
                      <i className="ri-eye-line" onClick={() => setEye(!eye)}></i>
                    ) }
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
                    <input
                      type={`${seceye ? 'text':'password'}`}
                      placeholder="Confirm Password"
                      required
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
                  </FormGroup>

                  {/* Custom File Input */}
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
                        padding: '10px 20px',
                        backgroundColor:'#199b74',
                        color: '#fff',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        fontSize: '16px',
                        fontWeight: 'bold',
                      }}
                    >
                      Choose File
                    </label>
                  </div>

                  {/* Preview Image */}
                  {previewImage && (
                    <div>
                      <p>Preview:</p>
                      <img
                        src={previewImage}
                        alt="Profile Preview"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                    {!formData.profilePicture && !previewImage && FileUploadError && (
                      <p style={{ fontSize: '.8rem', color: 'red', margin: '0' }}>
                        {FileUploadError}
                      </p>
                    )}
                  {/* Privacy Checkbox */}
                  <div className="terms d-flex align-item-center gap-2">
                    <input
                      type="checkbox"
                      name="confirmpassword"
                      onClick={(e) => setCheck(e.target.checked)}
                    />
                    <p>I have read and agree to FarmSwift’s Privacy Policy and Terms of Use</p>
                  </div>
                  <Button className="auth__btn btn secondary__btn" type="submit">
                    Create Account
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </RegisterStyle>
  );
};

export default Register;
