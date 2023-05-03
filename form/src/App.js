import "./App.css";
import {
  TextInput,
  DropBox,
  DropBox2,
  Img,
  Date,
  Area,
  TR,
  Check,
  Radio,
  Submit,
  handleSubmit,
} from "./components/Props.js";

function App() {
  return (
    <div class="hero">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div className="center">
        <div className="App">
          <form onSubmit={handleSubmit}>
            <h1> Student Database Entry</h1>
            <div className="line">
              <TextInput txt="Application No." ID={{ AppNo: null }} />
              <TextInput txt="Registration No." ID={{ RegNo: null }} />
            </div>
            <div className="line">
              <DropBox
                ID={{ Course: null }}
                txt="Course "
                list={[
                  {
                    label: "Under Graduate",
                    values: [
                      "B.B.A",
                      "B.Com.",
                      "B.Sc.",
                      "B.C.A",
                      "B.A",
                      "B.S.W",
                    ],
                  },
                  {
                    label: "Post Graduate",
                    values: ["M.Sc.", "M.Com.", "M.Phil."],
                  },
                ]}
                className="line"
              />
              <DropBox2
                ID={{ Major: null }}
                txt="Major "
                list={[
                  "General",
                  "Business Adminstration",
                  "Accounting & Finance",
                  "Corporate Secretaryship",
                  "Bank Management",
                  "Computer Application",
                  "Computer Science",
                  "Software Application",
                  "Maths",
                  "English Literature",
                  "Physics",
                  "Chemistry",
                  "Social Work",
                  "Plant Biology & Plant Bio Technology",
                  "Tamil Literature",
                  "Criminology & Police Adminstration",
                  "Information & System Management",
                ]}
              />
            </div>
            <div className="line">
              <DropBox2
                ID={{ PartI: null }}
                txt="Part 1 language "
                list={["Tamil", "Sankrit", "Hindi", "French", "Others"]}
              />
            </div>
            <div className="line">
              <TextInput
                txt="Student's Name :  English "
                ID={{ EnglishName: null }}
              />
              <TextInput
                txt="Student's Name :  Tamil "
                ID={{ TamilName: null }}
              />
            </div>
            <div className="line">
              <Date txt="Date Of Birth " ID={{ DOB: null }} />
              <Img txt=" Students Passport Size Photo " ID={{ Photo: null }} />
            </div>
            <div className="line">
              <DropBox2
                ID={{ Religion: null }}
                list={["Hindu", "Muslim", "Christian", "Others"]}
                txt="Reilgion "
              />
              <DropBox2
                list={["SC", "ST", "MBC", "BC", "DNC", "GEN"]}
                ID={{ Community: null }}
                txt="Community "
              />
              <TextInput txt="Caste " ID={{ Caste: null }} />
            </div>
            <div className="line">
              <TextInput txt="Nationality " ID={{ Nationatlity: null }} />
              <TextInput txt="Mother Tongue " ID={{ MotherTongue: null }} />
            </div>
            <div className="line">
              <Area txt="Address" r={3} ID={{ Address: null }} />
            </div>
            <div className="line">
              <TextInput
                txt="Student Aadhar Card No. "
                ID={{ AadharNo: null }}
              />
              <TextInput txt="Student Mobile No. " ID={{ PhoneNo: null }} />
            </div>
            <div>
              <table border="2px" color="black">
                <tr>
                  <th></th>
                  <th>Father</th>
                  <th>Mother</th>
                  <th>Guardian</th>
                </tr>
                <TR txt="Name" ID={{ FName: null, MName: null, GName: null }} />
                <TR
                  txt="Qualification"
                  ID={{
                    FQualification: null,
                    MQualification: null,
                    GQualification: null,
                  }}
                />
                <TR
                  txt="Monthly Income"
                  ID={{ FIncome: null, MIncome: null, GIncome: null }}
                />
                <TR
                  txt="Mobile No."
                  ID={{ FPhone: null, MPhone: null, GPhone: null }}
                />
              </table>
            </div>
            <div className="line">
              <TextInput
                txt="Name of the School studied (SSLC)"
                ID={{ SchoolSSLC: null }}
              />
              <DropBox
                ID={{ SSLCCateogry: null }}
                list={[
                  {
                    label: "CBSE",
                    values: ["Private"],
                  },
                  {
                    label: "State Board",
                    values: ["Government", "Government Aided", "Private"],
                  },
                  {
                    label: "Others",
                    values: ["Others"],
                  },
                ]}
              />
              <DropBox2
                txt="Medium "
                list={["Tamil", "English"]}
                ID={{ SSLCMedium: null }}
              />
            </div>
            <div className="line">
              <TextInput
                txt="Name of the School studied (HSC) "
                ID={{ SchoolHSC: null }}
              />
              <DropBox
                ID={{ HSCCategory: null }}
                list={[
                  {
                    label: "CBSE",
                    values: ["Private"],
                  },
                  {
                    label: "State Board",
                    values: ["Government", "Government Aided", "Private"],
                  },
                  {
                    label: "Others",
                    values: ["Others"],
                  },
                ]}
              />
              <DropBox2
                txt="Medium "
                list={["Tamil", "English"]}
                ID={{ HSCMedium: null }}
              />
            </div>
            <div className="line">
              <Check
                ID={{ Sports: null }}
                list={["Sports ", "Ex-servicemen "]}
                txt="Special Category : "
              />
              <Check ID={{ ExServicemen: null }} list={["Ex-servicemen"]} />
            </div>
            <div className="line">
              <Area
                txt="Extra Curricular Activities other than sports"
                ID={{ ExtraCurricular: null }}
                r={5}
              />
            </div>
            <div className="line">
              <Radio
                ID={{ FirstGrad: null }}
                txt="First Graduate : "
                list={[" Yes ", " No "]}
                name="Grad"
              />
            </div>
            <TextInput txt="EMIS No." name="line" ID={{ EMISNo: null }} />
            <TextInput
              txt="Blood Group"
              name="line"
              ID={{ BloodGroup: null }}
            />
            <div className="line">
              <Radio
                txt="Differently Abled: "
                ID={{ DifferentlyAbled: null }}
                list={["Yes", " No "]}
                name="Differently Abled"
              />
            </div>
            <div className="line">
              <TextInput
                txt="Student Name as in Bank Account "
                ID={{ BankStudName: null }}
              />
              <TextInput txt="Bank Name " ID={{ BankName: null }} />
              <TextInput txt="Branch " ID={{ BankBranch: null }} />
            </div>
            <div className="line">
              <TextInput txt="Account No. " ID={{ AccountNo: null }} />
              <TextInput txt="IFSC Code " ID={{ IFSCCode: null }} />
              <TextInput txt="MICR No. " ID={{ MICRNo: null }} />
            </div>
            <div className="line">
              <Radio
                ID={{ AdmissionMode: null }}
                txt="Admission Mode "
                list={["Govt.", " Mgmt."]}
                name="Admission Mode"
              />
            </div>
            <div className="line">
              <Radio
                ID={{ LateralEntry: null }}
                txt="Lateral Entry "
                list={[" Yes ", " No "]}
                name="Lateral Entry"
              />
            </div>
            <div className="line">
              <Date txt="Course Joined Date" ID={{ JoinedDate: null }} />
              <Date txt="Date Of Admission" ID={{ DoA: null }} />
            </div>
            <div className="line">
              <Radio
                ID={{ CourseType: null }}
                txt="Course Type "
                list={["Regular", "Part Time"]}
                name="Course Type"
              />
            </div>
            <Submit />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
