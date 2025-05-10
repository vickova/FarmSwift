import React, {useEffect, useState} from 'react';
import { CheckOutStyle } from '../styles/PagesStyles';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Placeholder, Card, CardBody } from 'reactstrap';
import MasterCard from '../assets/icons/mastercard.svg';
import visa from '../assets/icons/visa.svg';
import PayPal from '../assets/icons/paypal.svg';
import { SubmitOrder } from '../redux/actions';
import { useGet } from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { useGetP, usePostBody } from '../hooks/useApi';
import axios from 'axios';
import Loader from '../components/Loader/Loader';

const Checkout = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const userId = userData?._id;
    console.log({"userDataaaaaaaaCheckout":userData});
    const [countries, setCountries] = useState([]);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        address: '',
        zip: '',
        city: '',
        houseNumber: '',
        floor: '',
        country: '',
        phone: '',
        remarks: '',
        });
   console.log({"formDataaaaaaaCheckout":formData})
   const shippingAddress = `${formData?.houseNumber}, ${formData?.floor ? `Floor ${formData?.floor}, ` : ''}${formData?.address}, ${formData?.city}, ${formData?.zip}, ${formData?.country}`;
    console.log({"shippingAddressCheckout":shippingAddress})
    // const cartList = useSelector((state)=> state.CartReducer.cartList);
    // const { data: AllCartItems, loading: LoadingCartIt   ems, error: CartItemsError } = useGet(userId ? `${BASE_URL}/carts/${userId}` : null);
    const { data: AllCartItems, loading: LoadingCartItems, error: CartItemsError } = useGetP(userId ? `/carts/${userId}` : null, ['carts']);
    const userCheckoutResponse = usePostBody(`order/create`);
        
    const cartList = AllCartItems?.data
    console.log({"cartListttttttttCheckout":cartList})
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const OrderSubmit = ()=>{
        dispatch(SubmitOrder())
        navigate('/account')
    }

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
          .then(res => {
            const sortedCountries = res.data
              .map(c => c.name.common)
              .sort((a, b) => a.localeCompare(b));
            setCountries(sortedCountries);
          })
          .catch(err => console.error(err));
      }, []);
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      console.log({userId})

      const handleCheckoutSubmit = (event) => {
        event.preventDefault();
        console.log('clicked')
        userCheckoutResponse.mutate({
            email:formData.email,
            name:formData.name,
            userId,
            remarks:formData.remarks,
            shippingAddress
      })
      console.log("done")
        // dispatch(SignUser(formData))
        };
  return (
    <CheckOutStyle>
        <Container>
            <Row>
                <Col lg='4' className='cart__summary'>
                    <h3>Cart Summary</h3>
                    {LoadingCartItems? (
                            // Skeleton Loader (Without CSS)
                            [...Array(6)].map((_, index) => (
                                <Card key={index} style={{ width: '200px', borderRadius: 'none', padding: '10px', display:'flex' }}>
                                    <div style={{ width: '50%', height: '150px', borderRadius: '5px', backgroundColor: 'rgba(25, 155, 116, 0.2)' }}></div>
                                    <CardBody style={{width:'45%'}}>
                                        <div style={{ height: '12px', width: '75%', backgroundColor: 'rgba(25, 155, 116, 0.2)', borderRadius: '5px', marginBottom: '8px' }}></div>
                                        <div style={{ height: '12px', width: '50%', backgroundColor: 'rgba(25, 155, 116, 0.2)', borderRadius: '5px' }}></div>
                                    </CardBody>
                                </Card>
                            ))
                        ):
                    <div>
                        {cartList?.length === 0 ? <h5 className='empty__cart' style={{height:'60vh', display:'flex', alignItems:'center', justifyContent:'center'}}>Your cart is empty</h5> : <div className='cart__heading'>
                        <div className=''>
                            <Row>
                                <Col className='cart__heading' lg='6'>Product</Col>
                                <Col className='cart__heading' lg='6'>Total</Col>
                            </Row>
                        </div>
                        <div className='checkoutrow__cover'>
                            {
                                cartList?.map((item)=>{
                                    let totalPrice =item?.price * item?.quantity;

                                    return <Row className='cart__row d-flex align-items-center'>
                                        <Col lg='6' className='cart__data'>
                                            <div className='cartproduct d-flex gap-3 align-items-center'>
                                                <div className='checkoutimage d-flex justify-content-center'>
                                                    <img src={item?.product.photo} alt="" />
                                                </div>
                                                <div className='cartproduct__text'>
                                                    <h3>{item?.product.description}</h3>
                                                    <p>{item?.product.sellername}</p>
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
                                <Col lg='6'><h4>#{cartList?.reduce((acc, item)=>acc+(item?.price * item?.quantity), 0)}</h4></Col>
                            </Row>
                        </div>
                    </div>
                    }
                    </div>
                    }
                    <div className='my-4'>
                        <button className='checkout' onClick={()=> navigate('/home')}>Back to Home</button>
                    </div>
                </Col>
                <Col lg='8 checkout__details'>
                <form action="" onSubmit={handleCheckoutSubmit}>
                    <h3>Check Out</h3>
                    <h4>Where do you want your order to be delivered?</h4>
                    <div className='detail__flow'>
                        <div className='action'>
                            <h4>From which address are you ordering?</h4>
                            <div className='d-flex justify-content-between gap-5'>
                                <input type="text" name="address" placeholder='Address' onChange={handleChange}/>
                                <input type="text" name='zip' placeholder='Zip code' onChange={handleChange}/>
                                <input type="text" name='city' placeholder='City' onChange={handleChange}/>
                            </div>
                            <div className='d-flex justify-content-between gap-5'>
                                <input type="text" name='houseNumber' placeholder='House Number' onChange={handleChange}/>
                                <input type="number" name='floor' placeholder='Floor' onChange={handleChange}/>
                                <select
                                    className="checkout__country"
                                    name='country'
                                    value={formData?.country}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Country</option>
                                    {countries.map((c, idx) => (
                                    <option key={idx} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='action'>
                            <h4>How can we reach you?</h4>
                            <div className='d-flex justify-content-between gap-5'>
                                <input type="text" name='name' placeholder='Name' onChange={handleChange}/>
                                <input type="email" name='email' placeholder='E-mail' onChange={handleChange}/>
                            </div>
                            <div className='d-flex justify-content-between gap-5'>
                                <input type='tel' name='phone' placeholder='Phone number' onChange={handleChange}/>
                            </div>
                        </div>
                        <div className='action'>
                            <h4>When will you like your goods?</h4>
                            <div className='d-flex justify-content-between gap-5'>
                                <input type="text" name='remarks' placeholder='Remarks' onChange={handleChange}/>
                            </div>
                        </div>
                        {/* <div className='payment action'>
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
                                    <input autoComplete='off' id="cardnumber" maxLength="16" pattern="[0-9]*" inputMode="numerical" type="tel" data-pattern-validate />
                                </FormGroup>
                                <div className='d-flex justify-content-between align-items-center gap-5'>
                                    <FormGroup className='code payment__section'>
                                        <label htmlFor="code">CVV Code</label>
                                        <input autoComplete="off" id="code" maxLength="3" pattern="[0-9]*" inputMode="numerical" type="tel" data-pattern-validate />
                                    </FormGroup>
                                    <FormGroup className='expiry payment__section'>
                                        <label htmlFor="expiry">Expiry Date (YY/MM)</label>
                                        <div class="exp-wrapper">
                                            <input autoComplete="off" class="exp" id="month" maxLength="2" pattern="[0-9]*" inputMode="numerical" placeholder="MM" type="tel" data-pattern-validate />
                                            <input autoComplete="off" class="exp" id="year" maxLength="2" pattern="[0-9]*" inputMode="numerical" placeholder="YY" type="tel" data-pattern-validate />
                                        </div>
                                    </FormGroup>
                                </div>
                            </div> */}
                        {/* </div> */}
                    </div>
                    {/* <div className=''>
                        <h4>Do you have a promocode?</h4>
                        <div className='d-flex justify-content-between gap-3'>
                            <input type="text" placeholder='Promocode'/>
                            <button className='apply d-flex align-items-center gap-2'><span>Apply</span><i className="ri-arrow-right-line"></i></button>
                        </div>
                    </div> */}
                    <div className='my-4'>
                        <button type='submit' className='checkout'>{!userCheckoutResponse.isPending ? 'Submit Order' : <Loader/>}</button>
                    </div>
                    </form>
                    
                </Col>
            </Row>
        </Container>
    </CheckOutStyle>
  )
}

export default Checkout