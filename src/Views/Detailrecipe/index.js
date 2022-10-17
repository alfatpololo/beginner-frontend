import React from "react";
import "./style.css";
import Navbar from "../../Component/Navbar";
import { Link } from "react-router-dom";

const Detail = () => {
    return (
        <>
        <Navbar />
 <div>
  {/*Menu Image Section Start*/}
  <section className="menu-image-section pt-5">
    <div className="container">
      <div className="row col-12 text-center">
        <h1>Loream Sandwich</h1>
      </div>
      <div className="row col-12 justify-content-center pt-5">
        <img src={require("../../Assets/Images/Rectangle 313 (3).png")} alt />
      </div>
    </div>
  </section>
  {/*Menu Image Section End*/}
  {/*Ingredients Section Start*/}
  <section className="ingredients-section pt-5">
    <div className="container">
      <div className="row col-12">
        <h1>Ingredients</h1>
        <p>
          - 2 eggs
          <br />
          - 2 tbsp mayonnaise
          <br />
          - 3 slices bread
          <br />
          - a little butter
          <br />
          - ⅓ carton of cress
          <br />
          - 2-3 slices of tomato or a lettuce leaf
          and a slice of ham or cheese
          <br />
          - crisps , to serve
        </p>
      </div>
    </div>
  </section>
  {/*Ingredients Section End*/}
  {/*Video Step Section Start*/}
  <section className="ingredients-section pt-5">
    <div className="container">
      <div className="row col-12">
        <h1>Video Step</h1>
        <Link to="/video"><button className="play-video-button"><img src={require("../../Assets/Images/Vector.png")} alt /></button></Link>
        <Link to="/video"><button className="play-video-button"><img src={require("../../Assets/Images/Vector.png")} alt /></button></Link>
        <Link to="/video"><button className="play-video-button"><img src={require("../../Assets/Images/Vector.png")} alt /></button></Link>
        <Link to="/video"><button className="play-video-button"><img src={require("../../Assets/Images/Vector.png")} alt /></button></Link>
      </div>
    </div>
  </section>
  {/*Video Step Section End*/}
  {/*Comment Section Start*/}
  <section className="comment-section pt-5">
    <div className="container">
      <div className="row col-12 justify-content-center">
        <textarea className="comment-box pt-4 ps-4" placeholder="Comment:" name="comment" id cols={100} rows={15} defaultValue={""} />
        <button className="send-comment-button">Send</button>
      </div>
    </div>
  </section>
  {/*Comment Section End*/}
  {/*Comment Preview Section Start*/}
  <section className="comment-preview-section pt-5">
    <div className="container">
      <h1>Comment</h1>
      <div className="container">
        <div className="row">
          {/*comment-left*/}
          <div className="comment-left col-9">
            <img className="me-auto" src={require("../../Assets/Images/Ellipse 128.png")} alt />
          </div>
          {/*comment right*/}
          <div className="comment-right col-3">
            <p className="comment-name fw-bold">Ayudia</p>
            <p className="comment-field">Nice recipe. simple and delicious, thankyou</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Comment Preview Section End*/}<br />
</div>
  {/*Footer Section Start*/}
  <footer className="footer pt-5 pb-4">
    <section>
      <div className="row col-12 text-center">
        <h1>Eat, Cook, Repeat</h1>
        <p>Share your best recipe by uploading here !</p>
      </div>
    </section>
  </footer>
  {/*Footer Section End*/}
</>
    )
}

export default Detail;