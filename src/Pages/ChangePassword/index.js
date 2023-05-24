import profile from '../../assets/assets/img/profile.jpg'


export default function ChangePassoword() {
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
                <div className="recipe" style={{ marginbottom: "121px" }}>
                    <h2>Change Your Password Here</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center align-items-center inner-row">
                        <div className="col-lg-5 col-md-7">
                            <div className="form-box">
                                <form className="form-login">
                                    <div className="mb-2">
                                        <label htmlFor="disabledTextInput" className="form-label">Old Password</label>
                                        <input type="text" id="disabledTextInput" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="disabledTextInput" className="form-label">New Password</label>
                                        <input type="text" id="disabledTextInput" className="form-control" />
                                    </div>
                                    <a type="submit" className="btn button-input" data-bs-toggle="modal" data-bs-target="#myModal"
                                        style={{ paddingTop: "18px" }}>Update Profile</a>
                                    <p className="link-update-profile">Back to edit profile? <span><a href="">click
                                        here</a></span></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal modal-alert" id="myModal">
                    <div className="modal-dialog modal-lg modal-sm">
                        <div className="modal-content rounded-0">


                            <div className="modal-header" style={{ borderBottom: "0", justifyContent: "center", textAlign: "center" }}>
                                <h4>Password has been updated</h4>
                            </div>


                            <div className="modal-body" style={{ borderBottom: "0", justifyContent: "center" }}>
                                <p>please login again</p>
                            </div>


                            <div className="modal-footer button-oke" style={{ marginTop: "100px", borderTop: "0", justifyContent: "center" }}>
                                <button type="button" className="btn" data-bs-dismiss="modal">Oke</button>
                            </div>

                        </div>
                    </div>
                </div>

            </body>

        </>
    )
}