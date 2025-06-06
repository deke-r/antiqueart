import '../styles/signupmodal.css'
export default function LogInModal({toggleForm}) {
    return (
        <>
           <div className="row g-0 h-100">
              
             <div
  className="col-lg-6 banner-section d-flex align-items-center justify-content-center"
  style={{
    backgroundImage: 'url("/img/10_Off_Desk_popup.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '90vh',
    
  }}
>

</div>


            
                <div className="col-lg-6 content-section d-flex align-items-center position-relative">
                  
                         <button type="button" className="btn-close shadow-none position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close"></button>
                   
                  <div className="w-100 pt-4">
              
                      <div className="auth-module">
                        <div className="text-center mb-4">
                          <h4 className="login-message">SIGN IN FOR SALE UPDATES</h4>
                        </div>

                           <div className="auth-module">
                        <div className="text-center mb-3">
                          <p className="login-subheader">Login to explore great designs</p>
                          <h5 className="form-heading fw-semibold">Login with your email ID</h5>
                        </div>

                        <form className="auth-form">
                           
                          <div className="mb-3">
                            <input
                              type="email"
                              className="form-control auth-input rounded-0 shadow-none"
                              placeholder="Email Address"
                              required
                            />
                          </div>

                          <div className="mb-3 position-relative">
                            <input
                              type='password'
                              className="form-control auth-input rounded-0 shadow-none"
                              placeholder="Password"
                              required
                            />
                          </div>

                          <button type="submit" className="btn rounded-0 btn-primary w-100 auth-btn">
                         Log In
                          </button>
                        </form>

                        <div className="text-center f_14 mt-3">
                          <span>Don't have an account?   </span>
                          <span className=" link-color fw-semibold p-0 text-decoration-none pointer" onClick={toggleForm}>
                            Sign-up
                          </span>
                        </div>
                      </div>

                        <div className="social-section">
                          <h5 className=" text-center my-4 text-uppercase f_12 fw-semibold">Social sign-in</h5>

                          <div className="row g-2 mb-3">
                          
                            <div className="col-12">
                               <button type="button" className="btn rounded-0 w-100 py-2 btn-outline-dark d-flex align-items-center justify-content-center gap-2">
                  <img src="/img/google-logo.png" width={20} height={20} alt="Google" />
                  Connect with Google
                </button>
                            </div>
                          </div>
                        </div>


                        <div className="text-center mt-4">
                          <p className="terms-text">
                            By continuing, you agree to our{" "}
                            <a href="/terms-of-use" className="link-color">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="/privacy-policy" className="link-color">
                              Privacy & Legal Policy
                            </a>
                          </p>
                        </div>

                        

                      </div>
              

                 
                   
             

               
                  </div>
                </div>
              </div>
        
        </>
    );
}