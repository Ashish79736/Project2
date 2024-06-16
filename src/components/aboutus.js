export default function About(){
    return(
        <div className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="image_2"><img src={require('../images/img-2.png')} /></div>
        </div>
        <div className="col-md-6">
          <h1 className="live_text">Live Sport and TV-shows for best
            friends
          </h1>
          <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,</p>
          <div className="online_bt_main">
            <div className="online_bt"><a href="#">4K Ultra HD Quality</a></div>
            <div className="online_bt1"><a href="#">200+ Online Channels</a></div>
            <div className="read_bt1"><a href="#">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}