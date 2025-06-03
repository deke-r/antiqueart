export default function ServicesSection() {
  const services = [
    {
      icon: "/img/14ceb846-elegift-icon-01.webp",
      title: "Birthday Gift's",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      icon: "/img/63b0c109-elegift-icon-02.webp",
      title: "Anniversary Gifts",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      icon: "/img/b56b61bd-elegift-icon-03.webp",
      title: "Special Gift's",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      icon: "/img/51f6a787-elegift-icon-04.webp",
      title: "Love Gift's",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#EEF1F6" }}>
      <div className="container py-md-5">
        <div className="text-center mb-5">
          <h2 className="fw-semibold mb-3 f_42">
            We Don't Just Send Gifts.
            <br /> We Deliver Happiness.
          </h2>
          <p className="text-muted f_16 my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br /> industry's standard dummy text ever since the 1500s,
          </p>
        </div>
        <div className="row mx-lg-5 g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="bg-white rounded-4 py-5 px-4 h-100 ">
                <div className="mb-3">
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    className="img-fluid"
                    style={{ maxHeight: "60px" }}
                  />
                </div>
                <h5 className="fw-semibold mb-3">{service.title}</h5>
                <p className="text-muted fw-semibold small">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
