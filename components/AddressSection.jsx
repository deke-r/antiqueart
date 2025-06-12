export default function AddressSection() {
    return (
        <>

          <div className="bg-white rounded-3 shadow-sm p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold mb-0">My Addresses</h5>
                    <button className="btn btn-primary rounded-pill" onClick={() => setShowAddressForm(true)}>
                      Add New Address
                    </button>
                  </div>

                  {showAddressForm && (
                    <div className="border rounded-3 p-3 mb-4">
                      <h6 className="fw-bold mb-3">Add New Address</h6>
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Address Type</label>
                            <select className="form-select">
                              <option value="Home">Home</option>
                              <option value="Office">Office</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Address</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">State</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">ZIP Code</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <input type="tel" className="form-control" />
                        </div>
                        <div className="d-flex gap-2">
                          <button type="submit" className="btn btn-primary">
                            Save Address
                          </button>
                          <button type="button" className="btn btn-secondary" onClick={() => setShowAddressForm(false)}>
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  <div className="row">
                    {addresses.map((address) => (
                      <div key={address.id} className="col-md-6 mb-3">
                        <div className="border rounded-3 p-3">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <span className="badge bg-primary">{address.type}</span>
                            <div className="dropdown">
                              <button
                                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                              >
                                Actions
                              </button>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                <li><a className="dropdown-item text-danger" href="#">Delete</a></li>
                              </ul>
                            </div>
                          </div>
                          <h6 className="fw-bold">{address.name}</h6>
                          <p className="mb-1">{address.address}</p>
                          <p className="mb-1">{address.city}, {address.state} {address.zip}</p>
                          <p className="mb-0 text-muted">{address.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
        
        
        </>
    );
}