import express, { response } from "express";
import cors from "cors";
import mysql from "mysql";
import multer from "multer";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());
var data = {};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
});
app.post("/data", (req, res) => {
  console.log(JSON.stringify(req.body));
  const values = [Object.values(req.body)];

  var sql = db.query(
    "INSERT INTO sdb (AppNo,RegNo,Course,Major,PartI,PartIOthers,EnglishName,TamilName,DOB,Photo,Religion,ReligionOthers,Community,Caste,Nationatlity,MotherTongue,Address,AadharNo,PhoneNo,FName,MName,GName,FQualification,MQualification,GQualification,FIncome,MIncome,GIncome,FPhone,MPhone,GPhone,SchoolSSLC,SSLCCateogry,SSLCCateogryOthers,SSLCMedium,SchoolHSC,HSCCategory,HSCCategoryOthers,HSCMedium,Sports,ExServicemen,ExtraCurricular,FirstGrad,EMISNo,BloodGroup,DifferentlyAbled,Type,Percent,DisablityID,BankStudName,BankName,BankBranch,AccountNo,IFSCCode,MICRNo,AdmissionMode,LateralEntry,JoinedDate,DoA,CourseType) VALUES ? ",
    [values],
    function (err, result) {
      if (err) throw err;
      console.log("data inserted");
    }
  );
});
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "db",
});

app.listen(8080, () => {
  console.log("running");
});
