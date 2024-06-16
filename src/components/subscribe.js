export default function Subscribe(){
    return(
        <div className="subscribe_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h1 className="subscribe_text">Subscribe Now</h1>
            </div>
            <div className="col-sm-8">
              <div className="mail_main">
                <input type="text" className="address_text1" placeholder="Enter your address" name="text" />
                <button type="button" className="get_bt1">GET STARTED</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}