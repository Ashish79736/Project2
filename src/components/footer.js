export default function Footer(){
    return(
        <div className="footer_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="fooer_logo"><img src={require('../images/footer-logo.png')} /></div>
          <h1 className="customer_text">CUSTOMER SERVICE</h1>
          <p className="footer_lorem_text">There are many variat
            ions of passages of L
            orem Ipsum available
            , but the majority h
            ave suffered altera
            tion in some form, by </p>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h1 className="customer_text">LET US HELP YOU</h1>
          <p className="footer_lorem_text">There are many variat
            ions of passages of L
            orem Ipsum available
            , but the majority h
            ave suffered altera
            tion in some form, by </p>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h1 className="customer_text">INFORMATION</h1>
          <p className="footer_lorem_text1">
            About Us<br/>
            Careers<br/>
            Sell on shopee<br/>
            Press & News<br/>
            Competitions<br/>
            Terms & Conditions/</p>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h1 className="customer_text">OUR SHOP</h1>
          <p className="footer_lorem_text">There are many variat
            ions of passages of L
            orem Ipsum available
            , but the majority h
            ave suffered altera
            tion in some form, by </p>
          <div className="social_icon">
            <ul>
              <li><a href="#"><img src={require('../images/fb-icon.png')} /></a></li>
              <li><a href="#"><img src={require('../images/twitter-icon.png')} /></a></li>
              <li><a href="#"><img src={require('../images/instagram-icon.png')}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}