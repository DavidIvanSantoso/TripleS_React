import { Container,Row,Col } from "react-bootstrap"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules'
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { useState,useEffect } from "react";
import NavbarTop from "../Navbar/Navbar";

function MemberProfile(){
    const [member,setMember]=useState([])

    useEffect(()=>{
        fetch('./memberinfo.json')
        .then((response)=>response.json())
        .then((data)=>setMember(data))
        .catch((error)=>console.log('ERROR',error));
    },[]);

    return(
        <>
        <NavbarTop></NavbarTop>
            <Container>
                
                <Row >
                <h1 style={{fontSize:'4rem'}} className="d-flex flex-column align-items-center">tripleS Members</h1>
                </Row>
                <Row className="mt-5">
                <Swiper 
                style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff',}}
                effect={'coverflow'} 
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'2'}
                coverflowEffect={
                    {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,

                    }
                }
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
                >
                {member.map((res)=>(
                    <SwiperSlide key={res.sid}>
                        <div className="d-flex flex-column align-items-left" >
                            <Row>
                                <img style={{'border':"5px solid black", 'border-radius':"20px"}} src={res.img}></img>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <h1>S{res.sid}</h1>
                                    <h1>{res.name}</h1>
                                    <h1>{res.hangeul}</h1>
                                </Col>
                                
                                
                            </Row>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="slider-controler mt-5">
            <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
            </div>
                </Swiper>
                </Row>
            </Container>
        </>
    )
}
export default MemberProfile