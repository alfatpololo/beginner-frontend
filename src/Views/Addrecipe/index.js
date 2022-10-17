import React, {useState} from "react";
import "./style.css";
import axios from "axios";
import Navbar from "../../Component/Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import dummy from "../../Assets/Images/2.png";

const Add = () => {
  const navigate = useNavigate();
    const [addForm, setAddForm] = useState({
         title:'',
         ingredients:'',
         description:'',
    })

    const [addImage, setAddImage] = useState()

    const onSubmit = (e) => {
      e.preventDefault();
      console.log(addForm, addImage)

      let inputForm = new FormData ()
      inputForm.append('title', addForm.title )
      inputForm.append('ingredients', addForm.ingredients )
      inputForm.append('image', addImage)

      axios.post(`${process.env.REACT_APP_BACKEND_URL}/recipe`, inputForm)
      .then((response) => {
        alert("Berhasil menambahkan resep")
        return navigate ("/profile")
      }) .catch((error) => {
        console.log(error)
      })
    }

    return (
        <>
        <Navbar />
  <div>
  {/*Add Form Section Start*/}
  <form onSubmit={(e) => onSubmit(e)}>
  <section className="add-form-section mt-5">
    <div className="container">
      <div className="row ms-5 justify-content-center">
        <input src={require("../../Assets/Images/image.png")} onChange={(e) => {setAddImage(e.target.files[0])}} type="file" id="image" />
        <label className="text-center" htmlFor="image">Add Image</label>
      </div>
    </div>
  </section>
  {/*Add Form Section End*/}
  {/*Text Area Section Start*/}
  <section className="text-area-section mt-5">
    <div className="container">
      <div className="row ms-4 justify-content-center">
        <div className="row col-12 justify-content-center">
          <textarea className="title-box pt-4 ps-4" placeholder="Title:" name="comment" onChange={(e) => {setAddForm({...addForm, title: e.target.value})}} id cols={5} rows={2} defaultValue={""} />
          <textarea className="title-box mt-4 pt-4 ps-4" placeholder="Ingredients:" onChange={(e) => {setAddForm({...addForm, ingredients: e.target.value})}} name="comment" id cols={5} rows={10} defaultValue={""} />
          <textarea className="title-box mt-4 pt-4 ps-4" placeholder="Video:" onChange={(e) => {setAddForm(e.target.value)}} name="comment" id cols={5} rows={2} defaultValue={""} />
          <input className="video-form" src={require("../../Assets/Images/image.png")} type="file" id="image" />
          <button className="mt-5 send-comment-button">Send</button>
        </div>
      </div>
    </div>
  </section>
  </form>
  {/*Text Area Section End*/}
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

export default Add;