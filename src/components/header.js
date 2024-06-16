import { BrowserRouter as Router,Routes,Route,Link, Form } from 'react-router-dom'
import About from './aboutus'
import Product from './product'
import Contact from './Contact'
import Client from './client'
import Subscribe from './subscribe'
import Footer from './footer'
import Forms from './forms'
import Home from './myhome'

export default function Header(){
    return(
     <Router>
           <div className="header_section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="logo"><Link to= {"/"}><img src={require('../images/logo.png')} /></Link></div>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to= {"/"}className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to= {"/About"}className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to= {"/Product"}className="nav-link" >Products</Link>
            </li>
            <li className="nav-item">
              <Link to= {"/login"}className="nav-link" >Log In</Link>
            </li>
            <li className="nav-item">
              <Link to= {"/Contact"}className="nav-link" >Contact us</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">GET STARTED</button>
          </form>
          <div className="search_icon">
            <ul>
              <li><a href="#"><img src={require('../images/user-icon.png')} /></a></li>
              <li><a href="#"><img src={require('../images/bag-icon.png')} /></a></li>
              <li><a href="#"><img src={require('../images/search-icon.png')} /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    {/* <!-- banner section start --> */}
    <div className="banner_section layout_padding">
      <div className="container">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">3
                <div className="col-md-6">
                  <h1 className="your_text">Your Favorite</h1>
                  <h1 className="Shows_text">Shows And Movies</h1>
                  <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or</p>
                  <div className="start_bt"><a href="#">Start Now</a></div>
                  <div className="read_bt"><a href="#">Read More</a></div>
                </div>
                <div className="col-md-6">
                  <div className="images_1"><img src={require('../images/img-1.png')} /></div>
                </div>
              </div>
            </div>
           
          </div>
          <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i className="fa-arrow-left"><img src={require('../images/left-arrow.png')} /></i>
          </a>
          <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i className="fa-angle-right"><img src={require('../images/right-arrow.png')} /></i>
          </a>
        </div>
        <div className="banner_section_2">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="box_main">
                <div className="internet-icon"></div>
                <h4 className="broadband_text">Broadband</h4>
                <p className="many_text">There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form, m Ipsum, you need to be</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="box_main active">
                <div className="internet_icon1"></div>
                <h4 className="broadband_text active">Satelite Tv</h4>
                <p className="many_text active">There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, m Ipsum, you need to be</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="box_main">
                <div className="internet_icon2"></div>
                <h4 className="broadband_text">Mobility</h4>
                <p className="many_text">There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form, m Ipsum, you need to be</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/Product" element={<Product/>}/>
    <Route exact path="/Contact" element={<Contact/>}/>
    <Route exact path="/Client" element={<Client/>}/>
    <Route exact path="/Subscribe" element={<Subscribe/>}/>
    <Route exact path="/Footer" element={<Footer/>}/>
    <Route exact path="/login" element={<Forms/>}/>
    </Routes>
  </section>
     </Router>
    )
}
