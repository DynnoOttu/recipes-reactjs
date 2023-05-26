import Footer from "../../components/footer";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMenu, getMenu } from "../../Storages/Actions/menu";
import profile from "../../assets/assets/img/profile.jpg";

let url = "https://real-teal-dragonfly-gear.cyclic.app/recipes";

export default function DetailProfileLiked() {


  const photoUser = localStorage.getItem("photo");

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menu = useSelector((state) => state.menu);
  const delete_menu = useSelector((state) => state.delete_menu);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const editRecipes = (id) => {
    navigate(`/edit-menu/${id}`);
  };

  const confirmDelete = (id) => {
    setSelected(id);
    handleShow();
  };

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  useEffect(() => {
    dispatch(getMenu());
    handleClose();
  }, [delete_menu.data]);

  const deleteData = (id) => {
    dispatch(deleteMenu(id));
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
                      <a className="nav-link active" href={"/home"}>
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={"/add-menu"}>
                        Add recipe
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={"/search-menu"}>
                        Search menu
                      </a>
                    </li>
                  </ul>
                  <div className="image-profile d-flex">
                    <div className="line-left"></div>
                    <img
                      src={photoUser ? photoUser : profile}
                      alt=""
                      width="64px"
                      height="64px"
                    />
                  </div>
                </div>
              </div>
            </nav>
          </section>
        </div>

        <section className="profile-recipes" style={{ marginTop: "164px" }}>
          <div className=" container" style={{ marginLeft: "130px" }}>
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col">
                <div className="row">
                  <div
                    className="col-8"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div
                      className=""
                      style={{
                        width: "3px",
                        height: "70px",
                        backgroundColor: "var(--yellow)",
                        marginRight: "16px",
                        marginTop: "1px",
                      }}
                    ></div>
                    <img
                      src={photoUser ? photoUser : profile}
                      width="64px"
                      height="64px"
                    />
                    <div className="" style={{ marginLeft: "38px" }}>
                      <h5 className="m-0">Dynno</h5>
                      <p className="m-0">10 Recipes</p>
                    </div>
                  </div>
                  <div className="col-4" style={{ marginTop: "10px" }}>
                    <span>21 Februari</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row like"
              style={{ marginTop: "37px", borderBottom: "10px" }}
            >
              <div className="col-8">
                <a className="recipes" href="" style={{ color: "#3F3A3A" }}>
                  Recipes
                </a>
                <a
                  className="bookmarked"
                  href="detailProfileBokkmarked.html"
                  style={{ color: "#B6B6B6" }}
                >
                  Bookmarked
                </a>
                <a className="liked" href="" style={{ color: "#B6B6B6" }}>
                  Liked
                </a>
                <div className="col-md-10">
                  <div
                    className="line-button"
                    style={{
                      backgroundColor: "#EFC81A",
                      height: "15px",
                      width: "570px",
                      marginTop: "16px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="detail-recipes"
          style={{ marginLeft: "130px", marginTop: "73px" }}
        >
          <div className="container">
            {menu.isLoading && <p className="spinner-border text-warning"></p>}
            {menu.isLoading && <p>Loading...</p>}
            {menu.data?.map((item, index) => (
              <div className="row stify-jucontent-start mt-5" key={item.id}>
                <div className="col-lg-3">
                  <div className="row mb-4">
                    <div className="col-2">
                      <img
                        src={item.photo}
                        style={{
                          width: "270px",
                          height: "275px",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <div className="col-5">
                    <h5
                      className="m-0"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "24px",
                      }}
                    >
                      {item.title}
                    </h5>
                    <p
                      className="m-0"
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        color: "#B7B7B7",
                      }}
                    >
                      {item.ingredients}
                    </p>
                  </div>
                  <div className="col-8 mt-2">
                    <button
                      type="button"
                      className="btn"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#EFC81A",
                        color: "#ffff",
                      }}
                    >
                      10 Likes - 12 Comment - 3 Bookmark
                    </button>
                    <Link to={`/edit-menu/${item.id}`}>
                      <button
                        type="button"
                        className="btn mt-4"
                        style={{
                          fontSize: "14px",
                          backgroundColor: "#30C0F3",
                          color: "#ffff",
                          marginRight: "50px",
                        }}
                      >
                        Edit Menu
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn mt-4"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#F57E71",
                        color: "#ffff",
                      }}
                      onClick={() => confirmDelete(item.id)}
                    >
                      Delete Menu
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Delete*/}
          <Modal show={show} onHide={() => handleClose()}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Recipes</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose()}>
                Close
              </Button>
              <Button variant="danger" onClick={() => deleteData(selected)}>
                Delete Data
              </Button>
            </Modal.Footer>
          </Modal>
        </section>

        <section className="mt-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a
                  className="page-link"
                  style={{
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#EFC81A",
                    color: "#fff",
                  }}
                  href="#"
                >
                  Prev
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  style={{ border: "none", color: "black" }}
                >
                  Show 6-10 from 10
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <Footer />
      </body >
    </>
  );
}
