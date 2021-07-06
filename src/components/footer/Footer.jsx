import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerColumns">
        <div>
          <h5>About Covid Awareness</h5>
          <p>
            Our team of highly trained professionals uses the latest healing
            technologies to restore you to pain-free health quickly and easily.
            We thoroughly evaluate.
          </p>
        </div>
        <div>
          <h5>Useful Links</h5>
          <ul>
            <li>About COVID-19</li>
            <li>Symtomps</li>
            <li>Precautions</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5>Important Links</h5>
          <ul>
            <li>Covid-19 Update</li>
            <li>Preventions & Risk</li>
            <li>Travel Advice</li>
            <li>Treatments</li>
          </ul>
        </div>
        <div className="getInTouch">
          <h5>Get In Touch</h5>
          <span>demo@example.com</span>
          <span>1800-123-4567</span>
          <address>95 FF3, App Street Avenue NSW 96209, Canada</address>
        </div>
      </div>
      <p className="copyRight">
        Copyright 2021 - Covid Awareness | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
