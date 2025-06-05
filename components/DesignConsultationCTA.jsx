"use client"

import { LampDesk } from "lucide-react"

export default function DesignConsultationCTA() {
  return (
    <section className="py-5" style={{ backgroundColor: "#EEF1F6" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="card border-0 shadow-sm rounded-5 py-5 px-4"
              style={{ marginTop: "-10%" }}
            >
              <div className="row align-items-center">
                <div className="col-lg-2 mb-3 mb-lg-0 d-flex justify-content-center">
                  <LampDesk size={60} className="text-primary" />
                </div>
                <div className="col-lg-10">
                  <div className="text-lg-start text-center">
                    <h4 className="f_30 mb-2 fw-bold">Need Help with Your Space?</h4>
                    <p className="text-muted mb-4">
                      Our expert designers are here to help you choose the perfect furniture and decor for your home or office.
                      Whether you're planning a full renovation or need help selecting a statement piece — we’ve got you covered.
                    </p>
                    <div className="text-lg-start text-center">
                      <button className="btn btn-primary rounded-4 border-0 px-5 py-3 text-uppercase fw-semibold">
                        Book a Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
