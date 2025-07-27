import "./FooterComponent.css";
function FooterComponent() {
  return (
    <div id="footer-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4578.05604161736!2d81.8873327!3d16.483632999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37e70047a7f473%3A0x9f06a69642084414!2sEducare%20global!5e1!3m2!1sen!2sin!4v1750977821727!5m2!1sen!2sin"
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
        <div id="footer-address-title">Educare Global School</div>
        <div id="footer-address-value">
          New High way, Mamidikuduru mandal, <br />
          <br />
          Dr. BR Ambedkar konaseema district, Geddada, <br />
          <br />
          Andhra Pradesh. 533249
        </div>
        <div id="footer-address-timings">
          School Hours: 9:30 a.m. - 4:30 p.m
        </div>
      </div>
      <div id="footer-admissions">
        <div id="footer-admissions-title">For Admissions</div>
        <div id="footer-admissions-phone">
          <strong>Phone:</strong> 9121344456
        </div>
        <div id="footer-admissions-mail">
          <strong>Mail:</strong> educaretheglobalschool@gmail.com ,<br />
          principal@educareglobalschool.com
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
