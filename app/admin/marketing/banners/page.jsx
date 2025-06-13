"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Edit, Trash2 } from "lucide-react"

export default function Banners() {
  const [banners, setBanners] = useState([
    { id: 1, title: "Summer Sale", image: "/placeholder.svg?height=200&width=800", active: true, position: "home_top" },
    {
      id: 2,
      title: "New Collection",
      image: "/placeholder.svg?height=200&width=800",
      active: true,
      position: "home_middle",
    },
    {
      id: 3,
      title: "Special Offer",
      image: "/placeholder.svg?height=200&width=800",
      active: false,
      position: "category_page",
    },
  ])

  const [editingBanner, setEditingBanner] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm()

  const onSubmit = (data) => {
    // Handle file upload
    const bannerData = {
      ...data,
      image: data.image && data.image[0] ? URL.createObjectURL(data.image[0]) : "/placeholder.svg?height=200&width=800",
    }

    if (editingBanner) {
      // Update existing banner
      setBanners(banners.map((banner) => (banner.id === editingBanner.id ? { ...bannerData, id: banner.id } : banner)))
    } else {
      // Add new banner
      setBanners([...banners, { ...bannerData, id: Date.now() }])
    }

    // Reset form
    setShowForm(false)
    setEditingBanner(null)
    reset()
  }

  const handleEdit = (banner) => {
    setEditingBanner(banner)
    setShowForm(true)

    // Set form values
    setValue("title", banner.title)
    setValue("position", banner.position)
    setValue("link", banner.link || "")
    setValue("active", banner.active)
  }

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this banner?")) {
      setBanners(banners.filter((banner) => banner.id !== id))
    }
  }

  const toggleActive = (id) => {
    setBanners(banners.map((banner) => (banner.id === id ? { ...banner, active: !banner.active } : banner)))
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Banner Management</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowForm(!showForm)
            setEditingBanner(null)
            reset()
          }}
        >
          {showForm ? "Cancel" : "Add New Banner"}
        </button>
      </div>

      {showForm && (
        <div className="card mb-4">
          <div className="card-header">
            <h5 className="card-title mb-0">{editingBanner ? "Edit Banner" : "Add New Banner"}</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="title" className="form-label">
                    Banner Title
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                    id="title"
                    {...register("title", {
                      required: "Banner title is required",
                    })}
                  />
                  {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="position" className="form-label">
                    Position
                  </label>
                  <select
                    className={`form-select ${errors.position ? "is-invalid" : ""}`}
                    id="position"
                    {...register("position", {
                      required: "Please select a position",
                    })}
                  >
                    <option value="">Select Position</option>
                    <option value="home_top">Home Page (Top)</option>
                    <option value="home_middle">Home Page (Middle)</option>
                    <option value="home_bottom">Home Page (Bottom)</option>
                    <option value="category_page">Category Page</option>
                    <option value="sidebar">Sidebar</option>
                  </select>
                  {errors.position && <div className="invalid-feedback">{errors.position.message}</div>}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="link" className="form-label">
                  Link URL (Optional)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="link"
                  placeholder="https://example.com/page"
                  {...register("link")}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Banner Image
                </label>
                <input
                  type="file"
                  className={`form-control ${errors.image ? "is-invalid" : ""}`}
                  id="image"
                  accept="image/*"
                  {...register("image", {
                    required: editingBanner ? false : "Banner image is required",
                  })}
                />
                {errors.image && <div className="invalid-feedback">{errors.image.message}</div>}
                {editingBanner && (
                  <div className="mt-2">
                    <small className="text-muted">Current image:</small>
                    <img
                      src={editingBanner.image || "/placeholder.svg"}
                      alt={editingBanner.title}
                      className="img-thumbnail mt-1"
                      style={{ maxHeight: "100px" }}
                    />
                  </div>
                )}
              </div>

              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="active"
                    {...register("active")}
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="active">
                    Active (Banner will be displayed on the site)
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                {editingBanner ? "Update Banner" : "Add Banner"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">All Banners</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Title</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {banners.map((banner) => (
                  <tr key={banner.id}>
                    <td>
                      <img
                        src={banner.image || "/placeholder.svg"}
                        alt={banner.title}
                        className="img-thumbnail"
                        style={{ maxHeight: "60px" }}
                      />
                    </td>
                    <td>{banner.title}</td>
                    <td>
                      {banner.position === "home_top" && "Home Page (Top)"}
                      {banner.position === "home_middle" && "Home Page (Middle)"}
                      {banner.position === "home_bottom" && "Home Page (Bottom)"}
                      {banner.position === "category_page" && "Category Page"}
                      {banner.position === "sidebar" && "Sidebar"}
                    </td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={banner.active}
                          onChange={() => toggleActive(banner.id)}
                        />
                        <label className="form-check-label">{banner.active ? "Active" : "Inactive"}</label>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary" onClick={() => handleEdit(banner)}>
                          <Edit size={16} />
                        </button>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(banner.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {banners.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center py-3">
                      No banners found. Add your first banner!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
