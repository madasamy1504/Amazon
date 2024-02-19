import React from "react";

import './Header.css';

import Nav from 'react-bootstrap/Nav';


export default function Header(){
    return(
        <div>
             <div className="container-fluid fixed-top">
      
            <div className="container px-0">
                <Nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="shop.html" className="nav-item nav-link">Shop</a>
                            <a href="shop-detail.html" className="nav-item nav-link">Shop Detail</a>
                          
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="d-flex m-3 me-0">
                           
                            <a href="#" className="position-relative me-4 my-auto">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                            
                                <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: '-5px',left: '15px',height: '20px',minWidth: '20px'}}  >3</span>
                            </a>
                            <a href="#" className="my-auto" >
                                <i className="fas fa-user fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </Nav>
            </div>
        </div>
        </div>
    )
}