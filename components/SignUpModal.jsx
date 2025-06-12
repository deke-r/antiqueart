'use client';

import '../styles/signupmodal.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpModal({ toggleForm }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [otpPhase, setOtpPhase] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState('');
  const [otp, setOtp] = useState('');
  const [formData, setFormData] = useState(null);

  const showToast = (message, isError = false) => {
    if (isError) {
      toast.error(message, { position: 'top-right' });
    } else {
      toast.success(message, { position: 'top-right' });
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post('/api/send-otp', data);
      setEmailForOtp(data.email);
      setOtpPhase(true);
      setFormData(data);
    } catch (error) {
      showToast(error.response?.data?.message || 'Failed to send OTP', true);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      // Step 1: Verify OTP
      await axios.post('/api/verify-otp', {
        email: emailForOtp,
        otp
      });

      // Step 2: Register User
      const response = await axios.post('/api/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      showToast('Registration successful!');

      reset();
      setOtp('');
      setFormData(null);

      setTimeout(() => {
        toggleForm();
      }, 1500);

    } catch (error) {
      const message = error.response?.data?.message || 'Verification or registration failed';

      if (message.toLowerCase().includes('email already exists')) {
        showToast('Email already registered. Try logging in.', true);
        setOtpPhase(false);
        setOtp('');
      } else {
        showToast(message, true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="row g-0 h-100">
        <div className="col-lg-6 banner-section d-flex align-items-center justify-content-center"
          style={{ backgroundImage: 'url("/img/10_Off_Desk_popup.webp")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '90vh' }} />

        <div className="col-lg-6 content-section d-flex align-items-center position-relative">
          <button type="button" className="btn-close shadow-none position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close"></button>
          <div className="w-100 pt-4">
            <div className="auth-module">
              <div className="text-center mb-4">
                <h4 className="login-message">SIGN UP FOR SALE UPDATES</h4>
              </div>
              <div className="text-center mb-3">
                <p className="login-subheader">Get ideas, inspirations & offers in your inbox</p>
                <h5 className="form-heading fw-semibold">Be the first to know.</h5>
              </div>

              {!otpPhase ? (
                <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <input type="text" className="form-control auth-input rounded-0 shadow-none" placeholder="Name" {...register("name", { required: "Name is required" })} />
                    {errors.name && <small className="text-danger">{errors.name.message}</small>}
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control auth-input rounded-0 shadow-none" placeholder="Email Address" {...register("email", { required: "Email is required" })} />
                    {errors.email && <small className="text-danger">{errors.email.message}</small>}
                  </div>
                  <div className="mb-3 position-relative">
                    <input type="password" className="form-control auth-input rounded-0 shadow-none" placeholder="Password" {...register("password", { required: "Password is required" })} />
                    {errors.password && <small className="text-danger">{errors.password.message}</small>}
                  </div>
                  <button type="submit" className="btn btn-primary w-100 auth-btn" disabled={loading}>
                    {loading ? <><span className="spinner-border spinner-border-sm me-2" /> Signing Up...</> : 'Sign Up'}
                  </button>
                </form>
              ) : (

                <form className="otp-section text-center" autoComplete="off" onSubmit={handleSubmit(async () => await handleVerifyOtp())}>
                  <h6 className="mb-3 f_13 text-uppercase">Enter the OTP sent to {emailForOtp}</h6>

                  <div className="mb-3 position-relative">
                    <input
                      type="number"
                      className="form-control auth-input rounded-0 shadow-none"
                      maxLength={6}
                      autoComplete='new-otp'
                      placeholder="Enter OTP"
                      {...register("otp", {
                        required: "OTP is required",
                        minLength: { value: 6, message: "OTP must be 6 digits" },
                        maxLength: { value: 6, message: "OTP must be 6 digits" },
                      })}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    {errors.otp && <small className="text-danger">{errors.otp.message}</small>}
                  </div>

                  <button type="submit" className="btn rounded-0 btn-primary w-100 auth-btn" disabled={loading}>
                    {loading ? <><span className="spinner-border spinner-border-sm me-2" /> Verifying...</> : 'Verify OTP'}
                  </button>
                </form>

              )}

              <div className="text-center f_14 mt-3">
                <span>Have an account? </span>
                <span className="link-color p-0 text-decoration-none pointer fw-semibold f_14" onClick={toggleForm}>Log-in</span>
              </div>

              <div className="text-center mt-4">
                <p className="terms-text">
                  By continuing, you agree to our <a href="/terms-of-use" className="link-color">Terms of Service</a> and <a href="/privacy-policy" className="link-color">Privacy & Legal Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
