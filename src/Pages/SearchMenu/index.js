import Footer from '../../components/footer';
import profile from '../../assets/assets/img/profile.jpg'
import imageSearch from '../../assets/assets/img/chiken.jpg'

export default function SearchMenu(){
    return(
        <>
        <body className="justify-content-center align-items-center">
    <div className="container">
        <section className="justify-content-center align-items-center">
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="register.html">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="login.html">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="serachMenu.html">Search menu</a>
                            </li>
                        </ul>
                        <div className="image-profile d-flex" style={{marginRight: "70p"}}>
                            <div className="line-left"></div>
                            <img src={profile} alt="" width="64px" height="64px"/>
                            <ul style={{listStyle: "none", marginLeft: "-10px", marginTop: "4px"}}>
                                <li>
                                    <p>Dynno</p>
                                    <a href="">Logout</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    </div>

    <section className="profile-recipes container" style={{marginTop: "38px"}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    <div className="row discover">
                        <div className="col-sm-8" style={{alignItems: "left"}}>
                            <p>Discover Recipe
                                & Delicious Food</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar bg-body-tertiary search">
                <div className="">
                    <form className="d-flex" role="search" style={{width: "550px"}}>
                        <input className="form-control me-2 mr-4" type="" value="telur gulung"/>
                        <button className="btn btn-outline-success" type="submit" style={{marginLeft: "20px"}}>Search</button>
                    </form>
                </div>
            </nav>
            <div className="menu-search d-flex">
                <button type="button" className="btn btn-info" style={{backgroundColor: "#EFC81A", width: "90px"}}>New</button>
                <button type="button" className="btn btn-info"
                    style={{backgroundColor: "#EFC81A", width: "130px"}}>Popular</button>
                <button type="button" className="btn btn-dark"
                    style={{backgroundColor: "#00E092", width: "130px"}}>Vegetarian</button>
                <button type="button" className="btn btn-dark"
                    style={{backgroundColor: "#00E092", width: "130px"}}>Breakfast</button>
            </div>
        </div>
    </section>



    <section className="detail-recipes container" style={{marginTop: "73px"}}>
        <div className="container-fluid">
            <div className="row stify-jucontent-start" style={{marginBottom: "40px"}}>
                <div className="col-sm-3">
                    <div className="row mb-4">
                        <div className="col-sm-2">
                            <img src={imageSearch} style={{width: "260px", height: "300px", borderRadius: "5px"}}/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="col-sm-5">
                        <h5 className="m-0" style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "24px"}}>Bomb Chicken</h5>
                        <p className="m-0" style={{fontWeight: "500",
                        fontSize: "20px", color: "#B7B7B7"}}>Ingredients: chicken, dumpling wrap, garlic, spring onion,
                            soy sauce, black sesame</p>
                    </div>
                    <div className="col-sm-8 mt-2">
                        <button type="button" className="btn"
                            style={{fontSize: "14px", backgroundColor: "#EFC81A", color: "#ffff"}}>10 Likes -
                            12 Comment - 3
                            Bookmark
                        </button>
                            <div className="row">
                                <div className="col-sm-2">
                                    <img className="rounded-circle mt-3" src={profile} width="50px" height="50px"/>
                                </div>
                                <div className="col-sm-3 justify-content-center mt-4">
                                    <p>Dynno</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            <div className="row stify-jucontent-start" style={{marginBottom: "40px"}}>
                <div className="col-sm-3">
                    <div className="row mb-4">
                        <div className="col-sm-2">
                            <img src={imageSearch} style={{width: "260px", height: "300px", borderRadius: "5px"}}/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="col-sm-5">
                        <h5 className="m-0" style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "24px"}}>Bomb Chicken</h5>
                        <p className="m-0" style={{fontWeight: "500",
                        fontSize: "20px", color: "#B7B7B7"}}>Ingredients: chicken, dumpling wrap, garlic, spring onion,
                            soy sauce, black sesame</p>
                    </div>
                    <div className="col-sm-8 mt-2">
                        <button type="button" className="btn"
                            style={{fontSize: "14px", backgroundColor: "#EFC81A", color: "#ffff"}}>10 Likes -
                            12 Comment - 3
                            Bookmark
                        </button>
                            <div className="row">
                                <div className="col-sm-2">
                                    <img className="rounded-circle mt-3" src={profile} width="50px" height="50px"/>
                                </div>
                                <div className="col-sm-3 justify-content-center mt-4">
                                    <p>Dynno</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

</div>



    </section>

    <section className="mt-5 container">
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="#"
                        tabindex="-1"
                        style={{border: "none", borderRadius: "5px", backgroundColor: "#EFC81A", color: "#fff"}}>Prev</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#" style={{border: "none", color: "black"}}>Show 6-10 from 10</a>
                </li>
            </ul>
        </nav>
    </section>

    <Footer/>
</body>
        </>
    )
}