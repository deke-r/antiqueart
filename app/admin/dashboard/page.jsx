export default function Dashboard() {
  return (
    <div className="my-3">
      <div className="row g-4 mb-4">
        <div className="col-sm-6 col-lg-3">
          <div className="card text-white rounded-0 shadow-lg border-0" style={{ background: "linear-gradient(135deg, #4b6cb7, #182848)" }}>
            <div className="card-body">
              <h5 className="card-title">Total Sales</h5>
              <h2 className="card-text">$24,500</h2>
              <p className="card-text">
                <small>+12% from last month</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card text-white  rounded-0 shadow-lg border-0" style={{ background: "linear-gradient(135deg, #00c9ff, #92fe9d)" }}>
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <h2 className="card-text">156</h2>
              <p className="card-text">
                <small>+5% from last month</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card text-white  rounded-0 shadow-lg border-0" style={{ background: "linear-gradient(135deg, #f7971e, #ffd200)" }}>
            <div className="card-body">
              <h5 className="card-title">Total Products</h5>
              <h2 className="card-text">432</h2>
              <p className="card-text">
                <small>+8 new this week</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card text-white  rounded-0 shadow-lg border-0" style={{ background: "linear-gradient(135deg, #ff0844, #ffb199)" }}>
            <div className="card-body">
              <h5 className="card-title">Total Customers</h5>
              <h2 className="card-text">2,150</h2>
              <p className="card-text">
                <small>+24 new this week</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card rounded-0 border-0">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Recent Orders</h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#ORD-001</td>
                      <td>John Doe</td>
                      <td><span className="badge bg-success">Completed</span></td>
                      <td>2023-06-15</td>
                      <td>$120.00</td>
                    </tr>
                    <tr>
                      <td>#ORD-002</td>
                      <td>Jane Smith</td>
                      <td><span className="badge bg-warning text-dark">Processing</span></td>
                      <td>2023-06-14</td>
                      <td>$85.50</td>
                    </tr>
                    <tr>
                      <td>#ORD-003</td>
                      <td>Robert Johnson</td>
                      <td><span className="badge bg-info text-dark">Shipped</span></td>
                      <td>2023-06-13</td>
                      <td>$245.99</td>
                    </tr>
                    <tr>
                      <td>#ORD-004</td>
                      <td>Emily Davis</td>
                      <td><span className="badge bg-danger">Cancelled</span></td>
                      <td>2023-06-12</td>
                      <td>$65.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 rounded-0 h-100">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Top Selling Products</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Wireless Earbuds
                  <span className="badge bg-primary rounded-pill">124 sold</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Smart Watch
                  <span className="badge bg-primary rounded-pill">98 sold</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Bluetooth Speaker
                  <span className="badge bg-primary rounded-pill">85 sold</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Laptop Sleeve
                  <span className="badge bg-primary rounded-pill">72 sold</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Phone Case
                  <span className="badge bg-primary rounded-pill">65 sold</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
