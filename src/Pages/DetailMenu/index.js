import Footer from '../../components/footer';
import profile from '../../assets/assets/img/profile.jpg'
import chiken from '../../assets/assets/img/chiken.jpg'
import like from '../../assets/assets/img/icon/like.png'
import bookmarks from '../../assets/assets/img/icon/bookmarks.png'

export default function DetailMenu() {
    return (
        <>
            <body className="justify-content-center align-items-center">
                <div className="">
                    <section className="justify-content-center align-items-center">
                        <nav className="navbar navbar-expand-sm navbar-light">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="mynavbar">
                                    <ul className="navbar-nav me-auto">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="javascript:void(0)">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0)">Add recipe</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0)">Search menu</a>
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

                <section className="profile-recipes" style={{ marginTop: "164px" }}>
                    <div className="container-fluid">
                        <div className="row" style={{ justifyContent: "center" }}>
                            <div className="col-sm-10">
                                <div className="row">
                                    <div className="col-sm-8" style={{ display: "flex", alignItems: "center" }}>
                                        <div className="" style={{
                                            width: "3px",
                                            height: "70px",
                                            backgroundColor: "var(--yellow)",
                                            marginRight: "16px",
                                            marginTop: "1px"
                                        }}></div>
                                        <img src={profile} width="64px" height="64px" />
                                        <div className="users-profile" style={{ marginLeft: "38px" }}>
                                            <h5 className="m-0">Dynno</h5>
                                            <p className="m-0">10 Recipes</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4" style={{ marginTop: "10px" }}>
                                        <span style={{ justifyContent: "right" }}>21 Februari</span>
                                        <span style={{ justifyContent: "right" }}>20 Likes - 2 Comments</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="detail-menu">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Egg Sandwich</h1>
                                <div className="image text-center">
                                    <img src={chiken} className="rounded" alt="..." style={{
                                        width: "600px",
                                        height: "600px"
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container" style={{ marginTop: "109px;" }}>
                        <div className="ingradients">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4>Ingradients</h4>
                                    <p>- 2 eggs </p>
                                    <p>- 2 tbsp mayonnaise</p>
                                    <p>- 3 slices bread</p>
                                    <p>- a little butter</p>
                                    <p>- ⅓ carton of cress</p>
                                    <p>- 2-3 slices of tomato or a lettuce leaf
                                        and a slice of ham or cheese</p>
                                    <p>- crisps , to serve</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-sm-2">
                                    <div className="icons">
                                        <img src={like} alt="" />
                                        <img src={bookmarks} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="container mt-5 border-top border-warning p-5 border-bottom p-5">
                        <div className="comment">
                            <div className="row" style={{ justifyContent: "left" }}>
                                <div className="col-sm-10">
                                    <div className="row">
                                        <div className="col-sm-4" style={{ display: "flex", alignItems: "center" }}>
                                            <img src={profile} width="64px" height="64px" />
                                            <div className="users-profile" style={{ marginLeft: "38px" }}>
                                                <h5 className="m-0">Dynno</h5>
                                                <p className="m-0">10 Recipes</p>
                                            </div>
                                            <div className="" style={{
                                                width: "3px",
                                                height: "70px",
                                                backgroundColor: "var(--yellow)",
                                                marginLeft: "40px",
                                                marginTop: "1px"
                                            }}></div>
                                        </div>
                                        <div className="col-sm-6" style={{ marginTop: "15px" }}>
                                            <span>Wow, I just made this and it was delicious! Thanks for sharing!</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-10 mt-4">
                                    <div className="row">
                                        <div className="col-sm-4" style={{ display: "flex", alignItems: "center" }}>
                                            <img src={profile} width="64px" height="64px" />
                                            <div className="users-profile" style={{ marginLeft: "38px" }}>
                                                <h5 className="m-0">Dynno</h5>
                                                <p className="m-0">10 Recipes</p>
                                            </div>
                                            <div className="" style={{
                                                width: "3px", height: "70px",
                                                backgroundColor: "var(--yellow)",
                                                marginLeft: "40px",
                                                marginTop: "1px"
                                            }}></div>
                                        </div>
                                        <div className="col-sm-6" style={{ marginTop: "15px" }}>
                                            <span style={{ justifyContent: "center" }}>So simple and delicious!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mt-5" >
                        <div className="send-comment">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Your comment here!" id="floatingTextarea2" style={{ height: "120px", backgroundColor: "#F6F5F4" }}></textarea>
                                        <label htmlFor="floatingTextarea2" style={{ color: "#666666" }}>Your comment here!</label>
                                        <button type="button" className="btn btn-danger mt-3" style={{
                                            width: "300px",
                                            height: "46px", backgroundColor: "#FFB167", border: "none"
                                        }}>Send a comment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />


            </body>
        </>
    )
}