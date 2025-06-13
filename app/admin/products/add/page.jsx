"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Upload, Trash2 } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [images, setImages] = useState([]);
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
  }, []);

  const fetchProducts = async () => {
    // Fetch from API
    // const res = await axios.get("/api/products");
    // setProducts(res.data);
    // For now, dummy data:
    setProducts([
      {
        id: 1,
        name: "iPhone 15",
        sku: "IPH15-256GB",
        price: 999.99,
        active: true,
      },
      {
        id: 2,
        name: "Bluetooth Speaker",
        sku: "BT-SPK-001",
        price: 59.99,
        active: false,
      },
    ]);
  };

  const onSubmit = async (data) => {
    const productData = {
      ...data,
      images,
    };

    console.log("Product data to submit:", productData);

    // await axios.post("/api/products", productData);
    reset();
    setImages([]);
    setShowForm(false);
    fetchProducts();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages([...images, ...newImages]);
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    URL.revokeObjectURL(updatedImages[index].preview);
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const toggleActive = async (id) => {
    const current = products.find((p) => p.id === id);
    // await axios.patch(`/api/products/${id}`, { active: !current.active });
    fetchProducts();
  };

  const confirmDelete = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleConfirmedDelete = async () => {
    setIsDeleting(true);
    // await axios.delete(`/api/products/${selectedId}`);
    setIsDeleting(false);
    setShowModal(false);
    setSelectedId(null);
    fetchProducts();
  };

  return (
    <div>
      <div className="d-flex justify-content-end align-items-center my-4">
        <button
          className="btn border-0 btn-primary f_14 rounded-0 fw-semibold"
          onClick={() => {
            setShowForm(!showForm);
            reset();
            setImages([]);
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
              <div className="mb-3">
                <label className="form-label">Images</label>
                <input type="file" className="form-control shadow-none rounded-0" multiple onChange={handleImageChange} />
                <div className="d-flex gap-2 mt-2 flex-wrap">
                  {images.map((img, idx) => (
                    <div key={idx} className="position-relative">
                      <img
                        src={img.preview}
                        className="img-thumbnail"
                        style={{ width: 100, height: 100, objectFit: "cover" }}
                      />
                      <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute top-0 end-0"
                        onClick={() => removeImage(idx)}
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
                      <td>${prod.price}</td>
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
                    <td colSpan={5} className="text-center text-muted">No products found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
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
