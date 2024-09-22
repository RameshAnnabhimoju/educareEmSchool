import "./FeeStructure.css"
import Accordion from 'react-bootstrap/Accordion';

function FeeStructure() {
  return (
    <div>
      <div className="fee-structure-header-text">
        <h1>Fee Structure</h1>
      </div>
      <Accordion defaultActiveKey="0" className="fee-structure-accordion" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5>Financial Information</h5></Accordion.Header>
        <Accordion.Body>
          <p>The first installment of fees for the academic year is payable on or before 5th May in respect of all students on roll. The Tuition fees as shown in this Prospectus are payable at the Banks,
             and the triplicate of the chalan is to be submitted at the Office when coming to collect Text books, the dates for which will be intimated through a circular to the present students.</p>
          <p>Those seeking fresh admissions will be advised on mode of payment, dates etc. in the selection intimation, sent by the Office.</p>
          <p>Subsequent payments can be made on or before 5th of every month. Fee collection is done through Bank. Over 100 branches of the Canara Bank and Union Bank of India  of Udupi and Dakshina Kannada (Mangaluru)
             districts, and neighbouring districts will accept the School fee payments. The list of branches is shown as Appendix 1 at the end of this Prospectus. The paying-in-slips
             (chalans) for this purpose will be issued at the time of admission by the School Office. The ICICI Bank and AXIS Bank also accept fee payments in all their branches within the country.</p>
          <p>The “Triplicate” of paying-in-slips (chalan) must be sent to the School Office promptly every month. 
            Parents may deposit the “Triplicate” in the boxes provided in School buses from 1st to 10th of the month or send it by post.</p>
          <p>Parents shall keep the “Quadruplicate” safely with them for that is their receipt and proof for having made the remittance. No separate receipt will be issued by the School Office for remittance through Bank.</p>
          <p>While online payments are also permitted, it’s important that a bank receipt / counterfoil is sent to the School Office.  
            While making online payments, the student’s Name, Class and Roll No. must be clearly mentioned.  Without these, the School Office will not be able to identify the remitter.</p>
          <p>The School welcomes payments on or before the due date. Late payments are strongly discouraged as it causes a lot of problems.
             Parents shall take care to remit the correct amount and add late fee if paid after the due date as specified in Fee Rules (4.7) of this Prospectus.</p>
          <p>If any clarification is required, parents are requested to contact the Office personally or write to the Principal.</p>
          <p>All disputes are subject to Udupi Court Jurisdiction.</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h5>Fee Rules</h5></Accordion.Header>
        <Accordion.Body>
        a) The due date for all payments will be the 5th of every month. <br /> <br />
        b) Late fee of Rs 5/- per day (inclusive of holidays) will be levied thereafter. <br /> <br />
        c) If the due date is a public holiday, the next working day will be considered as the due date. <br /> <br />
        d) After the 20th of the month the defaulter’s name will be removed from the rolls of the School and will be allowed to continue only after paying all dues along with a Reactivation fee of Rs 25/- over and above the late fee as detailed above. <br /> <br />
        e) Fee once paid will not be refunded under any circumstances. <br /> <br />
        f) A student who attends any part of a term is required to pay the prescribed fees for the entire term. <br /> <br />
        g) If a parent wishes to discontinue School Food/School Bus facility received by his/her ward, he/she will have to inform in writing at least one month before the anticipated date of discontinuance and obtain a written permission from the Office. However, discontinuance of School Food facility is not permitted once the second term commences and discontinuance of School Bus facility is not permitted from January onwards. <br /><br />
        h) No deduction can be claimed in School Food / School Bus facility fees for days of absence or discontinuance or mid-year vacation and Christmas holidays. <br /> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h5>School Fees</h5></Accordion.Header>
        <Accordion.Body>
          <table className="fee-structure-table">
            <tr>
              <th>Class</th>
              <th>First Instalment <br /> (on admission)</th>
              <th>11 monthly Instalment <br />(June 2024 to April 2025))</th>
            </tr>
            <tr>
              <td>Playschool, LKG, UKG</td>
              <td>Rs XXXX/-</td>
              <td>Rs XXXX/-</td>
            </tr>
            <tr>
              <td>Classes I to IV</td>
              <td>Rs XXXX/-</td>
              <td>Rs XXXX/-</td>
            </tr>
            <tr>
              <td>Classes V to VI</td>
              <td>Rs XXXX/-</td>
              <td>Rs XXXX/-</td>
            </tr>
            <tr>
              <td>Classes VII to VIII</td>
              <td>Rs XXXX/-</td>
              <td>Rs XXXX/-</td>
            </tr>
            <tr>
              <td>Classes IX to X</td>
              <td>Rs XXXX/-</td>
              <td>Rs XXXX/-</td>
            </tr>
            <tr>
              <td>Classes XI to XII</td>
              <td>Rs XXXX/-</td>
              <td>Rs XXXX/-</td>
            </tr>
          </table>
          <p>Classes XI and XII students shall pay Rs 2000/- per annum towards Lab Fees. This is payable with the first installment of fees.</p>
          <p>Those seeking first admission to the School have to pay Rs 500/- towards admission fee (non-refundable), with the first installment.</p>
          <p>Students already on rolls, but joining LKG, Class I and Class XI have to pay Rs 500/- towards admission fee, with the first installment.</p>
          <p>UKG students have to pay Rs 500/- towards Convocation fee, with the first instalment.</p>
          <p>Classes X and XII students have to pay Rs.500/- towards Commencement Day programme, with the first installment.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h5>Capital Expenditure Fee</h5></Accordion.Header>
        <Accordion.Body>
        <p>Parents will pay Rs 15,000/- at the time of first admission towards the capital expenditure of the School. <strong> This amount is not refundable, once an admission is made.</strong></p>
        <p>Please note that the State Government has permitted unaided schools to collect one year’s school fees towards capital expenditure, at the time of first admission.
           However, taking into account the difficulties of many parents, the amount fixed as CEF is much lower than one year’s school fees.</p>
        <p>This amount is payable by DD in favour of Priority Educational Foundation. DDs drawn on Canara Bank at Priority Highlands, Brahmavar are preferred. 
        However, DDs on Union Bank of India, Canara Bank (both at Varambally), Bank of Baroda, State Bank of India (both at Brahmavar), Axis Bank and ICICI Bank are also accepted.
         This DD should not be drawn on EduCare Em School. DDs drawn as instructed here only will be accepted.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><h5>School Food</h5></Accordion.Header>
        <Accordion.Body>
        <p>Playschool and KG (Lunch and milk & snack twice daily) – Rs 925/- per month (mandatory for all Playschool and KG children), payable from June 2024 to March 2025 (ten installments only).   </p>
        <p>Playschool and KG (Lunch and milk & snack twice daily) – Rs 925/- per month (mandatory for all Playschool and KG children), payable from June 2024 to March 2025 (ten installments only).   </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><h5>School Bus</h5></Accordion.Header>
        <Accordion.Body>
          <p><strong>School Bus (VMC) – For those who use the facility</strong></p>
          <p>Rs 750/- per month for the first 5 kms, and for each additional km or fraction thereof, Rs 75/- per month, payable from June 2024 to March 2025 (ten installments only).</p>
          <p> <strong>Note :</strong>If there is a steep hike in the price of diesel as it happens every year now, School Bus Fee (VMC) will be payable in April 2025 to offset the excess expenditure.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><h5>Certificate Fee</h5></Accordion.Header>
        <Accordion.Body>
          <p>Certificates will be issued only on written request from the parents and required a minimum of one day’s notice. Transfer Certificates will be issued only after clearance of all dues to the School.
             Fees payable are as follows:</p>
          <p>Transfer Certificate………………………..Rs 100/-</p>
          <p>Conduct Certificate…………………………Rs 50/-</p>
          <p>Bonafide/Fee Certificate …………………..Rs 30/-</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header><h5>Hostel Fee and Rule</h5></Accordion.Header>
        <Accordion.Body>
          <p><strong>On Admission (2024-25)</strong></p>
          <p>a) For new admission, payable at the time of admission</p>
          <table className="fee-structure-table">
            <tr>
              <td>Registration and Admission</td>
              <td>Rs 200/-</td>
            </tr>
            <tr>
              <td>Utilities</td>
              <td>Rs 1500/-</td>
            </tr>
            <tr>
              <td>Medicare</td>
              <td>Rs 1500/-</td>
            </tr>
            <tr>
              <td>Refundable Caution Deposit</td>
              <td>Rs 3000/-</td>
            </tr>
          </table>
          <p>b) For present Hostellers, payable on admission day in May</p>
          <table className="fee-structure-table">
            <tr>
              <td>Admission Renewal</td>
              <td>Rs 150/-</td>
            </tr>
            <tr>
              <td>Utilities</td>
              <td>Rs 1200/-</td>
            </tr>
            <tr>
              <td>Medicare</td>
              <td>Rs 1500/-</td>
            </tr>
          </table>
          <p><strong>Rule</strong></p>
          <br />
          <p>a)  First installment is to be paid on admission/readmission day in May and second to tenth installments are to be paid on the 5th
             of each month beginning July. If the due date is a public holiday, the next working day will be considered as the due date.
          </p>
          <p>b)  Late fee of Rs 5/- per day (inclusive of holidays) will be charged thereafter.</p>
          <p> No deduction will be given for days of absence. No deduction can be claimed in Hostel fees for days of absence or discontinuance or mid-year vacation and Christmas holidays. </p>
          <p>d) Option of vegetarian mess or non-vegetarian mess must be made at the time of admission and change  thereafter is ordinarily not permitted.</p>
          <p>e) No fee paid will be refunded except the refundable Caution Deposit which will be refunded when the pupil leaves the Hostel.  One month’s notice in writing is required for return of Caution Deposit.
             The original receipt has to be surrendered with the application for refund. The refund cheque will be issued in the same name as mentioned in the receipt.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header><h5>School Food & Establishment Charges</h5></Accordion.Header>
        <Accordion.Body>
          <p><strong>Monthly fees (July 2024 to March 2025) payable by 5th of every month. Payment for June is payable at the time of admission.</strong></p>
          <h2>Vegetarian Mess</h2>
          <table className="fee-structure-table">
            <tr>
              <td>Food</td>
              <td>Rs 4400/-</td>
            </tr>
            <tr>
              <td>Establishment and Facilities</td>
              <td>Rs 1500/-</td>
            </tr>
            <tr>
              <td>Total (per month)</td>
              <td>Rs 5900/-</td>
            </tr>
          </table>
          <h2>Non-Vegetarian Mess</h2>
          <table className="fee-structure-table">
            <tr>
              <td>Food</td>
              <td>Rs 5100/-</td>
            </tr>
            <tr>
              <td>Establishment and Facilities</td>
              <td>Rs 1500/-</td>
            </tr>
            <tr>
              <td>Total (per month)</td>
              <td>Rs 6600/-</td>
            </tr>
          </table>
          <p><strong>Special Food (Egg for breakfast) Rs. 700/- (Payable in addition to Veg or Non-Veg bill, if opted).</strong></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header><h5>School Development Fund</h5></Accordion.Header>
        <Accordion.Body>
        <p>A School like LRIS needs large sums of money for its developments. The fee collected is not sufficient even to meet the recurring 
        expenditure. Yet no capitation fee is collected. Hence parents who can afford are encouraged to contribute to the School Development Fund.
        </p>
        <p>
        It should, however, be noted that the admission of the child is in no way connected with the above. Further, a parent who helps the School in any manner mentioned above shall not expect any special favour.
        </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default FeeStructure