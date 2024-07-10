import "./AdmissionsCompoenet.css";
import Card from "react-bootstrap/Card";
import { kidplay, kidplay2, class6 } from "../../assets";
function AdmissionsComponent() {
  return (
    <div id="admissions-container">
      <h2>Admission 2024-25</h2>
      <div className="Quotation-1">
        A good education is the foundation of a better future{" "}
      </div>
      <div className="subText-1">
        Admissions to Playschool and LKG commence in January 2024. Parents are
        required to file an Application form, seeking admission.
      </div>
      <div id="admissions-inner-container">
        <Card className="bg-white text-white admissions_card">
          <Card.Img
            src={kidplay}
            alt="Card image"
            className="admissions_card_image"
          />
          <Card.ImgOverlay className="admissions_card_overlay">
            <Card.Title>TRANSFER ADMISSIONS CLASSES I TO IX</Card.Title>
            <Card.Text>
              Registration forms and Prospectus will be issued with effect from
              April 16 to 19, 2024 and eligible candidates will be intimated by
              22nd April 2024.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-white text-white admissions_card">
          <Card.Img
            src={class6}
            alt="Card image"
            className="admissions_card_image"
          />
          <Card.ImgOverlay className="admissions_card_overlay">
            <Card.Title>ADMISSIONS TO CLASS XI</Card.Title>
            <Card.Text>
              A candidate who has completed the All India Secondary School
              Examination, conducted by the CBSE, Delhi or its equivalent like
              ICSE, SSLC is eligible for admission
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-white text-white admissions_card">
          <Card.Img
            src={kidplay2}
            alt="Card image"
            className="admissions_card_image"
          />
          <Card.ImgOverlay className="admissions_card_overlay">
            <Card.Title>TRANSFER ADMISSIONS UKG</Card.Title>
            <Card.Text>
              Application forms and Prospectus will be issued with effect from
              January 9, 2024.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
}

export default AdmissionsComponent;
