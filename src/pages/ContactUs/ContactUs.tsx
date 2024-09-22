import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-container">
        <h1>Contact Us</h1>
        <p>Wish to enquire about admissions, syllabus, or anything else? <br />You can walk in during office hours, give us a call or simply submit the form here.</p>
        <p><strong><i className="fas fa-map-marker-alt"></i></strong> Address</p>
        <h3 className="aboutSchool-subdetails">Educare EM School <br /> 
        Molleti vari merakha, Mamidikuduru mandal,<br />
        Dr. BR Ambedkar konaseema district, Nagaram,<br />
        Andhra Pradesh, India.
        </h3>
        <p><strong><i className="fas fa-phone-alt"></i>  Phone</strong></p>
        <p className="aboutSchool-subdetails">office :99999999999, 8888888888</p>
        <table className="aboutSchool-table aboutSchool-subdetails">
            <tr>
                <td>STD Code</td>
                <td>9999</td>
            </tr>
            <tr>
                <td>Mobile No.</td>
                <td>99999999999, 8888888888</td>
            </tr>
            <tr>
                <td>KinderFarten</td>
                <td>77777777777, 6666666666</td>
            </tr>
        </table>
        <br />
        <p><strong><i className="fas fa-envelope"></i>  Email</strong></p>
        <p className="aboutSchool-subdetails">principal@educareschool.edu.in <br />
           director@educareschool.edu.in
        </p>
        <br />
        <p><strong><i className="fas fa-globe"></i>  School Office Hours</strong> </p>
        <p className="aboutSchool-subdetails">Monday to Friday : 09.30 a.m. to 04.30 p.m. <br />
           Saturday : 09.30 a.m. to 12.30 p.m.</p>
    </div>
  );
}

export default ContactUs;