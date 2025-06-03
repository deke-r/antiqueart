export default function HowItWorks() {
  const steps = [
    {
      title: "Choose From Our Collection Of Popular Gifts For Every Occasion",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      title: "Enter Delivery Address, Date, and Time. Add A Personalized Note.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      title: "Have Your Gifts Delivered To The Doorstep Of Your Loved Ones",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
  ]

  return (
    <section className="py-5" style={{ backgroundColor: "#EEF1F6" }}>
      <div className="container py-5">
        <div className="text-center my-5">
          <h2 className="fw-semibold my-5 f_42">How Does It Work?</h2>
          <p className="text-muted my-4 f_16 fw-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. industry's <br/> standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="row mx-md-5 my-5 g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4 p-md-5 rounded-4 hv-crd">
              <div className="text-start">
                <h5 className="fw-semibold f_18 text-start mb-3">{step.title}</h5>
                <p className="text-muted small mb-3 f_16  text-start">{step.description}</p>
                <button className="btn btn-outline-secondary rounded-3  btn-sm">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
