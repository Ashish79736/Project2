export default function Client(){
    return(
        <div className="client_section layout_padding">
    <div className="container">
      <h1 className="client_taital">What our clients say</h1>
      <div className="client_section2 layout_padding">
        <div className="row">
          <div className="col-sm-4">
            <div className="client_image"><img src={require('../images/img-3.png')} /></div>
          </div>
          <div className="col-sm-8">
            <div className="miller_text">Miller<span className="quote_icon"><img src="images/quote-icon.png" /></span></div>
            <p className="ipsum_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id e</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}