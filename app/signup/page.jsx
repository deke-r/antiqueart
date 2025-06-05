"use client"

import { useForm } from "react-hook-form"



export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    console.log("Submitted Data:", data)
    alert(`Submitted:\n${JSON.stringify(data, null, 2)}`)
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="mb-4 text-center">Create an Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required", minLength: { value: 2, message: "Minimum 2 characters" } })}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })}
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
                  {...register("password", { required: "Password is required", minLength: { value: 8, message: "Minimum 8 characters" } })}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password.message}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary border-0 w-100">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
