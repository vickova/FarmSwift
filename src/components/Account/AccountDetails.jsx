import React from 'react';
import ProfilePicture from '../../assets/images/color-man.webp';
import { FormGroup, Form } from 'reactstrap';
import { useSelector } from 'react-redux';
import './AccountDetails.css';

const AccountDetails = () => {
  const orderList = useSelector((state)=> state.CartReducer.orderHistory);
  const userData = useSelector((state)=> state.UserReducer.UserData);
  console.log(orderList)
  return (
    <div className='account__detail__wrapper'>
      <h2>Account Information</h2>
      <div className='account__details__cover'>
        <div className='profile__info__cover d-flex align-items-center gap-3'>
          {userData?
          <img src={URL.createObjectURL(userData?.profilePicture)} alt="" />:
          <img src={ProfilePicture} alt="" />
            }
            <i className="ri-camera-line"></i>
        </div>
        <Form className='account__form'>
          <div className='input-section'>
            <FormGroup className='input'>
              <label htmlFor="firstname">First Name</label>
              <div className='input__cover d-flex gap-2 align-items-center'>
                <input type='text' required id='password'/>
                <i className="ri-user-3-line"></i>
              </div>
            </FormGroup>
            <FormGroup className='input'>
              <label htmlFor="lastname">Last Name</label>
              <div className='input__cover d-flex gap-2 align-items-center'>
                <input type='text' required id='password'/>
                <i className="ri-user-3-line"></i>
              </div>
            </FormGroup>
          </div>
          <div className='input-section'>
            <FormGroup className='input'>
              <label htmlFor="firstname">Email</label>
              <div className='input__cover d-flex gap-2 align-items-center'>
                <input type='text' required id='password'/>
                <i className="ri-mail-line"></i>
              </div>
            </FormGroup>
            <FormGroup className='input'>
              <label htmlFor="firstname">Phone Number</label>
              <div className='input__cover d-flex gap-2 align-items-center'>
                <input type='text' required id='password'/>
                <i className="ri-phone-line"></i>
              </div>
            </FormGroup>
          </div>
          <div className='input-section'>
            <FormGroup className='input'>
              <label htmlFor="firstname">Date of Birth</label>
              <div className='input__cover d-flex gap-2 align-items-center'>
                <input type='text' required id='password'/>
                <i classname="ri-calendar-2-line"></i>
              </div>
            </FormGroup>
            <FormGroup className='input'>
              <label htmlFor="firstname">Country</label>
              <div className='input__cover d-flex gap-2 align-items-center'>
                <input type='text' required id='password'/>
                <i classname="ri-arrow-right-s-line"></i>
              </div>
            </FormGroup>
          </div>
          <FormGroup className='input textarea'>
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio">

          </textarea>
          <button>Save</button>
          </FormGroup>
        </Form>
      </div>
    </div>
  )
}

export default AccountDetails
