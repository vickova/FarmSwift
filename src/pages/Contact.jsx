import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { RegisterUser, SignUser } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { usePost } from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { ContactStyle } from '../styles/PagesStyles';

const Contact = () => {
  const position = [6.5244, 3.3792];
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  const { data: contactResponse, loading, error, postData } = usePost(`${BASE_URL}/contact`);
  

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleContactSubmit = (event) => {
      event.preventDefault();
      console.log('in te submit functionnnnnnnnn')
    postData({
      name:formData.name,
      email:formData.email,
      subject:formData.subject,
      message:formData.message,
  }, SignUser, '/contact')
    dispatch(SignUser(formData))
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    };
  return (
    <ContactStyle className='contact-container'>
        <Container>
          <Row className='about-hero'>
            <div className='about-hero-inner'>
            <h2>Contact Us</h2>
            <p>Have a question or need assistance? We're here to help! Reach out to us, and we'll get back to you as soon as possible.</p>
            </div>
          </Row>
          <Row className='contact-details'>
            <Col lg='6'>
              <h2>Get In Touch</h2>
              <p>Prefer to talk directly? You can use the information below to contact us:</p>
              <ul className='contact-reach'>
                <li className='d-flex align-items-center gap-3'><i className="ri-map-pin-line"></i><span><h3>Address</h3><p>Office Address: 123 FarmSwift Avenue, Lagos, Nigeria</p></span></li>
                <li className='d-flex align-items-center gap-3'><i className="ri-phone-line"></i><span><h3>Phone Number</h3><p>+234 800 123 4567</p></span></li>
                <li className='d-flex align-items-center gap-3'><i className="ri-mail-line"></i><span><h3>E-mail</h3><p>support@farmswift.com</p></span></li>
              </ul>
              <div className='links-wrapper'>
                <h3>Follow Us:</h3>
                <div className='links d-flex gap-4'>
                  <div><i className="ri-facebook-box-line"></i></div>
                  <div><i className="ri-twitter-line"></i></div>
                  <div><i className="ri-youtube-line"></i></div>
                  <div><i className="ri-linkedin-box-line"></i></div>
                </div>
              </div>
            </Col>
            <Col lg='6'>
            <Form className='contact-form' onSubmit={handleContactSubmit}>
              <h2>Send a Message</h2>
              <FormGroup>
                <input type="text" placeholder='Name' value={formData.name} onChange={handleChange} required id='name'name='name'/>
              </FormGroup>
              <FormGroup>
                <input type="email" placeholder='Email' value={formData.email} onChange={handleChange} required id='email' name='email'/>
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder='Subject' value={formData.subject} onChange={handleChange} required id='subject' name='subject'/>
              </FormGroup>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder='Enter your message'>

              </textarea>
              <Button>Submit</Button>
            </Form>
            </Col>
          </Row>
          <Row className='map'>
          <MapContainer center={position} zoom={12} style={{ height: '400px', width: '100%' }} className='map-item'>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>FarmSwift Location</Popup>
            </Marker>
          </MapContainer>
          </Row>
        </Container>
    </ContactStyle>
  )
}

export default Contact