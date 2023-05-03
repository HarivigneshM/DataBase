import { useState, useEffect } from "react";
import axios from "axios";
let IDValue = {};

function TextInput(props) {
  const { name, txt, ID } = props;
  const [inputValue, setInputValue] = useState("");
  const keys = Object.keys(ID);
  const handleTextChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    ID[keys[0]] = value;
    IDValue = { ...IDValue, ...ID };
  };
  return (
    <div className={name}>
      <div class="form-control">
        <input
          class="input input-alt"
          placeholder={txt}
          required=""
          type="text"
          id={keys[0]}
          value={inputValue}
          onChange={handleTextChange}
        />
        <span class="input-border input-border-alt"></span>
      </div>
    </div>
  );
}

function DropBox(props) {
  const { list, txt, ID } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const keys = Object.keys(ID);
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    ID[keys[0]] = selectedValue;
    IDValue = { ...IDValue, ...ID };
  };

  return (
    <>
      <label>{txt}</label>
      <select id={keys[0]} value={selectedOption} onChange={handleSelectChange}>
        <option value="" disabled selected>
          Select
        </option>
        {list.map((list, index) => (
          <optgroup key={index} label={list.label}>
            {list.values.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </optgroup>
        ))}
      </select>

      {selectedOption === "Others" && (
        <TextInput
          ID={{ [keys[0] + "Others"]: null }}
          txt=" If Others Specify "
        />
      )}
    </>
  );
}
function DropBox2(props) {
  const { list, txt, ID } = props;

  const keys = Object.keys(ID);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    ID[keys[0]] = selectedValue;
    IDValue = { ...IDValue, ...ID };
  };
  return (
    <>
      <label>{txt}</label>
      <select id={keys[0]} onChange={handleSelectChange}>
        <option selected disabled>
          --Select--
        </option>
        {list.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
      {selectedOption === "Others" && (
        <TextInput
          ID={{ [keys[0] + "OThers"]: null }}
          txt=" If Others Specify "
        />
      )}
    </>
  );
}
function Img(props) {
  const { txt, ID } = props;
  const [selectedFile, setSelectedFile] = useState();
  const keys = Object.keys(ID);
  const validateFileType = (event) => {
    const value = event.target.files[0];
    setSelectedFile(value);
    ID[keys[0]] = value;
    IDValue = { ...IDValue, ...ID };
  };
  return (
    <>
      <label>{txt}</label>
      <input
        id={keys[0]}
        type="file"
        accept="image/*"
        alt="Students Photo"
        onChange={validateFileType}
      />
    </>
  );
}

function Date(props) {
  const { txt, ID } = props;
  const [selectedDate, setSelectedDate] = useState("");

  const keys = Object.keys(ID);
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    ID[keys[0]] = selectedDate;
    IDValue = { ...IDValue, ...ID };
  };

  return (
    <>
      <label>{txt}</label>
      <input type="date" id={keys[0]} onChange={handleDateChange} />
    </>
  );
}

function Area(props) {
  const { txt, r, ID } = props;
  const [textareaValue, setTextareaValue] = useState("");

  const keys = Object.keys(ID);
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    ID[keys[0]] = textareaValue;
    IDValue = { ...IDValue, ...ID };
  };

  return (
    <>
      <label>{txt}</label>
      <br />
      <textarea
        rows={r}
        cols={50}
        id={keys[0]}
        onKeyDown={handleTextareaChange}
      />
    </>
  );
}
function TR(props) {
  const { txt, ID } = props;
  const keys = Object.keys(ID);
  return (
    <tr>
      <td>{txt}</td>
      <td>
        <TextInput ID={{ [keys[0]]: null }} />
      </td>
      <td>
        <TextInput ID={{ [keys[1]]: null }} />
      </td>
      <td>
        <TextInput ID={{ [keys[2]]: null }} />
      </td>
    </tr>
  );
}
function Check(props) {
  const { txt, list, ID } = props;
  const keys = Object.keys(ID);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    ID[keys[0]] = !isChecked;
    IDValue = { ...IDValue, ...ID };
  };
  return (
    <>
      <label>{txt}</label>
      <label>{list[0]}</label>
      <input type="checkbox" id={[keys[0]]} onClick={handleCheckboxChange} />
    </>
  );
}
function Radio(props) {
  const { txt, list, name, ID } = props;
  const keys = Object.keys(ID);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    ID[keys[0]] = selectedValue;
    IDValue = { ...IDValue, ...ID };
  };

  return (
    <>
      <label>{txt}</label>
      <label>{list[0]}</label>
      <input
        id={keys[0]}
        type="radio"
        name={name}
        value={list[0]}
        onChange={handleSelectChange}
      />
      <label>{list[1]}</label>
      <input
        id={keys[1]}
        type="radio"
        name={name}
        value={list[1]}
        onChange={handleSelectChange}
      />
      {selectedOption === "Yes" && (
        <>
          <br />
          <div className="line">
            <TextInput txt="Type Of Differerntly abled" ID={{ Type: null }} />
            <TextInput txt="Disability Percentage" ID={{ Percent: null }} />
            <TextInput
              txt="Disability Card (UDID/State)"
              ID={{ DisablityID: null }}
            />
          </div>
        </>
      )}
    </>
  );
}

const handleSubmit = (event) => {
  const formdata = new FormData();
  var fullID = {
    AppNo: null,
    RegNo: null,
    Course: null,
    Major: null,
    PartI: null,
    PartIOthers: null,
    EnglishName: null,
    TamilName: null,
    DOB: null,
    Photo: null,
    Religion: null,
    ReligionOthers: null,
    Community: null,
    Caste: null,
    Nationatlity: null,
    MotherTongue: null,
    Address: null,
    AadharNo: null,
    PhoneNo: null,
    FName: null,
    MName: null,
    GName: null,
    FQualification: null,
    MQualification: null,
    GQualification: null,
    FIncome: null,
    MIncome: null,
    GIncome: null,
    FPhone: null,
    MPhone: null,
    GPhone: null,
    SchoolSSLC: null,
    SSLCCateogry: null,
    SSLCCateogryOthers: null,
    SSLCMedium: null,
    SchoolHSC: null,
    HSCCategory: null,
    HSCCategoryOthers: null,
    HSCMedium: null,
    Sports: null,
    ExServicemen: null,
    ExtraCurricular: null,
    FirstGrad: null,
    EMISNo: null,
    BloodGroup: null,
    DifferentlyAbled: null,
    Type: null,
    Percent: null,
    DisablityID: null,
    BankStudName: null,
    BankName: null,
    BankBranch: null,
    AccountNo: null,
    IFSCCode: null,
    MICRNo: null,
    AdmissionMode: null,
    LateralEntry: null,
    JoinedDate: null,
    DoA: null,
    CourseType: null,
  };
  const FullData = { ...fullID, ...IDValue };
  formdata.append("image", IDValue["Photo"]);
  axios
    .post("http://localhost:8080/upload", formdata)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  axios
    .post("http://localhost:8080/data", FullData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
function Submit() {
  return (
    <>
      <input type="submit" value="Submit" className="submit-btn" />
    </>
  );
}
export {
  Submit,
  Radio,
  TextInput,
  DropBox,
  DropBox2,
  Img,
  Date,
  Area,
  TR,
  Check,
  handleSubmit,
};
