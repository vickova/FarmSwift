import Manpicture from '../assets/images/green-farmer.jpg';
import RedMan from '../assets/images/red-man.jpg';
import ManHarvest from '../assets/images/ManHarvest2.png';
import ManHarvest2 from '../assets/images/Manharvest.jpeg';
import Potatoe from '../assets/images/potato.jpeg';
import Cocoyam from '../assets/images/coco-yam.jpeg';
import Tangerine from '../assets/images/tangerine.jpeg';
import Mango from '../assets/images/mango.jpeg';
import Apple from '../assets/images/apple.jpeg';
import Watermelon from '../assets/images/watermelon.jpeg';
import Rice from '../assets/images/Rice.jpeg';
import Banana from '../assets/images/banana.jpeg';
import Cashew from '../assets/images/cashew.jpeg';
import guava from '../assets/images/guava.jpeg';
import Pineapple from '../assets/images/pineapple.jpeg';
import Cocoa from '../assets/images/cocoa.jpeg';
import Eggs from '../assets/images/eggs.jpeg';
import Orange from '../assets/images/orange.jpeg';


export const popular_products = [
  {
      category:'tuber',
      description: 'One kilo of potatoe available',
      price:350,
      discountedprice:'#500/kg',
      wish:false,
      createdBy:1,
      picture: Potatoe,
      id: 0
  },
  {
      category:'tuber',
      description: 'One bunch of cocoyam available',
      price:350,
      discountedprice:'#350/kg',
      wish:false,
      createdBy:0,
      picture: Cocoyam,
      id: 1
  },
  {
      category:'fruits',
      description: 'One bunch of tangerine available',
      price:350,
      discountedprice:'#400/kg',
      wish:false,
      createdBy:2,
      picture: Tangerine,
      id: 2
  },
  {
      category:'fruits',
      description: 'One bunch basket of mangoes available',
      price:350,
      discountedprice:'#300/kg',
      wish:false,
      createdBy:3,
      picture: Mango,
      id: 3
  },
  {
      category:'fruits',
      description: 'One bunch of cashew available',
      price:350,
      discountedprice:'#600/kg',
      wish:false,
      createdBy:4,
      picture: Cashew,
      id: 4
  },
  {
      category:'grains',
      description: 'Bags of local rice',
      price:350,
      discountedprice:'#400/kg',
      wish:false,
      createdBy:5,
      picture: Rice,
      id: 5
  },
  {
      category:'fruits',
      description: 'Big watermelons available',
      price:350,
      discountedprice:'#300/kg',
      wish:false,
      createdBy:6,
      picture: Watermelon,
      id: 6
  },
  {
      category:'fruits',
      description: 'One bunch of big bananas available',
      price:350,
      discountedprice:'#300/kg',
      wish:false,
      createdBy:7,
      picture: Banana,
      id: 7
  },
  {
      category:'fruits',
      description: 'Big apples available',
      price:350,
      discountedprice:'#300/kg',
      wish:false,
      createdBy:8,
      picture: Apple,
      id: 8
  },
  {
      category:'fruits',
      description: 'Big guava fruit available',
      price:350,
      discountedprice:'#400/kg',
      wish:false,
      createdBy:1,
      picture: guava,
      id: 9
  },
  {
      category:'fruits',
      description: 'One bunch of big pineapple available',
      price:350,
      discountedprice:'#800/kg',
      wish:false,
      createdBy:0,
      picture: Pineapple,
      id: 10
  },
  {
      category:'fruits',
      description: 'One bunch of big cocoa available',
      price:350,
      discountedprice:'#300/kg',
      wish:false,
      createdBy:2,
      picture: Cocoa,
      id: 11
  },
  {
      category:'livestock',
      description: 'Big crate of eggs available',
      price:350,
      discountedprice:'#300/kg',
      wish:false,
      createdBy:3,
      picture: Eggs,
      id: 12
  },
  {
      category:'fruits',
      description: 'One bunch of big orange available',
      price:350,
      discountedprice:'#300/kg',
      wish:false,
      createdBy:7,
      picture: Orange,
      id: 13
  },
  {
      category:'fruits',
      description: 'One bunch of big potatoe available',
      price:350,
      discountedprice:'#300/kg',
      wish:false,
      createdBy:4,
      picture: Potatoe,
      id: 14
  },
  {
      category:'fruits',
      description: 'One bunch of big cashew available',
      price:350,
      discountedprice:'#300/kg',
      wish:false,
      createdBy:8,
      picture: Cashew,
      id: 15
  },
  
]

export const vendors = [
    {
      name:'Olu Johnson',
      rating: 3,
      image: Manpicture,
      city:'Lagos',
      country:'Nigeria',
      id:0
    },
    {
      name:'Tolu Agbaje',
      rating: 5,
      image: RedMan,
      city:'Lagos',
      country:'Nigeria',
      id:1
    },
    {
      name:'Aduragbemi Funsho',
      rating: 4,
      image: ManHarvest,
      city:'Lagos',
      country:'Nigeria',
      id:2
    },
    {
      name:'Michael Smith',
      rating: 2,
      image: ManHarvest2,
      city:'Lagos',
      country:'Nigeria',
      id:3
    },
    {
        name:'Olu Johnson',
        rating: 4,
        image: Manpicture,
        city:'Lagos',
        country:'Nigeria',
        id:4
      },
      {
        name:'Tolu Agbaje',
        rating: 3,
        image: RedMan,
        city:'Lagos',
        country:'Nigeria',
        id:5
      },
      {
        name:'Aduragbemi Funsho',
        rating: 5,
        image: ManHarvest,
        city:'Lagos',
        country:'Nigeria',
        id:6
      },
      {
        name:'Michael Smith',
        rating: 5,
        image: ManHarvest2,
        city:'Lagos',
        country:'Nigeria',
        id:7
      },
    {
      name:'Michael Smith',
      rating: 1,
      image: Manpicture,
      city:'Lagos',
      country:'Nigeria',
      id:8
    },
  ]

export const ChartData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  }
];
 export const orders = [
  {
    orderId: "123456",
    customerName: "John Doe",
    orderDate: "2024-11-20",
    totalAmount: 100.0,
    status: "Pending",
  },
  {
    orderId: "123457",
    customerName: "Jane Smith",
    orderDate: "2024-11-19",
    totalAmount: 50.0,
    status: "Shipped",
  },
  {
    orderId: "123458",
    customerName: "Alice Jones",
    orderDate: "2024-11-18",
    totalAmount: 75.0,
    status: "Delivered",
  },
  {
    orderId: "123459",
    customerName: "Bob Brown",
    orderDate: "2024-11-17",
    totalAmount: 120.5,
    status: "Cancelled",
  },
];
