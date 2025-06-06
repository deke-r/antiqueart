import '../styles/signupmodal.css';
import {useState} from 'react';
export default function SignUpModal({toggleForm}) {

    const [showPassowrd,setShowPassword]=useState(false)
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
                          <h4 className="login-message">SIGN UP FOR SALE UPDATES</h4>
                        </div>

                           <div className="auth-module">
                        <div className="text-center mb-3">
                          <p className="login-subheader">Get ideas, inspirations & offers in your inbox</p>
                          <h5 className="form-heading fw-semibold">Be the first to know.</h5>
                        </div>

                        <form className="auth-form">
                             <div className="mb-3">
                            <input
                              type="text"
                              className="form-control auth-input rounded-0 shadow-none"
                              placeholder="Name"
                              required
                            />
                          </div>
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
                              type={showPassowrd ? 'text':'password'}
                              className="form-control auth-input rounded-0 shadow-none"
                              placeholder="Password"
                              required
                            />
                            <span className='link-color p-0 text-decoration-none pointer fw-semibold f_11'
                            style={{position:'absolute',top:15,right:10}}
                            onClick={() => setShowPassword(!showPassowrd)}
                            >
                                {
                                    showPassowrd ?  'Show Passoword' : 'Hide Passowrd'
                                }
                                
                               </span>
                          </div>

                          <button type="submit" className="btn rounded-0 btn-primary w-100 auth-btn">
                         Sign Up
                          </button>
                        </form>

                        <div className="text-center f_14 mt-3">
                          <span >Have an account?  </span>
                          <span className=" link-color p-0 text-decoration-none pointer fw-semibold f_14" onClick={toggleForm}>
                            Log-in
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