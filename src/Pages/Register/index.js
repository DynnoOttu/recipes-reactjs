export default function Register(){
    return(
        <>
            <body className="justify-content-center align-items-center">
    <div className="recipe">
        <h2>Recipe...</h2>
        <h2 className="started">Let's Get Started</h2>
        <p style={{textAlign: "center"}}>creative new account to access all features</p>
    </div>
    <div className="container" style={{marginTop: "51px"}}>
        <div className="row justify-content-center align-items-center inner-row">
            <div className="col-lg-5 col-md-7">
                <div className="form-box">
                    <form className="form-input">
                        <div className="mb-2">
                            <label for="disabledTextInput" className="form-label">Name</label>
                            <input type="text" id="disabledTextInput" className="input-form form-control"
                                placeholder="Enter Your Name"/>
                        </div>
                        <div className="mb-2">
                            <label for="disabledTextInput" className="form-label">Email</label>
                            <input type="text" id="disabledTextInput" className="form-control"
                                placeholder="Enter Email Address" />
                        </div>
                        <div className="mb-2">
                            <label for="disabledTextInput" className="form-label">Password</label>
                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="mb-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
                                <label className="form-check-label" for="disabledFieldsetCheck">
                                    I agree to treams & condition
                                </label>
                            </div>
                        </div>
                        <a type="submit" style={{paddingTop: "18px"}} className="btn button-input" data-bs-toggle="modal" data-bs-target="#myModal">Register Account</a>
                        <div className="already">
                            <p>Already have account? <span><a href="login.html">Log in Here</a></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    {/* The Modal */} 
    <div className="modal modal-alert" id="myModal">
        <div className="modal-dialog modal-lg modal-sm">
            <div className="modal-content rounded-0">


                <div className="modal-header" style={{borderBottom: "0", justifyContent: "center"}}>
                    <h4>You're all set!</h4>
                </div>

                <div className="modal-body" style={{borderBottom: "0", justifyContent: "center"}}>
                    <p>Please check your email account for verification</p>
                </div>

                <div className="modal-footer button-oke" style={{marginTop: "100px", borderTop: "0", justifyContent: "center"}}>
                    <button type="button" className="btn" data-bs-dismiss="modal">Oke</button>
                </div>

            </div>
        </div>
    </div>
</body>

        </>
    )
}