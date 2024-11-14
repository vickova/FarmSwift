import React from 'react';
import { CheckOutStyle } from '../styles/PagesStyles';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MasterCard from '../assets/icons/mastercard.svg';
import visa from '../assets/icons/visa.svg';
import PayPal from '../assets/icons/paypal.svg';

const Checkout = () => {
    const cartList = useSelector((state)=> state.CartReducer.cartList);
    const navigate = useNavigate()
  return (
    <CheckOutStyle>
        <Container>
            <Row>
                <Col lg='4' className='cart__summary'>
                    <h3>Cart Summary</h3>
                    <div className=''>
                        <Row>
                            <Col className='cart__heading' lg='6'>Product</Col>
                            <Col className='cart__heading' lg='6'>Total</Col>
                        </Row>
                    </div>
                    <div className='checkoutrow__cover'>
                        {
                            cartList.map((item)=>{
                                let totalPrice =item?.price * item?.quantity;

                                return <Row className='cart__row d-flex align-items-center'>
                                    <Col lg='6' className='cart__data'>
                                        <div className='cartproduct d-flex gap-3 align-items-center'>
                                            <div className='cartimage d-flex justify-content-center'>
                                                <img src={item.picture} alt="" />
                                            </div>
                                            <div className='cartproduct__text'>
                                                <h3>{item.description}</h3>
                                                <p>{item.sellername}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg='6' className='cart__data'>#{totalPrice}</Col>
                                </Row>
                            })
                        }
                    </div>
                    <div className="">
                        <Row className='sub__total d-flex align-items-center'>
                            <Col lg='6'><p>Total</p></Col>
                            <Col lg='6'><h4>#{cartList.reduce((acc, item)=>acc+(item?.price * item?.quantity), 0)}</h4></Col>
                        </Row>
                    </div>
                    <div className='my-4'>
                        <button className='checkout' onClick={()=> navigate('/home')}>Back to Home</button>
                    </div>
                </Col>
                <Col lg='8 checkout__details'>
                    <h3>Check Out</h3>
                    <h4>Where do you want your order to be delivered?</h4>
                    <div className='detail__flow'>
                        <div className='action'>
                            <h4>From which address are you ordering?</h4>
                            <div className='d-flex justify-content-between gap-5'>
                                <input type="text" placeholder='Address'/>
                                <input type="text" placeholder='Zip code'/>
                                <input type="text" placeholder='City'/>
                            </div>
                            <div className='d-flex justify-content-between gap-5'>
                                <input type="text" placeholder='House Number'/>
                                <input type="text" placeholder='Floor'/>
                                <input type="text" placeholder='Country'/>
                            </div>
                        </div>
                        <div className='action'>
                            <h4>How can we reach you?</h4>
                            <div className='d-flex justify-content-between gap-5'>
                                <input type="text" placeholder='Name'/>
                                <input type="text" placeholder='E-mail'/>
                            </div>
                            <div className='d-flex justify-content-between gap-5'>
                                <input type="text" placeholder='Phone number'/>
                                <input type="text" placeholder='Country name'/>
                            </div>
                        </div>
                        <div className='action'>
                            <h4>When will you like your goods?</h4>
                            <div className='d-flex justify-content-between gap-5'>
                                <input type="time" placeholder='select delivery time'/>
                                <input type="text" placeholder='Remarks'/>
                            </div>
                        </div>
                        <div className='payment action'>
                            <h4>How would you like to pay?</h4>
                            <div>
                                <div className='my-4 d-flex align-items-center justify-content-between'>
                                    <h4>Credit Card</h4>
                                    <div className='payment__images d-flex align-items-center gap-2'>
                                        <img src={visa} alt="visa Card" />
                                        <img src={MasterCard} alt="Master Card" />
                                    </div>
                                </div>
                                <FormGroup className='payment__section'>
                                    <label htmlFor="cardnumber">Card number</label>
                                    <input autocomplete="off" id="cardnumber" maxlength="16" pattern="[0-9]*" inputmode="numerical" type="tel" data-pattern-validate />
                                </FormGroup>
                                <div className='d-flex justify-content-between gap-5'>
                                    <FormGroup className='code payment__section'>
                                        <label htmlFor="code">CVV Code</label>
                                        <input autocomplete="off" id="code" maxlength="3" pattern="[0-9]*" inputmode="numerical" type="tel" data-pattern-validate />
                                    </FormGroup>
                                    <FormGroup className='expiry payment__section'>
                                        <label htmlFor="expiry">Expiry Date (YY/MM)</label>
                                        <div class="exp-wrapper">
                                            <input autocomplete="off" class="exp" id="month" maxlength="2" pattern="[0-9]*" inputmode="numerical" placeholder="MM" type="tel" data-pattern-validate />
                                            <input autocomplete="off" class="exp" id="year" maxlength="2" pattern="[0-9]*" inputmode="numerical" placeholder="YY" type="tel" data-pattern-validate />
                                        </div>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h4>Do you have a promocode?</h4>
                        <div className='d-flex justify-content-between gap-3'>
                            <input type="text" placeholder='Promocode'/>
                            <button className='apply d-flex align-items-center gap-2'><span>Apply</span><i className="ri-arrow-right-line"></i></button>
                        </div>
                    </div>
                    <div className='my-4'>
                        <button className='checkout' onClick={()=> navigate('/account')}>Submit Order</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </CheckOutStyle>
  )
}

export default Checkout