import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Subheader.css";


export default function Subheader(){
    return(
        <div>
                  <div class="container-fluid py-5 mb-5 hero-header">
            <div class="container py-5">
                <div class="row g-5 align-items-center">
                    <div class="col-md-12 col-lg-7">
                        <h4 class="mb-3 text-secondary">100% Organic Foods</h4>
                        <h1 class="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
                        <div class="position-relative mx-auto">
                            <input class="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search"/>
                            <button type="submit" class="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{top: 0,right: '25%'}}>Submit Now</button>
                        </div>
                    </div>


                    <div class="col-md-12 col-lg-5">
                        <div id="carouselId" class="carousel slide position-relative" data-bs-ride="carousel">
                        <Carousel>
      <Carousel.Item>
      <img src={require('./Images/hero-img-1.png')} class="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide"/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('./Images/hero-img-2.jpg')} class="img-fluid w-100 h-100 rounded" alt="Second slide"/>
        
      </Carousel.Item>

      <Carousel.Item>
      <img src={require('./Images/hero-img-1.png')} class="img-fluid w-100 h-100 bg-secondary rounded" alt="Third slide"/>
        
      </Carousel.Item>
     
    </Carousel>
                        </div>
                    </div>

  




                </div>
            </div>
        </div>
        </div>
    )
}