"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Trash2 } from "lucide-react";
import axios from "axios";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get("/api/categories");
    setCategories(res.data);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("slug", data.slug || "");
    formData.append("description", data.description || "");
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    await axios.post("/api/categories", formData);
    reset();
    setShowForm(false);
    fetchCategories();
  };

  const toggleActive = async (id) => {
    const current = categories.find((c) => c.id === id);
    await axios.patch(`/api/categories/${id}`, {
      active: !current.active,
    });
    fetchCategories();
  };

  const confirmDelete = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmedDelete = async () => {
    if (!selectedId) return;
    setIsDeleting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await axios.delete(`/api/categories/${selectedId}`);
    setIsDeleting(false);
    setSelectedId(null);
    setIsModalOpen(false);
    fetchCategories();
  };

  return (
    <div>
      <div className="d-flex justify-content-end align-items-center my-4">
        <button
          className="btn border-0 btn-primary f_14 rounded-0 fw-semibold"
          onClick={() => {
            setShowForm(!showForm);
            reset();
          }}
        >
          {showForm ? "Cancel" : "Add New Category"}
        </button>
      </div>

      {showForm && (
        <div className="card my-4 rounded-0 shadow-sm">
          <div className="card-header">
            <h5 className="card-title mb-0 f_14 fw-semibold">
              Add New Category
            </h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label f_14 fw-semibold">
                    Category Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`form-control rounded-0 ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    {...register("name", {
                      required: "Category name is required",
                    })}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name.message}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="slug" className="form-label f_14 fw-semibold">
                    Slug (Optional)
                  </label>
                  <input
                    type="text"
                    id="slug"
                    placeholder="auto-generated-from-name"
                    className="form-control rounded-0"
                    {...register("slug", {
                      pattern: {
                        value: /^[a-z0-9-]+$/,
                        message: "Slug must be lowercase letters, numbers, hyphens",
                      },
                    })}
                  />
                  {errors.slug && (
                    <div className="invalid-feedback">{errors.slug.message}</div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="description"
                  className="form-label f_14 fw-semibold"
                >
                  Description (Optional)
                </label>
                <textarea
                  id="description"
                  rows={3}
                  className="form-control rounded-0"
                  {...register("description")}
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="image" className="form-label f_14 fw-semibold">
                  Category Image (Optional)
                </label>
                <input
                  type="file"
                  id="image"
                  className="form-control rounded-0"
                  accept="image/*"
                  {...register("image")}
                />
              </div>

              <button type="submit" className="btn btn-primary rounded-0">
                Add Category
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="card rounded-0 shadow-sm mb-4">
        <div className="card-header">
          <h5 className="card-title mb-0 f_14 fw-semibold">All Categories</h5>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped mb-0">
              <thead>
                <tr>
                  <th className="f_16 fw-semibold">Name</th>
                  <th className="f_16 fw-semibold">Slug</th>
                  <th className="f_16 fw-semibold">Image</th>
                  <th className="f_16 fw-semibold">Status</th>
                  <th className="f_16 fw-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.id} className="f_13 fw-semibold">
                    <td>{cat.name}</td>
                    <td>{cat.slug}</td>
                    <td>
                      {cat.image ? (
                        <img
                          src={`/uploads/categories/${cat.image}`}
                          alt={cat.name}
                          width="60"
                          height="40"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <span className="text-muted">No Image</span>
                      )}
                    </td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={cat.active}
                          onChange={() => toggleActive(cat.id)}
                        />
                        <label className="form-check-label">
                          {cat.active ? "Active" : "Inactive"}
                        </label>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => confirmDelete(cat.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
                {categories.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center text-muted">
                      No categories found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Simple Modal */}
      {isModalOpen && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title f_14 fw-semibold">Confirm Deletion</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this category?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary rounded-0"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger rounded-0"
                  onClick={handleConfirmedDelete}
                >
                  {isDeleting && (
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
