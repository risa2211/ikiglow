import { useEffect, useState } from "react"
import { Link } from "react-router-dom"




const Home = () => {
    const [user, setUser] = useState(false)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user) {
            setUser(true)
        }else{
            setUser(false)
        }
    }, [])
    
      
    
     
      
      
    
    
 
  return (
    <>

<div>

        <div className="top-bar d-none d-md-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="top-bar-left">
                            <div className="disclaimer-line">
                                <span className="disclaimer-text">Please note that the information provided on this website is for educational purposes only and is not a substitute for professional mental health advice, diagnosis, or treatment.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="top-bar-right">
                            <div className="social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
            
                <a href="index.html" className="navbar-brand"><img src="/img/logo.jpeg"/>B<span>liss</span>M<span>ind</span></a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <a href="index.html" className="nav-item nav-link">About</a>
                        <a href="services.html" className="nav-item nav-link">Service</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
                            <div className="dropdown-menu">
                                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                <a href="single.html" className="dropdown-item">Blog Detail</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    {
                        user ?  <><Link to={'/chat'} className="nav-item nav-link ml-auto">Chat</Link> <Link onClick={()=>{sessionStorage.removeItem('user');setUser(false)}}  className="nav-item nav-link ml-auto">Log out</Link></>:<Link to={'/login'}  className="nav-item nav-link ml-auto">Login</Link>
                    }
                </div>
            </div>
        </div>

        <div className="hero">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-text">
                            <h1>Mental Health</h1>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
                            </p>
                            <div className="hero-btn">
                                <a className="btn" href="">Join Now</a>
                                <a className="btn" href="">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-image">
                            <img src="img/Psychologist-bro.svg" alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="about wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="img/about.png" alt="Image"></img>
                            </div>
                        </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="section-header text-left">
                            <p>Learn About Us</p>
                            <h2>Welcome to BlissMind</h2>
                        </div>
                        <div className="about-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
                            </p>
                            <a className="btn" href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="service">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>What we do</p>
                    <h2>Mental Health</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="ri-chat-heart-line"></i>
                            </div>
                            <h3>Chatbot Assistance</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item active">
                            <div className="service-icon">
                                <i className="ri-mental-health-fill"></i>
                            </div>
                            <h3>Stress Detector</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="ri-team-fill"></i>
                            </div>
                            <h3>1:1 Session</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="discount wow zoomIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="section-header text-center">
                    <p>Join Us Now</p>
                    <h2>Get <span>1 Complete</span> session free</h2>
                </div>
                <div className="container discount-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. 
                    </p>
                    <a className="btn">Join Now</a>
                </div>
            </div>
        </div>

        <div className="testimonial wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="section-header text-center">
                    <p>Testimonial</p>
                    <h2>Our Client Say!</h2>
                </div>
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/" alt="Image"/>
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/" alt="Image"/>
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/" alt="Image"/>
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/" alt="Image"/>
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="team">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Our Team</p>
                    <h2>Believe In Us</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/" alt="Image"/>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Ridha</h2>
                                <p>---</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/" alt="Image"/>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Chirag</h2>
                                <p>---</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/" alt="Image"/>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Rakshitha</h2>
                                <p>---</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/" alt="Image"/>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Sunil</h2>
                                <p>---</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="container-fluid text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Address<span></span></p>
                        <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, Bengaluru, Karnataka, India</p>
                        <p><i className="fa fa-phone-alt me-3"></i>12345 54321</p>
                        <p><i className="fa fa-envelope me-3"></i>heart2heal.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="twitter.com"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href="instagram.com"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
                        <a className="btn btn-link" href="">About Us</a>
                        <a className="btn btn-link" href="">Services</a>
                        <a className="btn btn-link" href="">Contact Us</a>
                        <a className="btn btn-link" href="">Admin Portal</a>
                        <a className="btn btn-link" href="">Privacy Policy</a>
                        <a className="btn btn-link" href="">Terms & Conditions</a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src="img/1.png" alt="Image"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/2.png" alt="Image"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/3.png" alt="Image"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/4.png" alt="Image"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/5.png" alt="Image"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/6.png" alt="Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Newsletter<span></span></p>
                        <p>Subscribe to our newsletter and stay tuned for new updates</p>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{}}/>
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FAQs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      

        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
       
</div>
 
    </>
  )
}

export default Home