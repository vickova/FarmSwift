import styled from 'styled-components';
import AboutHero from '../assets/images/Hero-image.jpg';
import ContactHero from '../assets/images/Hero-image.jpg';


export const HomeStyle = styled.div`
overflow: hidden;
.hero, .shop-hero{
    background-color: #bddbe8;
    border-radius: 10px;
    margin: .5rem !important;
    align-items: baseline;
    padding: 2rem 0;
}
.shop-hero{
    padding: 2rem;
}
.hero__subtitle h1, .gallery__subtitle h1{
    font-size: 4rem;
}
.hero__subtitle{
    margin-bottom: 2rem;
}
.hero__content p{
    color: var(--heading-color);
    font-size: 1.2rem;
}

.hero-buttons button, .gallery-buttons button{
    display: block;
    background-color: var(--secondary-color);
    border: none;
    font-size: 1.2rem;
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
    font-size: 4rem;
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
}
.empower__women{
    flex-wrap: wrap;
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
    p{
    line-height: 2rem;
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
`

export const ContactStyle  = styled.div`
    .about-hero{
    height: 400px;
    padding: 2rem;
    background-image: url(${ContactHero});
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
`
export const VendorStyle = styled.div`
margin: 2rem 0 4rem 0;
.vendor-header{
    margin: 0 1rem 2rem 1rem;
}
.vendor-item{
    padding: .5rem 0;
    width: 25% !important;
}
.vendor-identity img{
    width: 30px;
    height: 30px;
}
.vendor-identity h3{
    margin: 0;
    font-size: 1rem;
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
        
    .container{
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
                width:80%;
                outline: none;
                border: none;
                color: var(--nav-text-color);
            }
        }
        .top__bar{
            height: fit-content;
        }
        .inner{
            
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
                i{
                    font-size: 1rem;
                    cursor: pointer;
                }
            }
    }
    .seller-logo {
        padding: 1rem;
        img{
        width: 50px;
    }
    }
`