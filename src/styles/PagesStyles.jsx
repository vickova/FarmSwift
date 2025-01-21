import styled from 'styled-components';
import AboutHero from '../assets/images/Hero-image.jpg';
import ContactHero from '../assets/images/Hero-image.jpg';


export const HomeStyle = styled.div`
overflow: hidden;
.hero, .shop-hero{
    background-color: #bddbe8;
    border-radius: 10px;
    margin: .5rem !important;
    align-items: center;
    padding: 2rem 0;
}
.shop-hero{
    padding: 2rem;
}
.hero__subtitle h1, .gallery__subtitle h1{
    font-size: 3rem;
}
.hero__subtitle{
    margin-bottom: 2rem;
}
.hero__content p, .hero__subtitle span{
    color: var(--heading-color);
    font-size: 1.2rem !important;
}

.hero-buttons button, .gallery-buttons button{
    display: block;
    background-color: var(--secondary-color);
    border: none;
    font-size: .8rem;
}
.gallery-buttons{
    justify-content: end;
}
.hero-text__cover{
    height: 100%;
}
.gallery, .hero, .shop-hero{
    padding: .5rem 8rem;
}
.gallery{
    text-align: right;
}
.testimonial__subtitle h2{
    text-align: center;
    font-size: 3rem;
}
.testimonial-cover{
    width: 300px;
}
.categories__subtitle{
    text-align: left !important;
    margin: .5rem 6rem;
}
.categories__wrapper{
    margin: 2rem 0 !important;
}


 .shop-image img{
    width: 100%;
 }
 .popular__jingos{
    padding: 1rem 6rem;
 }
 @media screen and (max-width: 990px){
    .popular__jingos{
        padding: 0;
        margin: 0;
    }
    .hero, .shop-hero{
        padding:1rem;
    }
    .categories__subtitle{
        margin: 1rem 0;
    }
    .gallery{
        padding:0;
    }
 }
`

export const AboutPageSyle = styled.div`
h2{
    font-size: 3rem;
    text-align: center;
}
.about-hero{
    height: 400px;
    padding: 2rem;
    background-image: url(${AboutHero});
    background-color:var(--secondary-transparent-color);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    color: #fff;
    text-align: center;
    justify-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-hero-inner{
    width: 70% !important;
}

.about__section{
    margin: 5rem 0 !important;
    h2{
    text-align: left;
    margin-bottom: 3rem !important;
}
}
.women img{
 width: 100%;
}
.gallery{
    flex-wrap: wrap;
    padding: .5rem 8rem;
}
.empower__women{
    flex-wrap: wrap;
}
.empower__women p{
    font-size: 1rem;
    line-height: 1.8rem;
    text-align: justify;
    margin-top: 1rem;
}
.offer{
    margin: 3rem 0;
    h2{
    margin: 2rem 0;
}
}
.offer-cover{
    flex-wrap: wrap;
}
.offer-card{
    background-color: var(--secondary-transparent-color);
    padding: 1.2rem;
    text-align: center;
    border-radius: 10px;
    height: 25rem;
    color: rgb(72, 70, 70);
    box-shadow:1px 1px 5px rgb(226, 225, 225);
    cursor: pointer;
    h3{
        height: 20%;
        font-size: 1.5rem;
    }
    p{
        font-size: 1rem;
        margin-top: 1rem;
        line-height: 2rem;
        text-align: justify;
}
}
.action{
    margin: 6rem 0 !important;
    flex-wrap: wrap !important;
    padding: .5rem 8rem !important;
    button{
    background-color: var(--secondary-color);
    border: none;
    width: 50%;
}
}
.action-image{
    width: 48%;
    img{
    border-radius: 10px;
    box-shadow:1px 1px 5px rgb(226, 225, 225);
}
}
.action-text{
    width: 50%;
    text-align: justify;
    h2{
    text-align: left;
}
}
.gallery-text__cover{
    width: 50%;
    margin: 6rem 0;
}
@media screen and (max-width: 990px){
    h2{
        font-size: 2rem;
    }
    .action-hero-inner p{
        font-size: 1rem;
    }
    .about-hero{
        height: fit-content;
    }
    .gallery-text__cover{
        width: 100%;
    }
    .action{
        padding:0 !important;
        display: block !important;
        margin-top:0 !important;
    }
    .action-text{
        width: 100%;
    }
    .action-image{
        width: 100%;
        margin: 3rem 0;
    }
    .about-hero-inner{
        width: 100% !important;
    }
    .gallery{
        padding: 0;
    }
 }
`

export const ContactStyle  = styled.div`
    .about-hero{
    height: 400px;
    padding: 2rem;
    background-image: url(${ContactHero});
    background-color:var(--secondary-transparent-color);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    color: #fff;
    text-align: center;
    justify-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-hero-inner{
    width: 70% !important;
}
.links-wrapper{
    border-top: 1px solid var(--nav-color);
    padding: 2rem 0;
}
.links-wrapper h3{
    font-size: 1rem;
    margin-bottom: 1rem;
}
.links i, ul li i{
    background-color: var(--secondary-color);
    color: #fff !important;
    width: 50px;
    height: 50px;
    text-align: center;
    justify-self: center;
    border-radius: 100%;
    padding: .5rem;
}
.links i{
    cursor: pointer;
}
.contact-form li{
    list-style: none;
    margin: 2rem 0;
}
ul h3, ul p{
    margin: 0;
}
.contact-reach{
    margin: 0;
    padding: 0;
}
.contact-reach li{
    margin: 1.5rem 0;
}
.contact-reach li h3{
    font-size: 1rem;
}
.contact-form input, .contact-form textarea{
    width: 100%;
    display: block;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid var(--nav-color);
    margin: 2rem 0 !important;
    padding: .5rem;
    border-radius: 5px;
}
.contact-form textarea{
    height: 150px;
}
form p{
    font-size: .8rem;
}
.contact-form button{
    background-color: var(--secondary-color) !important;
    border: none !important;
    border-radius: 50px !important;
    padding: .5rem 2rem !important;
    margin: 2rem 0 !important;
}
form h2{
    margin-bottom: 2rem;
}
.contact-details{
    padding: 8rem 8rem 12rem 8rem !important;
    background-color: var(--secondary-transparent-color);
    flex-wrap: wrap;
}
.contact-form{
    background-color: rgb(243, 243, 243);
    box-shadow:1px 1px 5px rgb(226, 225, 225);
    padding: 2rem;
    border-radius: 10px;
    height: 100%;
}
.map{
    height: 60vh;
    margin: 2rem 8rem !important;
    position: relative;
}
.map-item{
    border-radius: 10px;
    position: absolute;
    top: -100px;
}
@media screen and (max-width: 720px){
    .contact-details{
        padding:1rem !important;
    }
    .map{
        margin: 1rem !important;
    }
    .map-item{
        top:0;
        margin: 1rem 0;
    }
}
`

export const ConsultationStyle = styled.div`
    background-color: rgba(202, 237, 250, 0.3);
    padding: 3rem;
    margin-bottom: 10rem;
.chat__area{
    height: 100vh;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
}
.inputs{
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 50px;
}
.inputs input{
    box-sizing: border-box;
    width: 60%;
    height: 100%;
}
@media screen and (max-width: 720px){
    padding: 1rem;
}
`
export const VendorStyle = styled.div`
margin: 2rem 0 4rem 0;
.reviews_cover{
    margin: 3rem 8rem;
    overflow-x:auto;
    padding:1.5rem;
    background-color:var(--secondary-transparent-color);
}
.reviews_cover::-webkit-scrollbar {
    height: 5px;
  }
  
  /* Track */
  .reviews_cover::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  
  /* Handle */
  .reviews_cover::-webkit-scrollbar-thumb {
    background: var(--secondary-transparent-color);
    border-radius: 5px;
  }
  
  /* Handle on hover */
  .reviews_cover::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
.vendor-header{
    margin: 0 1rem 2rem 1rem;
}
.vendor-item{
    padding: .5rem 0;
    text-align: center;
}

.vendor-identity img{
    width: 30px;
    height: 30px;
}
.vendor-identity h3{
    margin: 0;
    font-size: 1rem;
    text-align: left !important;
    font-size: 1rem;
    color: var(--nav-text-color)
}
.vendor-info{
    margin: 0 1rem !important;
    transition: all cubic-bezier(0.77, 0, 0.175, 1) 100ms;
}
.vendor-info-cover a{
    text-decoration: none;
    color: var(--text-color);
}
.vendor-info:hover{
    background-color: var(--secondary-transparent-color);
}
.header-row, .vendor-info{
    padding: 1rem 0;
}
.rate_cover .rate_button{
    background-color:'#fff';
}
.header-row{
    margin:0 1rem !important;
    border-top: 1px solid var(--secondary-color) !important;
    border-bottom: 1px solid var(--secondary-color) !important;
}
.vendor-cover{
    padding: 3rem 8rem;
}
.vendor-picture{
    width: 45%;
}
.vendor-picture img{
    width: 100%;
    background-color: var(--secondary-transparent-color);
    border-radius: 50%;
}
.vendor-text{
    width: 45%;
    height: 100%;
    text-align: justify;
    border: 1px solid var(--secondary-transparent-color);
    padding:1.2rem 2rem;
}
.vendor-text{
    margin-bottom: 2rem;
}
.vendor-major{
    margin: 0;
}
.vendor-text .vendor-description{
    margin: 2rem 0;
    line-height: 2rem;
}
.vendor-button{
    background-color: var(--secondary-transparent-color);
    border: none;
    border-radius: 5px;
    padding: .5rem;
    color: grey;
}

.p-datatable-table tr{
    padding: 1rem 0;
    height: 60px;
    font-size: .8rem;
    /* @apply text-sm h-14 px-2 */
  }
  .p-datatable-table h3{
    font-size: .8rem;
  }
  .p-datatable-table tbody tr:hover{
    background-color: var(--secondary-transparent-color);
    
  }
  .p-datatable-table tr button{
    background-color: var(--secondary-transparent-color);
    color: grey;
    outline: none
  }
  .p-paginator-bottom{
    margin: 1rem 0;
  }
   .p-datatable-table{
    max-width: 100%;
    box-sizing: border-box;
    min-width: 40rem !important;
  }
  .p-paginator-page[aria-current="true"]{
    background-color: var(--secondary-transparent-color);
  }
  @media screen and (max-width: 960px){
    .reviews_cover{
        margin:1rem;
    }
  }
@media screen and (max-width: 720px){
    .vendor-identity{
        h3{
        text-align: left;
        }
    }
    .vendor-header{
        margin: 1rem 0;
    }
    .vendor-cover{
        padding: 1rem;
        display: block !important;
    }
    .vendor-text{
        width: 100%;
        margin: 2rem 0;
    }
    .vendor-picture{
        width: 100%;
        img{
            border-radius: 5px;
        }
    }
}
`

export const RegisterStyle = styled.div`
    height:100vh;
    .sign__cover{
        margin: auto !important;
    }
    .sign__info, .inner__info{
        height:100% !important;
    }
    .register__info{
        background-color: var(--secondary-color);
        color: #fff;
        font-weight: 600;
    }
    .register__action{
        .covers{
        height:90vh;
        overflow-y:scroll;
        scrollbar-width:none;
        }
    }
    .login{
        p{
            margin:0;
        }
        button{
            padding:.5rem 1rem;
            width: fit-content;
            background-color:var(--secondary-color);
            border:none;
        }
    }
    .covers{
        height:fit-content;
        h2{
            margin: 1rem 0;
        }
    }
    .alternative__btn{
        margin: 2rem 0;
        .alternative{
            background-color:#edebebaf !important;
            box-shadow: 3px 3px 3px -3px #ddd;
            border:none;
            height: 50px;
            padding: .8rem 1rem;
            width:50%;
            color: var(--nav-text-color);
            i, img{
                width:20px;
                color: var(--nav-text-color);
            }
        }
        .alternative:hover{
            background-color: var(--secondary-transparent-color) !important;
            color: #565656;
            i{
                color: #565656
            }
        }
    }
    .terms{
        p{
            margin:0;
        }
    }
    form{
        input{
            outline:none;
        }
        input[type=text], input[type=password], input[type=email]{
            width:100%;
            padding: .5rem 1rem;
            box-sizing: border-box;
            border-radius:5px;
            border: 1px solid var(--nav-text-color);
            margin: .5rem 0;
            font-size: 1rem;
        }
        button{
            width:100%;
            margin:1rem 0;
            background-color:var(--secondary-color);
            border:none;
        }
        .password{
            position: relative;
        }
        .password i{
            position: absolute;
            right:10px;
            top:10px
        }
    }

`

export const SellerDashboardStyle = styled.div`
        
    .seller-container{
        height: 100vh;
        background-color: rgba(121, 122, 122, 0.2);
    }
    
    .dashboardcover{
        height:100%;
    }
    .sidebar{
        height:100%;
        box-shadow:1px 1px 5px rgb(226, 225, 225);
        background-color: #fff;
        overflow-y: auto;
            a{
            display: block;
            text-decoration: none;
            color: var(--nav-text-color);
            font-size:.8rem;
            padding:.8rem;
            i{
                font-size:.8rem;
            }
        }
            a:hover{
                background-color: var(--secondary-transparent-color);
                color: #545454;
            }
        }
        
    .mainbar{
        padding: 1rem 2rem;
        height: 100vh;
        .main__bar__input{
            box-sizing: border-box;
            padding:.5rem 1rem;
            background-color: #fff;
            border-radius: 50px;
            width: 50%;
            color: var(--nav-text-color);
            i{
                font-size: 1rem;
                cursor:pointer;
            }
            input{
                width:90%;
                outline: none;
                border: none;
                color: var(--nav-text-color);
            }
        }
        .top__bar{
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .inner{
            
        }
        .inner::-webkit-scrollbar {
            width: 5px;
        }
        
        /* Track */
        .inner::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 5px;
        }
        
        /* Handle */
        .inner::-webkit-scrollbar-thumb {
            background: var(--secondary-transparent-color);
            border-radius: 5px;
        }
        
        /* Handle on hover */
        .inner::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        .profile{
            img{
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
            .profile__details{
                p{
                    margin:0;
                    font-size: .8rem;
                }
                p:first-child{
                    font-weight: 600;
                }
            }
        }
        .profile__cover{
            display: flex;
            gap:.5rem;
            align-items: center
                i{
                    font-size: 1rem;
                    cursor: pointer;
                }
            }
    }
    .seller-logo {
        padding: 1rem;
        img{
        width: 40px;
    }
    }
    @media screen and (max-width: 990px){
        .row{
            display: flex;
            flex-wrap: wrap;
        }
        .sidebar{
            width: 20%;
        }
        .mainbar{
            width: 80%;
            padding: 1rem .5rem;
            .main__bar__input{
            width: 100%;
        }
        }
        .profile__cover{
            align-items: start;
            width: 100%;
            margin:0 0 1rem 0;
            .profile{
                width:100% !important;
            }
        }
        .top__bar{
            flex-direction: column-reverse;
        }
        .seller-logo{
            padding:.5rem 0;
        }
    }
    @media screen and (max-width: 550px){
        .sidebar{
            width: 20%;
            a{
                span{
                    display:none;
                }
            }
        }
    }
`
export const CheckOutStyle = styled.div`
    .cart__summary{
        border-right: 1px solid var(--nav-text-color);
        h3{
            margin: 1rem 0;
        }
        .sub__total{
            border-top: 1px solid var(--nav-text-color);
            padding: 1rem 0;
            text-align: center;
            h4{
                font-size: 1rem;
            }
        }
        .checkout{
            border:none;
        }
        .checkoutrow__cover{
            height: 60vh;
            overflow-y:auto;
            overflow-x: hidden;
        }
        .checkoutrow__cover::-webkit-scrollbar {
            width: 0;
        }
    }
    .promocode{
        border-bottom: 1px solid grey;
    }
    .promocode .action{
        margin:1rem 0;
    }
    .promocode input{
        border: none;
        outline: none;
    }
    .promocode button{
        font-size: 1rem;
        color: #000;
    }
    .promocode button i{
        font-size: 1rem;
    }
    .subtotal h4, .promocode h4{
        font-size: 1rem;
    }
    .promocode h4{
        color: var(--nav-text-color);
    }
    
.checkout__details{
    padding:.5rem 2rem;
    .detail__flow{
        height: 58vh;
        overflow: auto;
    }
    .detail__flow::-webkit-scrollbar {
        width: 5px;
    }
    
    h4{
        font-size: 1rem;
        color: #5c5c5c;
    }
    h3{
    margin: 1rem 0;
    }
    input{
        border: none;
        border-bottom:1px solid var(--nav-text-color);
        outline: none;
        font-size: .8rem;
        padding: .8rem 0;
        width: 100%;
    }
    .action{
        margin: 2rem 0;
    }
    .payment__images{
        img{
            width: 40px;
            box-shadow:1px 1px 5px rgb(226, 225, 225);
            padding:.1rem .3rem;
        }
    }
    button{
        border:none !important;
    }
    .apply{
        font-size: .8rem;
        padding:0 .5rem;
        i{
            font-size:.8rem;
        }
    }
    .code{
        width:20%;
    }
    .expiry{
        width: 80%;
        margin-bottom: 0 !important
    }
    .payment__section{
        label{
            font-size:.8rem;
            font-weight: 500;
            color:var(--nav-text-color);
        }
        input{
            border: 1px solid var(--nav-text-color);
            padding: .8rem .5rem;
        }
        .exp-wrapper {
            position: relative;
            border: 1px solid #aaa;
            display: flex;
            width: 100%;
            justify-content: space-around;
            height: 36px;
            line-height: 36px;
            font-size: .8rem;
            }

            .exp-wrapper:after {
            content: '/';
            position: absolute;
            left: 50%;
            margin-left: -4px;
            color: #aaa;
            }

            input.exp {
            float: left;
            font-family: monospace;
            border: 0;
            width: 30%;
            outline: none;
            appearance: none;
            font-size: .8rem;
            }
    }
}
    .checkout__details::-webkit-scrollbar {
        width: 0;
    }
`

export const OrderDetailsStyle = styled.div`
    h3{
        margin: 1.5rem 0;
    }
    .p-datatable-table tr{
    padding: 1rem 0;
    height: 60px
    /* @apply text-sm h-14 px-2 */
  }
  .p-datatable-table tbody tr:hover{
    background-color: var(--secondary-transparent-color);
    
  }
  .p-datatable-table tr button{
    background-color: var(--secondary-transparent-color);
    color: grey;
    outline: none
  }
  .p-datatable-table{
    max-width: 100%;
    box-sizing: border-box;
    min-width: 0 !important;
  }
  .order-details{
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
  }
  .order-link{
    color: var(--secondary-color);
    font-weight: 500;
  }
  .order-link p{
    margin: 0;
  }
  .p-datatable-table td{
    font-size: .8rem;
  }
  .p-paginator-bottom{
    margin: 1rem 0;
  }
  .p-paginator-page[aria-current="true"]{
    background-color: var(--secondary-transparent-color);
  }
  .p-button{
    padding:.5rem 1rem;
    border-radius: 20px;
    margin: 0;
  }
`
export const IndividualOrder = styled.div`
    background-color: #fff;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 5px;
    height: 85vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
    width: 5px;
  }
  
  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--secondary-transparent-color);
    border-radius: 5px;
  }
  
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
    p{
        font-size: .8rem;
    }
    .order-flex{
        display: flex;
        gap: 4rem;
    }
    .order-section{
        margin: 2rem 0;
    }
    .back-order{
        text-decoration: none;
        color: var(--secondary-color);
        margin: 1rem 0;
    }
    .p-datatable-table tr{
    padding: 1rem 0;
    height: 60px
    /* @apply text-sm h-14 px-2 */
  }
  
  .p-datatable-table tr button{
    background-color: var(--secondary-transparent-color);
    color: grey;
    outline: none
  }
  .p-datatable-table{
    max-width: 100%;
    box-sizing: border-box;
    min-width: 0 !important;
  }
  .p-datatable-table td{
    font-size: .8rem;
  }
`

export const UploadProductStyle = styled.div`
  /* General container styling */
  margin-top:30px;
  .upload-product-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }

  /* Form Title */
  .form-title {
    text-align: center;
    color: var(--secondary-color);
    font-size: 24px;
    margin-bottom: 20px;
  }

  /* Form container for responsive layout */
  .form-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  /* Form group styling */
  .form-group {
    flex: 1 1 100%; /* Full width by default */
    margin-bottom: 15px;
  }

  /* Adjust form-group for desktop */
  @media (min-width: 768px) {
    .form-group {
      flex: 1 1 calc(50% - 20px); /* Two columns for larger screens */
    }
  }

  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    background-color: #fff;
    transition: border-color 0.3s ease;
  }


  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    border-color: #199b73;
    outline: none;
  }

  /* Styling specifically for the select element */
  .form-group select {
    appearance: none; /* Removes default browser styling for a consistent look */
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23ddd' d='M2 0L0 2h4zM2 5L0 3h4z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 10px;
    cursor: pointer;
    color:'#000'
  }

  textarea {
    resize: vertical;
  }

  /* Button styling */
  .submit-btn {
    width: 100%;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: bold;
    background-color: #199b73;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .submit-btn:hover {
    background-color: #157f62;
  }

  /* Success and error messages */
  .success-message {
    color: var(--secondary-color);
    text-align: center;
    margin-top: 10px;
  }

  .error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
  }

  /* Uploaded products section */
  .uploaded-products {
    margin-top: 30px;
  }

  .uploaded-products h3 {
    color: #333;
    margin-bottom: 10px;
  }

  .product-list {
    list-style-type: none;
    padding: 0;
  }

  .product-item {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: #fff;
  }

  .product-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
    margin-top: 10px;
  }
`;

