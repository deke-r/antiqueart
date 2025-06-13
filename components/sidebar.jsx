"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  ImageIcon,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  BarChart3,
  CreditCard,
  Tag,
} from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState({
    products: false,
    marketing: false,
    users: false,
  })

  const toggleCollapse = (section) => {
    setCollapsed({
      ...collapsed,
      [section]: !collapsed[section],
    })
  }

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <div
      className="sidebar d-flex flex-column flex-shrink-0 bg-dark text-white"
      style={{ width: "280px", minHeight: "100vh" }}
    >
      <div className="d-flex align-items-center justify-content-center py-3 mb-3 border-bottom">
        <span className="fs-4 fw-semibold">Admin Panel</span>
      </div>

      <ul className="nav nav-pills flex-column mb-auto px-2">
        <li className="nav-item">
          <Link
            href="/admin/dashboard"
            className={`nav-link d-flex align-items-center gap-2 ${isActive("/admin/dashboard") ? "active" : "text-white"}`}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <div
            className={`nav-link d-flex align-items-center justify-content-between cursor-pointer ${isActive("/admin/products") || isActive("/admin/products/add") || isActive("/admin/products/categories") ? "active" : "text-white"}`}
            onClick={() => toggleCollapse("products")}
          >
            <div className="d-flex align-items-center gap-2">
              <Package size={18} />
              <span>Products</span>
            </div>
            {collapsed.products ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          <div className={`ms-4 mt-1 ${collapsed.products ? "d-block" : "d-none"}`}>
            <Link
              href="/admin/products"
              className={`nav-link d-flex align-items-center gap-2 py-2 ${isActive("/admin/products") ? "text-primary" : "text-white-50"}`}
            >
              <ShoppingBag size={16} />
              <span>All Products</span>
            </Link>
            <Link
              href="/admin/products/add"
              className={`nav-link d-flex align-items-center gap-2 py-2 ${isActive("/admin/products/add") ? "text-primary" : "text-white-50"}`}
            >
              <Tag size={16} />
              <span>Add Product</span>
            </Link>
            <Link
              href="/admin/products/categories"
              className={`nav-link d-flex align-items-center gap-2 py-2 ${isActive("/admin/products/categories") ? "text-primary" : "text-white-50"}`}
            >
              <Tag size={16} />
              <span>Categories</span>
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div
            className={`nav-link d-flex align-items-center justify-content-between cursor-pointer ${isActive("/admin/marketing/banners") ? "active" : "text-white"}`}
            onClick={() => toggleCollapse("marketing")}
          >
            <div className="d-flex align-items-center gap-2">
              <ImageIcon size={18} />
              <span>Marketing</span>
            </div>
            {collapsed.marketing ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          <div className={`ms-4 mt-1 ${collapsed.marketing ? "d-block" : "d-none"}`}>
            <Link
              href="/admin/marketing/banners"
              className={`nav-link d-flex align-items-center gap-2 py-2 ${isActive("/admin/marketing/banners") ? "text-primary" : "text-white-50"}`}
            >
              <ImageIcon size={16} />
              <span>Banners</span>
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div
            className={`nav-link d-flex align-items-center justify-content-between cursor-pointer ${isActive("/admin/users") || isActive("/admin/users/add") ? "active" : "text-white"}`}
            onClick={() => toggleCollapse("users")}
          >
            <div className="d-flex align-items-center gap-2">
              <Users size={18} />
              <span>Users</span>
            </div>
            {collapsed.users ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          <div className={`ms-4 mt-1 ${collapsed.users ? "d-block" : "d-none"}`}>
            <Link
              href="/admin/users"
              className={`nav-link d-flex align-items-center gap-2 py-2 ${isActive("/admin/users") ? "text-primary" : "text-white-50"}`}
            >
              <Users size={16} />
              <span>All Users</span>
            </Link>
            <Link
              href="/admin/users/add"
              className={`nav-link d-flex align-items-center gap-2 py-2 ${isActive("/admin/users/add") ? "text-primary" : "text-white-50"}`}
            >
              <Users size={16} />
              <span>Add User</span>
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <Link
            href="/admin/orders"
            className={`nav-link d-flex align-items-center gap-2 ${isActive("/admin/orders") ? "active" : "text-white"}`}
          >
            <CreditCard size={18} />
            <span>Orders</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            href="/admin/analytics"
            className={`nav-link d-flex align-items-center gap-2 ${isActive("/admin/analytics") ? "active" : "text-white"}`}
          >
            <BarChart3 size={18} />
            <span>Analytics</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            href="/admin/settings"
            className={`nav-link d-flex align-items-center gap-2 ${isActive("/admin/settings") ? "active" : "text-white"}`}
          >
            <Settings size={18} />
            <span>Settings</span>
          </Link>
        </li>
      </ul>

      <div className="mt-auto border-top p-3">
        <button className="btn btn-outline-light d-flex align-items-center gap-2 w-100">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
