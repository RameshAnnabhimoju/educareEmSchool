import "./FooterComponent.css";
function FooterComponent() {
  return (
    <div id="footer-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5854948014135!2d81.88185947582942!3d16.49651332785622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37e76aa456050d%3A0x7e281a673787b72a!2sEDUCARE%20EM%20SCHOOL!5e0!3m2!1sen!2sin!4v1719742627456!5m2!1sen!2sin"
        width="95%"
        height="300"
        id="footer-map"
        title="footer map"
        // style={{ border: 0 }}
        allowFullScreen={true}
        aria-hidden="false"
        tabIndex={0}
        // loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div id="footer-address">
        <div id="footer-address-title">Educare EM School</div>
        <div id="footer-address-value">
          Molleti vari merakha, Mamidikuduru mandal, <br />
          <br />
          Dr. BR Ambedkar konaseema district, Nagaram, <br />
          <br />
          Andhra Pradesh. 533247
        </div>
        <div id="footer-address-timings">
          Office Hours: 9:30 a.m. - 4:30 p.m
        </div>
      </div>
      <div id="footer-admissions">
        <div id="footer-admissions-title">For Admissions</div>
        <div id="footer-admissions-phone">
          <strong>Phone:</strong> 99999999999, 8888888888
        </div>
        <div id="footer-admissions-mail">
          <strong>Mail:</strong> principal@educareschool.edu.in ,<br />
          director@educareschool.edu.in
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
