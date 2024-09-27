import React from 'react'
import { Container, Table } from 'reactstrap';
import Manpicture from '../assets/images/Farmer-Vicky.png';
import '../styles/Vendors.css'

const Vendors = () => {
  const vendors = [
    {
      name:'Michael Smith',
      rating: 5,
      image: Manpicture,
      city:'Lagos',
      country:'Nigeria'
    },
    {
      name:'Michael Smith',
      rating: 5,
      image: Manpicture,
      city:'Lagos',
      country:'Nigeria'
    },
    {
      name:'Michael Smith',
      rating: 5,
      image: Manpicture,
      city:'Lagos',
      country:'Nigeria'
    },
    {
      name:'Michael Smith',
      rating: 5,
      image: Manpicture,
      city:'Lagos',
      country:'Nigeria'
    },
    {
      name:'Michael Smith',
      rating: 5,
      image: Manpicture,
      city:'Lagos',
      country:'Nigeria'
    },
    {
      name:'Michael Smith',
      rating: 5,
      image: Manpicture,
      city:'Lagos',
      country:'Nigeria'
    },
    {
      name:'Michael Smith',
      rating: 5,
      image: Manpicture,
      city:'Lagos',
      country:'Nigeria'
    },
    {
      name:'Michael Smith',
      rating: 5,
      image: Manpicture,
      city:'Lagos',
      country:'Nigeria'
    },
    {
      name:'Michael Smith',
      rating: 5,
      image: Manpicture,
      city:'Lagos',
      country:'Nigeria'
    },
  ]
  return (
    <Container>
      <h2>Our Vendors</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr className='header-row'>
            <th className='vendor-item'>Identity</th>
            <th className='vendor-item'>Rating</th>
            <th className='vendor-item'>City</th>
            <th className='vendor-item'>Country</th>
          </tr>
        </thead>
        <tbody>
        {
          vendors.map((item, index)=>{
            return <tr className='vendor-info' key={index}>
                <th scope="row" className='vendor-identity d-flex align-items-end gap-2'>
                  <img src={item.image} alt="" />
                  <h3>{item.name}</h3>
                </th>
                <td>{item.rating}</td>
                <td>{item.city}</td>
                <td>{item.country}</td>
            </tr>
          })
        }
        </tbody>
      </Table>
    </Container>
  )
}

export default Vendors