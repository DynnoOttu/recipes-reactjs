import Footer from "../../components/footer";
import profile from "../../assets/assets/img/profile.jpg";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addMenu } from "../../Storages/Actions/menu";

let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0ZDY4MjgwLTU4NGUtNDk1Yy04MDE2LTEyMmRlMWU3MzMzNiIsImVtYWlsIjoiZHFqNDc4ODNAbmV6aWQuY29tIiwiZnVsbG5hbWUiOiJkcWo0Nzg4MyIsInBob3RvIjpudWxsLCJ2ZXJpZiI6MSwib3RwIjoiNjk3MDgzIiwiY3JlYXRlZF9hdCI6bnVsbCwiaWF0IjoxNjg0NjgwNDAzLCJleHAiOjE2ODU5OTQ0MDN9.BqlfYznX_SjQn6pRoQH82qqOUbqbRzGBtG7BQ9ZLJXg";

export default function AddMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const add_menu = useSelector((state) => state.add_menu);

  const [inputData, setInputData] = useState({
    title: "",
    ingredients: "",
    category_id: 1,
  });
  const [photo, setPhoto] = useState();
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  // const alertTime = () => {
  //     setTimeout(setAlert(false), 3000)
  // }

  const postForm = (e) => {
    e.preventDefault();
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    };

    const formData = new FormData();
    formData.append("title", inputData.title);
    formData.append("ingredients", inputData.ingredients);
    formData.append("category_id", inputData.category_id);
    formData.append("photo", photo);
    console.log(formData);
    dispatch(addMenu(formData, headers, navigate));
  };

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
                      <a className="nav-link" href="javascript:void(0)">
                        Add recipe
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/profile'}>
                        Profile
                      </Link>
                    </li>
                  </ul>
                  <div className="image-profile d-flex">
                    <div className="line-left"></div>
                    <img src={profile} alt="" width="64px" height="64px" />
                  </div>
                </div>
              </div>
            </nav>
          </section>
        </div>

        <section>
          <div className="add-menu container mt-5">
            <div className="row justify-content-center align-items-center inner-row">
              <div className="col-sm-8">
                {add_menu.isLoading && (
                  <p className="spinner-border text-warning"></p>
                )}
                <form onSubmit={postForm}>
                  <div className="photo mb-3">
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      name="photo"
                      onChange={handlePhoto}
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="title"
                    value={inputData.title}
                    name="title"
                    required
                    onChange={handleChange}
                  />
                  <textarea
                    className="form-control mt-3"
                    value={inputData.ingredients}
                    name="ingredients"
                    placeholder="Ingredients"
                    rows="6"
                    id="comment"
                    required
                    onChange={handleChange}
                  ></textarea>
                  {/* <div className="row">
                            <div className="col-sm-3">
                                <select className="form-select mt-3">
                                    <option>Category</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                            </div>
                        </div> */}

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

                {alert && (
                  <div
                    className="alert alert-success mt-4"
                    role="alert"
                    onClick={() => setAlert(false)}
                  >
                    Input Recipes Success
                  </div>
                )}

                {add_menu.errorMessage && (
                  <div
                    className="alert alert-danger mt-4"
                    role="alert"
                    onClick={() => setAlert(false)}
                  >
                    {add_menu.errorMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </body >
    </>
  );
}
