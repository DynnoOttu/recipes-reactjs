import { React, useState, useEffect } from 'react'
import Footer from "../../components/footer";
import profile from "../../assets/assets/img/profile.jpg";
import axios from 'axios'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { editMenu } from '../../Storages/Actions/menu'

export default function EditMenu() {
  const photoUser = localStorage.getItem("photo");

  const { id } = useParams()

  const [updateData, setUpdateData] = useState({
    title: "", ingredients: "", category_id: 1
  })
  const [photo, setPhoto] = useState()
  const [alert, setAlert] = useState(false)
  const [data, setData] = useState()
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    var url = `${process.env.REACT_APP_BASE_URL}/recipes/${id}`
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return console.log(data)
  };

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
    window.URL.revokeObjectURL(currentPhoto);
    setCurrentPhoto(window.URL.createObjectURL(e.target.files[0]));
  }

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value
    })
  }

  const updateForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", updateData.title)
    formData.append("ingredients", updateData.ingredients)
    formData.append("category_id", updateData.category_id)
    formData.append("photo", photo)
    console.log(formData)

    dispatch(editMenu(id, formData, navigate))
  }


  return (
    <>
      <body className="justify-content-center align-items-center">
        <div className="">
          <section className="justify-content-center align-items-center">
            <nav className="navbar navbar-expand-sm navbar-light">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mynavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <Link className="nav-link active" to={'/home'}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/add-menu'}>
                        Add recipe
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/search-menu'}>
                        Search menu
                      </Link>
                    </li>
                  </ul>
                  <div className="image-profile d-flex">
                    <div className="line-left"></div>
                    <img src={photoUser ? photoUser : profile} alt="" width="64px" height="64px" />
                  </div>
                </div>
              </div>
            </nav>
          </section>
        </div>
        <section >
          {data?.map((item, index) => (
            <div className="add-menu container mt-5" key={index}>
              <div className="row justify-content-center align-items-center inner-row">
                <div className="col-sm-8">
                  <form onSubmit={updateForm}>
                    <img
                      src={currentPhoto || item.photo}
                      alt=""
                      width="60%"
                      height="60%"
                      style={{ borderRadius: "5px" }}
                    />
                    <input type='file'
                      className="form-control mt-3"
                      onChange={handlePhoto}
                      name='photo'
                      placeholder='Add Photo'
                    />
                    <input
                      onChange={handleChange}
                      value={updateData.title}
                      type="text"
                      className="form-control mt-3"
                      placeholder={item.title}
                      name='title'
                    />
                    <textarea
                      onChange={handleChange}
                      value={updateData.ingredients}
                      className="form-control mt-3"
                      placeholder={item.ingredients}
                      rows="6"
                      id="comment"
                      type="text"
                      name='ingredients'
                    ></textarea>
                    <div className="row">
                      <div className="col-sm-3">
                        <input type='number' onChange={handleChange} value={updateData.category_id} className="form-control my-3" name='category_id' required placeholder={item.category_id} />
                      </div>
                    </div>
                    <div className="row justify-content-center align-items-center inner-row mt-5">
                      <div className="col-sm-6">
                        <button
                          type="submit"
                          className="btn btn-warning"
                          style={{
                            width: "300px",
                            height: "46px",
                            backgroundColor: "#EFC81A",
                            color: "#fff",
                            border: "none",
                          }}
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </body>
    </>
  );
}
