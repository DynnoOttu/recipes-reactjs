import Footer from '../../components/footer';
import profile from '../../assets/assets/img/profile.jpg'
import chiken from '../../assets/assets/img/chiken.jpg'

export default function EditMenu(){
    return(
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
                            <img src={profile} alt="" width="64px" height="64px"/>
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
                    <form>
                        <img src={chiken} alt="" width="60%" height="60%" style={{borderRadius: "5px"}}/>
                        <input type="text" className="form-control mt-3" placeholder="Chiken"/>
                        <textarea className="form-control mt-3" placeholder="Ingradients" rows="6" id="comment" name="text">
                        </textarea>
                        <div className="row">
                            <div className="col-sm-3">
                                <select className="form-select mt-3">
                                    <option>Main Course</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center inner-row mt-5">
                            <div className="col-sm-6">
                                <button type="button" className="btn btn-warning" style={{width: "300px",
                                height: "46px", backgroundColor: "#EFC81A", color: "#fff", border: "none"}}>Post</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</body>
        </>
    )
}