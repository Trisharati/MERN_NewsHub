import React from 'react'

const First = (props) => {

localStorage.clear()

  return (
    <div>

    <nav className="navbar navbar-dark navbar-expand-lg"
                    style={{backgroundColor:'#7D0011'}}>
            <div className="container px-lg-5">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link " aria-current="page" href="/register" 
                        onClick={props.onSignUp}><b>Register</b></a></li>
                        <li className="nav-item"><a className="nav-link" href="/login"><b>Login</b></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Header--> */}
        <header className="py-5" >
            <div className="container px-lg-5" >
                <div className="p-4 p-lg-5 rounded-3 text-center" style={{backgroundColor:'#FFFB87'}}>
                    <div className="m-4 m-lg-5" style={{backgroundColor:'#FFFB87'}}>
                        <h1 className="display-5 fw-bold">A Warm Welcome to Your Personalised News Hub!</h1>
                        <p className="fs-4">Dive into a curated collection of the latest news articles, thoughtfully selected to match your preferences and preferences.</p>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- Page Content--> */}
        <section className="pt-4">
            <div className="container px-lg-5">
                {/* <!-- Page Features--> */}
                <div className="row gx-lg-5">
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" style={{backgroundColor:'#FFDACC'}}>
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection"></i></div>
                                <h2 className="fs-4 fw-bold">Register Yourself</h2>
                                <p className="mb-0">Sign up with a few simple steps, create your account, and unlock a world of tailored news content that matches your interests.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" style={{backgroundColor:'#DCB8C6'}}>
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download"></i></div>
                                <h2 className="fs-4 fw-bold">Login To Your Account</h2>
                                <p className="mb-0">Enter your credentials to open the gateway to a diverse range of news stories curated just for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" style={{backgroundColor:'#D4FFF5'}}>
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-card-heading"></i></div>
                                <h2 className="fs-4 fw-bold">Switch to Any Genre Anytime</h2>
                                <p className="mb-0">Whether it's politics, technology, entertainment, sports, or more, choose the subjects that intrigue you the most. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" style={{backgroundColor:'#FFFAA3'}}>
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap"></i></div>
                                <h2 className="fs-4 fw-bold">Save News for Later</h2>
                                <p className="mb-0"> Build your own collection of articles, creating a personalized reading list tailored to your schedule.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" style={{backgroundColor:'#CEFFA3'}}>
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-code"></i></div>
                                <h2 className="fs-4 fw-bold">Scroll Through All News Gallery</h2>
                                <p className="mb-0">Explore a captivating news gallery where stories from around the world come to life.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" style={{backgroundColor:'#A994FF'}}>
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-patch-check"></i></div>
                                <h2 className="fs-4 fw-bold">Logout Safely</h2>
                                <p className="mb-0">When you're ready to take a break, log out of your account for a secure and seamless experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="py-5"
        style={{backgroundColor:'#7D0011'}}>
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; News Hub 2023</p></div>
        </footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>





    </div>
  )
}

export default First