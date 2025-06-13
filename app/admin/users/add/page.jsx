"use client"

import { useForm } from "react-hook-form"

export default function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm()

  const onSubmit = (data) => {
    // Remove confirmPassword from data
    const { confirmPassword, ...userData } = data

    console.log("User data to submit:", userData)
    // Here you would typically send this data to your API

    // Reset form after submission
    reset()
    alert("User added successfully!")
  }

  const password = watch("password", "")

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Add New User</h1>
      </div>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                  id="firstName"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
              </div>

              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                  id="lastName"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  id="phone"
                  {...register("phone", {
                    pattern: {
                      value: /^[0-9+\-\s()]*$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
              </div>

              <div className="col-md-6">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Please confirm password",
                    validate: (value) => value === password || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <select
                  className={`form-select ${errors.role ? "is-invalid" : ""}`}
                  id="role"
                  {...register("role", {
                    required: "Please select a role",
                  })}
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="customer">Customer</option>
                </select>
                {errors.role && <div className="invalid-feedback">{errors.role.message}</div>}
              </div>

              <div className="col-md-6">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <select className="form-select" id="status" {...register("status")} defaultValue="active">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address (Optional)
              </label>
              <textarea className="form-control" id="address" rows="3" {...register("address")}></textarea>
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="sendWelcomeEmail"
                  {...register("sendWelcomeEmail")}
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="sendWelcomeEmail">
                  Send welcome email with login details
                </label>
              </div>
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Add User
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => reset()}>
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
