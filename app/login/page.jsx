"use client"

import { useForm } from "react-hook-form"



export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    console.log("Login Data:", data)
    alert(`Login Submitted:\n${JSON.stringify(data, null, 2)}`)
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h2 className="mb-4 text-center">Login to Your Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password.message}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100 border-0">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
