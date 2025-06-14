"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Upload, Trash2 } from "lucide-react";
import axios from "axios";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [bannerImages, setBannerImages] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products?withBanners=true");
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("sku", data.sku);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("categoryId", data.categoryId);
    if (coverImage) formData.append("cover_image", coverImage);
    bannerImages.forEach((img) => formData.append("banners", img));

    try {
      await axios.post("/api/products", formData);
      reset();
      setCoverImage(null);
      setBannerImages([]);
      setShowForm(false);
      fetchProducts();
    } catch (err) {
      console.error("Failed to add product", err);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
  };

  const handleBannerImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setBannerImages([...bannerImages, ...files]);
  };

  const removeBannerImage = (index) => {
    const updatedImages = [...bannerImages];
    updatedImages.splice(index, 1);
    setBannerImages(updatedImages);
  };

  const toggleActive = async (id) => {
    try {
      await axios.patch(`/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Failed to toggle active status", err);
    }
  };

  const confirmDelete = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleConfirmedDelete = async () => {
    setIsDeleting(true);
    try {
      await axios.delete(`/api/products/${selectedId}`);
      setIsDeleting(false);
      setShowModal(false);
      setSelectedId(null);
      fetchProducts();
    } catch (err) {
      console.error("Failed to delete product", err);
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-end align-items-center my-4">
        <button
          className="btn border-0 btn-primary f_14 rounded-0 fw-semibold"
          onClick={() => {
            setShowForm(!showForm);
            reset();
            setCoverImage(null);
            setBannerImages([]);
          }}
        >
          {showForm ? "Cancel" : "Add New Product"}
        </button>
      </div>

      {showForm && (
        <div className="card my-4 rounded-0 shadow-sm">
          <div className="card-header">
            <h5 className="card-title mb-0 f_14 fw-semibold">Add New Product</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Product Name</label>
                  <input
                    className={`form-control shadow-none rounded-0 ${errors.name ? "is-invalid" : ""}`}
                    {...register("name", { required: "Product name is required" })}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">SKU</label>
                  <input
                    className={`form-control shadow-none rounded-0 ${errors.sku ? "is-invalid" : ""}`}
                    {...register("sku", { required: "SKU is required" })}
                  />
                  {errors.sku && <div className="invalid-feedback">{errors.sku.message}</div>}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    step="0.01"
                    className={`form-control shadow-none rounded-0 ${errors.price ? "is-invalid" : ""}`}
                    {...register("price", { required: "Price is required", valueAsNumber: true })}
                  />
                  {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Stock</label>
                  <input
                    type="number"
                    className="form-control shadow-none rounded-0"
                    {...register("stock")}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select shadow-none rounded-0"
                    {...register("categoryId", { required: "Category is required" })}
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                  {errors.categoryId && <div className="invalid-feedback d-block">{errors.categoryId.message}</div>}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Cover Image</label>
                <input type="file" className="form-control shadow-none rounded-0" onChange={handleCoverImageChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Banner Images</label>
                <input type="file" className="form-control shadow-none rounded-0" multiple onChange={handleBannerImagesChange} />
                <div className="d-flex gap-2 mt-2 flex-wrap">
                  {bannerImages.map((img, idx) => (
                    <div key={idx} className="position-relative">
                      <img
                        src={URL.createObjectURL(img)}
                        className="img-thumbnail"
                        style={{ width: 100, height: 100, objectFit: "cover" }}
                      />
                      <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute top-0 end-0"
                        onClick={() => removeBannerImage(idx)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn border-0 btn-primary rounded-0">Add Product</button>
            </form>
          </div>
        </div>
      )}

      <div className="card rounded-0 shadow-sm mb-4">
        <div className="card-header">
          <h5 className="card-title mb-0 f_14 fw-semibold">All Products</h5>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped mb-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>SKU</th>
                  <th>Price</th>
                  <th>Cover</th>
                  <th>Banners</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((prod) => (
                    <tr key={prod.id}>
                      <td>{prod.name}</td>
                      <td>{prod.sku}</td>
                      <td>₹{prod.price}</td>
                      <td>
                        {prod.cover_image && (
                          <img
                            src={prod.cover_image}
                            style={{ width: 60, height: 60, objectFit: "cover" }}
                            className="rounded"
                          />
                        )}
                      </td>
                      <td>
                        <div className="d-flex flex-wrap gap-2">
                          {(prod.banners || []).map((b, i) => (
                            <img
                              key={i}
                              src={b.image_path}
                              style={{ width: 50, height: 50, objectFit: "cover" }}
                              className="rounded"
                            />
                          ))}
                        </div>
                      </td>
                      <td>
                        <div className="form-check form-switch">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={prod.active}
                            onChange={() => toggleActive(prod.id)}
                          />
                          <label className="form-check-label">{prod.active ? "Active" : "Inactive"}</label>
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => confirmDelete(prod.id)}>
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center text-muted">No products found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop fade show" style={{ backgroundColor: "#00000088", position: "fixed", inset: 0 }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="bg-white p-4 rounded shadow" style={{ width: "100%", maxWidth: "400px" }}>
              <h5 className="mb-3">Confirm Deletion</h5>
              <p>Are you sure you want to delete this product?</p>
              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="btn btn-danger" onClick={handleConfirmedDelete}>
                  {isDeleting ? <span className="spinner-border spinner-border-sm me-2"></span> : null}
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