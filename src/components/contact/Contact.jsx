import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-title">
        If you start having symptoms of Covid-19
      </h1>
      <div className="contact-buttons">
        <div className="contact-button">
          <img src="../images/icons/icon13.png" alt="" />
          <h4>Immediately isolate yourself from others</h4>
        </div>
        <div className="contact-button">
          <img src="../images/icons/icon14.png" alt="" />
          <h4>Contact your public health authority as soon</h4>
        </div>
      </div>
    </div>
  );
}

export default Contact;
