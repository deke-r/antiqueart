export default function ProfileSection() {
    return (
        <>

          <div className="bg-white rounded-0 shadow-sm p-4">
                  <h5 className="fw-bold mb-4">Profile Details</h5>
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <input type="text" className="form-control rounded-0 shadow-none auth-input" placeholder="Name" defaultValue={user?.firstName || ""} />
                      </div>
                    </div>
                    <div className="mb-3">
                     
                      <input type="email" className="form-control rounded-0 shadow-none auth-input" placeholder="Email" defaultValue={user?.email || ""} />
                    </div>
                    <div className="mb-3">
                      <input type="tel" className="form-control rounded-0 shadow-none auth-input" placeholder="Phone" defaultValue={user?.phone || ""} />
                    </div>
                    <button type="submit" className="btn btn-primary rounded-0 w-100 border-0 py-2 px-4">
                      Update Profile
                    </button>
                  </form>
                </div>
        
        
        </>
    );
}