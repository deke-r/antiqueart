"use client"

import { useState } from "react"
import { Edit, Trash2, Search, Filter } from "lucide-react"

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "customer",
      status: "active",
      lastLogin: "2023-06-10",
      orders: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "customer",
      status: "active",
      lastLogin: "2023-06-12",
      orders: 3,
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@example.com",
      role: "admin",
      status: "active",
      lastLogin: "2023-06-15",
      orders: 0,
    },
    {
      id: 4,
      name: "Robert Johnson",
      email: "robert@example.com",
      role: "customer",
      status: "inactive",
      lastLogin: "2023-05-20",
      orders: 1,
    },
    {
      id: 5,
      name: "Emily Davis",
      email: "emily@example.com",
      role: "customer",
      status: "active",
      lastLogin: "2023-06-14",
      orders: 7,
    },
    {
      id: 6,
      name: "Michael Wilson",
      email: "michael@example.com",
      role: "customer",
      status: "active",
      lastLogin: "2023-06-11",
      orders: 2,
    },
    {
      id: 7,
      name: "Sarah Brown",
      email: "sarah@example.com",
      role: "manager",
      status: "active",
      lastLogin: "2023-06-13",
      orders: 0,
    },
    {
      id: 8,
      name: "David Miller",
      email: "david@example.com",
      role: "customer",
      status: "inactive",
      lastLogin: "2023-05-15",
      orders: 4,
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [roleFilter, setRoleFilter] = useState("all")

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: user.status === "active" ? "inactive" : "active" } : user,
      ),
    )
  }

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id))
    }
  }

  // Filter users based on search term and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    const matchesRole = roleFilter === "all" || user.role === roleFilter

    return matchesSearch && matchesStatus && matchesRole
  })

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>User Management</h1>
        <a href="/admin/users/add" className="btn btn-primary">
          Add New User
        </a>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="input-group">
                <span className="input-group-text">
                  <Filter size={18} />
                </span>
                <select className="form-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="col-md-3">
              <select className="form-select" value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="customer">Customer</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">All Users</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Last Login</th>
                  <th>Orders</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span
                        className={`badge ${
                          user.role === "admin" ? "bg-danger" : user.role === "manager" ? "bg-warning" : "bg-info"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={user.status === "active"}
                          onChange={() => toggleStatus(user.id)}
                        />
                        <label className="form-check-label">{user.status === "active" ? "Active" : "Inactive"}</label>
                      </div>
                    </td>
                    <td>{user.lastLogin}</td>
                    <td>{user.orders}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <a href={`/admin/users/edit/${user.id}`} className="btn btn-sm btn-outline-primary">
                          <Edit size={16} />
                        </a>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(user.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-center py-3">
                      No users found matching your criteria.
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
