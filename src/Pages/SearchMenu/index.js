import Footer from "../../components/footer";
import profile from "../../assets/assets/img/profile.jpg";
import imageSearch from "../../assets/assets/img/chiken.jpg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SearchMenu() {
  const name = localStorage.getItem("name");
  const photo = localStorage.getItem("photo");
  const [searchText, setSearchText] = useState();
  const [data, setData] = useState();
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1)

  const navigate = useNavigate();

  const sortOptions = ["asc", "desc"]

  useEffect(() => {
    getData(1, 5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async (page, limit) => {
    var url = `${process.env.REACT_APP_BASE_URL}/recipes?page=${page}&limit=${limit}`;
    return await axios
      .get(url)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        setCurrentPage(page)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function searchRecipes() {
    var url = `${process.env.REACT_APP_BASE_URL}/recipes?search=` + searchText;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        if (!searchText) {
          window.location.reload(false);
        }
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleSort = async (e) => {
    let value = e.target.value;
    setSort(value);
    return await
      axios.get(`${process.env.REACT_APP_BASE_URL}/recipes?sort=${value}&limit=5`)
        .then((res) => {
          console.log(res)
          setData(res.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
  }

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
    navigate("/login");
  };


  const pagination = () => {
    if (currentPage === 1) {
      // console.log(currentPage)
      return (
        <div className="container-fluid" style={{ marginTop: "120px" }}>
          <div className="row" style={{}}>
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="date">Show 1-5 From 10</div>
              <button onClick={() => getData(currentPage + 1, 5)} className="btn btn-warning btn-sm text-white shadow-none ms-4" style={{ minWidth: "100px", fontSize: "20px" }}>
                Next
              </button>
            </div>
          </div>
        </div>
      )
    } else if (currentPage !== 1) {
      return (
        <div className="container-fluid" style={{ marginTop: "120px" }}>
          <div className="row" style={{}}>
            <div className="col-lg-12 d-flex justify-content-center">
              <button onClick={() => getData(currentPage - 1, 5)} className="btn btn-warning btn-sm text-white shadow-none" style={{ minWidth: "100px", fontSize: "20px" }}>
                Prev
              </button>
              <div className="date ms-4 mt-2">Show 6-10 From 10</div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <div className="container">
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
                    <Link className="nav-link" to={'/home'}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/detail-profile-liked'}>
                      My Recipes
                    </Link>
                  </li>
                </ul>
                <div
                  className="image-profile d-flex"
                  style={{ marginRight: "70p" }}
                >
                  <div className="line-left"></div>
                  <img src={photo ? photo : profile} alt="" width="64px" height="64px" />
                  <ul
                    style={{
                      listStyle: "none",
                      marginLeft: "-10px",
                      marginTop: "4px",
                    }}
                  >
                    <li>
                      <p>{name ? name : ""}</p>
                      {name && (
                        <a href="" onClick={() => logout()}>Logout</a>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>

      <section
        className="profile-recipes container"
        style={{ marginTop: "38px" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="row discover">
                <div className="col-sm-8" style={{ alignItems: "left" }}>
                  <p>Discover Recipe & Delicious Food</p>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar bg-body-tertiary search">
            <div className="">
              <div
                className="d-flex"
                role="search"
                style={{ width: "550px" }}
              >
                <input
                  className="form-control me-2 mr-4"
                  type=""
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  className="btn"
                  style={{ marginLeft: "20px", backgroundColor: '#EFC81A', color: 'white' }}
                  onClick={(e) => searchRecipes(e)}
                >
                  Search
                </button>
              </div>
              <select className="btn btn-warning p-3 dropdown-toggle text-white shadow-none mt-2" onChange={handleSort} value={sort}>
                <option>Sort By: </option>
                {sortOptions.map((item, index) => (
                  <option value={item} key={index}>{item}</option>
                ))}
              </select>
            </div>
          </nav>
          <div className="menu-search d-flex">
            <button
              type="button"
              className="btn btn-info"
              style={{ backgroundColor: "#EFC81A", width: "90px" }}
            >
              New
            </button>
            <button
              type="button"
              className="btn btn-info"
              style={{ backgroundColor: "#EFC81A", width: "130px" }}
            >
              Popular
            </button>
            <button
              type="button"
              className="btn btn-dark"
              style={{ backgroundColor: "#00E092", width: "130px" }}
            >
              Vegetarian
            </button>
            <button
              type="button"
              className="btn btn-dark"
              style={{ backgroundColor: "#00E092", width: "130px" }}
            >
              Breakfast
            </button>
          </div>
        </div>
      </section>

      {data?.map((item, index) => (
        <section
          className="detail-recipes container"
          style={{ marginTop: "73px" }} key={index}
        >
          <div className="container-fluid">
            <div
              className="row stify-jucontent-start"
              style={{ marginBottom: "40px" }}
            >
              <div className="col-sm-3">
                <div className="row mb-4">
                  <div className="col-sm-2">
                    <Link to={'/detail-menu/' + item.id}>
                      <img
                        src={item.photo}
                        style={{
                          width: "260px",
                          height: "300px",
                          borderRadius: "5px",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="col-sm-5">
                  <Link to={'/detail-menu/' + item.id} className="title-link text-black text-decoration-none">
                    <h3>{item.title}</h3>
                  </Link>
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
                <div className="col-sm-8 mt-2">
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
                  <div className="row">
                    <div className="col-sm-2">
                      <img
                        className="rounded-circle mt-3"
                        src={item.photo_users}
                        width="50px"
                        height="50px"
                      />
                    </div>
                    <div className="col-sm-3 justify-content-center mt-4">
                      <p>{item.creator}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      ))
      }
      <div>{pagination()}</div>
      <Footer />
    </>
  );
}
