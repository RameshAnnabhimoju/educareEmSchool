import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-container">
        <div className="contact-us-header-text">
            <h1>Contact Us</h1>
        </div>
        <div id="contact-us-details">
            <p>Wish to enquire about admissions, syllabus, or anything else? <br />You can walk in during office hours, give us a call or simply submit the form here.</p>
            <p><strong><i className="fas fa-map-marker-alt"></i></strong> Address</p>
            <h3 className="contact-us-subdetails">Educare EM School <br /> 
            Molleti vari merakha, Mamidikuduru mandal,<br />
            Dr. BR Ambedkar konaseema district, Nagaram,<br />
            Andhra Pradesh, India.
            </h3>
            <p><strong><i className="fas fa-phone-alt"></i>  Phone</strong></p>
            <p>office :99999999999, 8888888888</p>
            <table className="contact-us-table">
                <tr>
                    <td>STD Code</td>
                    <td>9999</td>
                </tr>
                <tr>
                    <td>Mobile No.</td>
                    <td>9999999999, 8888888888</td>
                </tr>
                <tr>
                    <td>KinderGarten</td>
                    <td>7777777777, 6666666666</td>
                </tr>
            </table>
            <br />
            <p><strong><i className="fas fa-envelope"></i>  Email</strong></p>
            <p >principal@educareschool.edu.in <br />
            director@educareschool.edu.in
            </p>
            <br />
            <p><strong><i className="fas fa-globe"></i>  School Office Hours</strong> </p>
            <p >Monday to Friday : 09.30 a.m. to 04.30 p.m. <br />
            Saturday : 09.30 a.m. to 12.30 p.m.</p>
        </div>
    </div>
  );
}

export default ContactUs;