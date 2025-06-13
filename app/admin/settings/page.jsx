"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Upload, Save } from "lucide-react"

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Settings data to save:", data)
    alert("Settings saved successfully!")
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Store Settings</h1>
      </div>

      <div className="card">
        <div className="card-body">
          <ul className="nav nav-tabs" id="settingsTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "general" ? "active" : ""}`}
                onClick={() => setActiveTab("general")}
              >
                General
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "payment" ? "active" : ""}`}
                onClick={() => setActiveTab("payment")}
              >
                Payment
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "shipping" ? "active" : ""}`}
                onClick={() => setActiveTab("shipping")}
              >
                Shipping
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "email" ? "active" : ""}`}
                onClick={() => setActiveTab("email")}
              >
                Email
              </button>
            </li>
          </ul>

          <div className="tab-content p-3">
            {/* General Settings */}
            <div className={`tab-pane fade ${activeTab === "general" ? "show active" : ""}`}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="storeName" className="form-label">
                      Store Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.storeName ? "is-invalid" : ""}`}
                      id="storeName"
                      defaultValue="My E-commerce Store"
                      {...register("storeName", {
                        required: "Store name is required",
                      })}
                    />
                    {errors.storeName && <div className="invalid-feedback">{errors.storeName.message}</div>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="storeEmail" className="form-label">
                      Store Email
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.storeEmail ? "is-invalid" : ""}`}
                      id="storeEmail"
                      defaultValue="contact@mystore.com"
                      {...register("storeEmail", {
                        required: "Store email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.storeEmail && <div className="invalid-feedback">{errors.storeEmail.message}</div>}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="storeLogo" className="form-label">
                      Store Logo
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="storeLogo"
                        accept="image/*"
                        {...register("storeLogo")}
                      />
                      <label className="input-group-text" htmlFor="storeLogo">
                        <Upload size={18} />
                      </label>
                    </div>
                    <div className="mb-3">
                      <img
                        src="/placeholder.svg?height=60&width=200"
                        alt="Current logo"
                        className="img-thumbnail"
                        style={{ maxHeight: "60px" }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="favicon" className="form-label">
                      Favicon
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="favicon"
                        accept="image/*"
                        {...register("favicon")}
                      />
                      <label className="input-group-text" htmlFor="favicon">
                        <Upload size={18} />
                      </label>
                    </div>
                    <div className="mb-3">
                      <img
                        src="/placeholder.svg?height=32&width=32"
                        alt="Current favicon"
                        className="img-thumbnail"
                        style={{ width: "32px", height: "32px" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="storeAddress" className="form-label">
                    Store Address
                  </label>
                  <textarea
                    className="form-control"
                    id="storeAddress"
                    rows="3"
                    defaultValue="123 E-commerce St, Online City, 12345"
                    {...register("storeAddress")}
                  ></textarea>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="currency" className="form-label">
                      Currency
                    </label>
                    <select className="form-select" id="currency" defaultValue="USD" {...register("currency")}>
                      <option value="USD">US Dollar ($)</option>
                      <option value="EUR">Euro (€)</option>
                      <option value="GBP">British Pound (£)</option>
                      <option value="JPY">Japanese Yen (¥)</option>
                      <option value="CAD">Canadian Dollar (C$)</option>
                      <option value="AUD">Australian Dollar (A$)</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="timezone" className="form-label">
                      Timezone
                    </label>
                    <select className="form-select" id="timezone" defaultValue="UTC" {...register("timezone")}>
                      <option value="UTC">UTC</option>
                      <option value="EST">Eastern Standard Time (EST)</option>
                      <option value="CST">Central Standard Time (CST)</option>
                      <option value="MST">Mountain Standard Time (MST)</option>
                      <option value="PST">Pacific Standard Time (PST)</option>
                      <option value="GMT">Greenwich Mean Time (GMT)</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                  <Save size={18} />
                  Save General Settings
                </button>
              </form>
            </div>

            {/* Payment Settings */}
            <div className={`tab-pane fade ${activeTab === "payment" ? "show active" : ""}`}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <h5>Payment Methods</h5>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="form-check form-switch mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableStripe"
                          defaultChecked
                          {...register("enableStripe")}
                        />
                        <label className="form-check-label fw-bold" htmlFor="enableStripe">
                          Stripe
                        </label>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="stripePublicKey" className="form-label">
                            Stripe Public Key
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="stripePublicKey"
                            defaultValue="pk_test_example"
                            {...register("stripePublicKey")}
                          />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="stripeSecretKey" className="form-label">
                            Stripe Secret Key
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="stripeSecretKey"
                            defaultValue="sk_test_example"
                            {...register("stripeSecretKey")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="form-check form-switch mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enablePaypal"
                          defaultChecked
                          {...register("enablePaypal")}
                        />
                        <label className="form-check-label fw-bold" htmlFor="enablePaypal">
                          PayPal
                        </label>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="paypalClientId" className="form-label">
                            PayPal Client ID
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="paypalClientId"
                            defaultValue="client_id_example"
                            {...register("paypalClientId")}
                          />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="paypalSecret" className="form-label">
                            PayPal Secret
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="paypalSecret"
                            defaultValue="secret_example"
                            {...register("paypalSecret")}
                          />
                        </div>
                      </div>

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="paypalSandbox"
                          defaultChecked
                          {...register("paypalSandbox")}
                        />
                        <label className="form-check-label" htmlFor="paypalSandbox">
                          Use PayPal Sandbox for testing
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="form-check form-switch mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableCOD"
                          defaultChecked
                          {...register("enableCOD")}
                        />
                        <label className="form-check-label fw-bold" htmlFor="enableCOD">
                          Cash on Delivery (COD)
                        </label>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="codInstructions" className="form-label">
                          COD Instructions
                        </label>
                        <textarea
                          className="form-control"
                          id="codInstructions"
                          rows="2"
                          defaultValue="Please have the exact amount ready for our delivery person."
                          {...register("codInstructions")}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                  <Save size={18} />
                  Save Payment Settings
                </button>
              </form>
            </div>

            {/* Shipping Settings */}
            <div className={`tab-pane fade ${activeTab === "shipping" ? "show active" : ""}`}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <h5>Shipping Options</h5>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="form-check form-switch mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableFlatRate"
                          defaultChecked
                          {...register("enableFlatRate")}
                        />
                        <label className="form-check-label fw-bold" htmlFor="enableFlatRate">
                          Flat Rate Shipping
                        </label>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="flatRateAmount" className="form-label">
                            Flat Rate Amount ($)
                          </label>
                          <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            id="flatRateAmount"
                            defaultValue="5.99"
                            {...register("flatRateAmount")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="form-check form-switch mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableFreeShipping"
                          defaultChecked
                          {...register("enableFreeShipping")}
                        />
                        <label className="form-check-label fw-bold" htmlFor="enableFreeShipping">
                          Free Shipping
                        </label>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="freeShippingMinimum" className="form-label">
                            Minimum Order Amount for Free Shipping ($)
                          </label>
                          <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            id="freeShippingMinimum"
                            defaultValue="50.00"
                            {...register("freeShippingMinimum")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="form-check form-switch mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableLocalPickup"
                          defaultChecked
                          {...register("enableLocalPickup")}
                        />
                        <label className="form-check-label fw-bold" htmlFor="enableLocalPickup">
                          Local Pickup
                        </label>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="localPickupAddress" className="form-label">
                          Pickup Address
                        </label>
                        <textarea
                          className="form-control"
                          id="localPickupAddress"
                          rows="2"
                          defaultValue="123 E-commerce St, Online City, 12345"
                          {...register("localPickupAddress")}
                        ></textarea>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="localPickupInstructions" className="form-label">
                          Pickup Instructions
                        </label>
                        <textarea
                          className="form-control"
                          id="localPickupInstructions"
                          rows="2"
                          defaultValue="Please call us 30 minutes before arrival."
                          {...register("localPickupInstructions")}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                  <Save size={18} />
                  Save Shipping Settings
                </button>
              </form>
            </div>

            {/* Email Settings */}
            <div className={`tab-pane fade ${activeTab === "email" ? "show active" : ""}`}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <h5>Email Configuration</h5>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="smtpHost" className="form-label">
                            SMTP Host
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="smtpHost"
                            defaultValue="smtp.example.com"
                            {...register("smtpHost")}
                          />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="smtpPort" className="form-label">
                            SMTP Port
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="smtpPort"
                            defaultValue="587"
                            {...register("smtpPort")}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="smtpUsername" className="form-label">
                            SMTP Username
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="smtpUsername"
                            defaultValue="user@example.com"
                            {...register("smtpUsername")}
                          />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="smtpPassword" className="form-label">
                            SMTP Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="smtpPassword"
                            defaultValue="password"
                            {...register("smtpPassword")}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="smtpSecure"
                            defaultChecked
                            {...register("smtpSecure")}
                          />
                          <label className="form-check-label" htmlFor="smtpSecure">
                            Use Secure Connection (TLS/SSL)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h5 className="mt-4">Email Notifications</h5>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="notifyNewOrder"
                            defaultChecked
                            {...register("notifyNewOrder")}
                          />
                          <label className="form-check-label" htmlFor="notifyNewOrder">
                            New Order Notification
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="notifyLowStock"
                            defaultChecked
                            {...register("notifyLowStock")}
                          />
                          <label className="form-check-label" htmlFor="notifyLowStock">
                            Low Stock Notification
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="notifyNewCustomer"
                            defaultChecked
                            {...register("notifyNewCustomer")}
                          />
                          <label className="form-check-label" htmlFor="notifyNewCustomer">
                            New Customer Registration
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="adminNotificationEmail" className="form-label">
                          Admin Notification Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="adminNotificationEmail"
                          defaultValue="admin@example.com"
                          {...register("adminNotificationEmail")}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                  <Save size={18} />
                  Save Email Settings
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
