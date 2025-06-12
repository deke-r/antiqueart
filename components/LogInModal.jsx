import '../styles/signupmodal.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../Context/AuthContext';
export default function LogInModal({ toggleForm }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();


if (res.status === 200) {
  toast.success('Login successful!');
  login(result.user.token);

  setTimeout(() => {
    document.querySelector('[data-bs-dismiss="modal"]')?.click(); 
    router.push('/'); 
  }, 1000);
}

    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
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
        ></div>

        <div className="col-lg-6 content-section d-flex align-items-center position-relative">
          <button
            type="button"
            className="btn-close shadow-none position-absolute top-0 end-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>

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

                <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className={`form-control auth-input rounded-0 shadow-none ${
                        errors.email ? 'is-invalid' : ''
                      }`}
                      placeholder="Email Address"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email.message}</div>
                    )}
                  </div>

                  <div className="mb-3 position-relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={`form-control auth-input rounded-0 shadow-none ${
                        errors.password ? 'is-invalid' : ''
                      }`}
                      placeholder="Password"
                      {...register('password', {
                        required: 'Password is required',
                      })}
                    />
                    <span
                      className="link-color p-0 text-decoration-none pointer fw-semibold f_11"
                      style={{ position: 'absolute', top: 15, right: 10 }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide Password' : 'Show Password'}
                    </span>
                    {errors.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn rounded-0 btn-primary w-100 auth-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      'Log In'
                    )}
                  </button>
                </form>

                <div className="text-center f_14 mt-3">
                  <span>Don't have an account? </span>
                  <span
                    className="link-color fw-semibold p-0 text-decoration-none pointer"
                    onClick={toggleForm}
                  >
                    Sign-up
                  </span>
                </div>

                <div className="text-center mt-4">
                  <p className="terms-text">
                    By continuing, you agree to our{' '}
                    <a href="/terms-of-use" className="link-color">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy-policy" className="link-color">
                      Privacy & Legal Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
